import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REQUEST_BYTES = 25_000;
let rateLimiter: Ratelimit | null | undefined;

function getRateLimiter() {
  if (rateLimiter !== undefined) return rateLimiter;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    rateLimiter = null;
    return rateLimiter;
  }
  rateLimiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "yusuf-portfolio:contact",
  });
  return rateLimiter;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

function htmlMessage(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function headerSafe(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function errorResponse(message: string, status: number) {
  return Response.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) return errorResponse("Your message is too large. Please shorten it and try again.", 413);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse("Invalid request. Please try again.", 400);
  }

  if (JSON.stringify(body).length > MAX_REQUEST_BYTES) return errorResponse("Your message is too large. Please shorten it and try again.", 413);

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return errorResponse("Please check your details and try again.", 400);

  // Silently accept honeypot submissions so automated senders cannot learn the field behaviour.
  if (parsed.data.website) return Response.json({ success: true, message: "Your message has been sent successfully." });

  const limiter = getRateLimiter();
  if (!limiter && process.env.NODE_ENV === "production") {
    console.error("Contact rate limiting is not configured.");
    return errorResponse("The contact service is temporarily unavailable. Please email me directly.", 503);
  }
  if (limiter) {
    try {
      const rate = await limiter.limit(getClientIp(request));
      if (!rate.success) return errorResponse("Too many requests. Please wait a few minutes before trying again.", 429);
    } catch (error) {
      console.error("Contact rate limiter failed.", error);
      return errorResponse("The contact service is temporarily unavailable. Please try again later.", 503);
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!apiKey || !to || !from) {
    console.error("Contact email environment variables are not configured.");
    return errorResponse("The contact service is temporarily unavailable. Please email me directly.", 503);
  }

  const { name, email, subject, message } = parsed.data;
  const safeName = headerSafe(name);
  const safeSubject = headerSafe(subject);
  const submittedAt = new Date().toISOString();
  const emailSubject = `[Portfolio Contact] ${safeSubject} — ${safeName}`;
  const resend = new Resend(apiKey);

  const html = `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#171717"><h1 style="font-size:20px">New portfolio enquiry</h1><p><strong>Name:</strong><br />${escapeHtml(safeName)}</p><p><strong>Email:</strong><br />${escapeHtml(email)}</p><p><strong>Enquiry type:</strong><br />${escapeHtml(safeSubject)}</p><p><strong>Message:</strong><br />${htmlMessage(message)}</p><hr /><p style="color:#666;font-size:12px"><strong>Source:</strong> yusufaiman.me/contact<br /><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p></div>`;
  const text = `NEW PORTFOLIO ENQUIRY\n\nName:\n${safeName}\n\nEmail:\n${email}\n\nEnquiry Type:\n${safeSubject}\n\nMessage:\n${message}\n\nSource:\nyusufaiman.me/contact\n\nSubmitted At:\n${submittedAt}`;

  try {
    const result = await resend.emails.send({ from, to: [to], replyTo: email, subject: emailSubject, html, text });
    if (result.error) {
      console.error("Resend rejected contact email.", result.error);
      return errorResponse("Your message could not be sent right now. Please try again or email me directly.", 502);
    }

    if (process.env.CONTACT_SEND_CONFIRMATION === "true") {
      try {
        const firstName = safeName.split(/\s+/)[0] || "there";
        const confirmation = await resend.emails.send({
          from,
          to: [email],
          subject: "Thank You for Reaching Out — Yusuf Aiman",
          html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#171717"><p>Hi ${escapeHtml(firstName)},</p><p>Thank you for getting in touch.</p><p>I've received your enquiry and appreciate you taking the time to reach out.</p><p>I'll review your message and respond as soon as I can.</p><p>Best regards,<br />Yusuf Aiman<br />Full-Stack Developer &amp; Software Engineer</p><p>Portfolio: yusufaiman.me</p></div>`,
          text: `Hi ${firstName},\n\nThank you for getting in touch.\n\nI've received your enquiry and appreciate you taking the time to reach out.\n\nI'll review your message and respond as soon as I can.\n\nBest regards,\nYusuf Aiman\nFull-Stack Developer & Software Engineer\n\nPortfolio: yusufaiman.me`,
        });
        if (confirmation.error) console.warn("Optional contact confirmation email failed.", confirmation.error);
      } catch (confirmationError) {
        console.warn("Optional contact confirmation email failed.", confirmationError);
      }
    }

    return Response.json({ success: true, message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Contact email delivery failed.", error);
    return errorResponse("Your message could not be sent right now. Please try again or email me directly.", 502);
  }
}
