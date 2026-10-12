import { z } from "zod";

export const enquiryTypes = [
  "Job Opportunity",
  "Freelance Project",
  "Business Collaboration",
  "Software Development",
  "General Enquiry",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100, "Your name is too long.").regex(/^[^\r\n]*$/, "Please enter a valid name."),
  email: z.string().trim().max(254, "Please enter a valid email address.").email("Please enter a valid email address."),
  subject: z.enum(enquiryTypes, { error: "Please select a valid enquiry type." }),
  message: z.string().trim().min(10, "Your message must be at least 10 characters.").max(5000, "Your message is too long."),
  // Honeypot content is inspected after parsing; keep it bounded so bots cannot
  // use the field to bypass the request-size guard with an oversized value.
  website: z.string().max(256).optional().default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
