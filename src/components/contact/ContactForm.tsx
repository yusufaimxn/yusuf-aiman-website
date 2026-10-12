"use client";

import { AlertCircle, ArrowUpRight, Check, Loader2, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useState } from "react";
import { contactSchema, enquiryTypes } from "@/lib/contact";

type FormStatus = "idle" | "sending" | "success" | "error";
type FieldName = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationSummary, setValidationSummary] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(field: FieldName) {
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
    setValidationSummary("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form).entries()));
    setErrorMessage("");
    setValidationSummary("");
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const [field, messages] of Object.entries(parsed.error.flatten().fieldErrors)) {
        if (messages?.[0] && field !== "website") nextErrors[field as FieldName] = messages[0];
      }
      setFieldErrors(nextErrors);
      setValidationSummary("Please check the highlighted fields and try again.");
      return;
    }
    setFieldErrors({});
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
      const result = await response.json() as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message || "Your message could not be sent right now.");
      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setErrorMessage(submissionError instanceof Error ? submissionError.message : "Your message could not be sent right now.");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row"><label><span>Full name</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} onChange={() => clearFieldError("name")} />{fieldErrors.name && <small className="field-error" id="name-error">{fieldErrors.name}</small>}</label><label><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} onChange={() => clearFieldError("email")} />{fieldErrors.email && <small className="field-error" id="email-error">{fieldErrors.email}</small>}</label></div>
      <label><span>What are you reaching out about?</span><select name="subject" defaultValue="General Enquiry" aria-invalid={Boolean(fieldErrors.subject)} aria-describedby={fieldErrors.subject ? "subject-error" : undefined} onChange={() => clearFieldError("subject")}>{enquiryTypes.map((subject) => <option key={subject}>{subject}</option>)}</select>{fieldErrors.subject && <small className="field-error" id="subject-error">{fieldErrors.subject}</small>}</label>
      <label><span>Message</span><textarea name="message" rows={6} placeholder="Tell me a little about the opportunity or idea..." required aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "message-error" : undefined} onChange={() => clearFieldError("message")} />{fieldErrors.message && <small className="field-error" id="message-error">{fieldErrors.message}</small>}</label>
      <div className="contact-honeypot" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
      <AnimatePresence initial={false} mode="wait">
        {validationSummary && <motion.p className="form-message form-error" role="alert" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}><AlertCircle size={16} /> {validationSummary}</motion.p>}
        {status === "error" && <motion.div className="form-feedback form-feedback-error" role="alert" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}><AlertCircle size={18} /><div><strong>Something Went Wrong</strong><span>{errorMessage} Please try again or contact me directly at <a href="mailto:myusufaiman05@gmail.com">myusufaiman05@gmail.com</a>.</span></div></motion.div>}
        {status === "success" && <motion.div className="form-feedback form-feedback-success" role="status" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}><Check size={18} /><div><strong>Message Sent Successfully</strong><span>Thanks for reaching out. Your message has been submitted successfully, and I&apos;ll get back to you as soon as possible.</span></div></motion.div>}
      </AnimatePresence>
      <motion.button className="button button-primary" type="submit" disabled={status === "sending"} aria-busy={status === "sending"} whileHover={status === "sending" ? undefined : { y: -2 }} whileTap={status === "sending" ? undefined : { scale: .98 }}>{status === "sending" ? <><Loader2 className="contact-spinner" size={16} /> Sending Message...</> : <><Send size={16} /> Send Message <ArrowUpRight size={15} /></>}</motion.button>
      <p className="form-note">Your message is sent through a secure server-side delivery flow. Please don&apos;t include passwords or sensitive personal information.</p>
    </form>
  );
}
