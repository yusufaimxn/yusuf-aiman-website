import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { socialLinks } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Yusuf Aiman | Developer in Malaysia",
  description: "Contact Yusuf Aiman for software development opportunities, technical collaborations, professional discussions, and digital projects.",
  path: "/contact",
});

export default function ContactPage() {
  return <main><section className="page-hero"><div className="container"><p className="eyebrow">Contact / 07</p><h1>Let&apos;s build something meaningful.</h1><p className="page-hero-copy">I&apos;m open to software development opportunities, professional collaborations, and conversations about technology and digital products.</p></div></section><section className="section"><div className="container"><div className="contact-grid"><div className="contact-details"><p className="eyebrow">Start here</p><h2>Good questions make better products.</h2><p>Tell me what you&apos;re working on, what you&apos;re trying to solve, or what kind of opportunity you have in mind.</p><a className="contact-email" href="mailto:myusufaiman05@gmail.com"><Mail size={15} /> myusufaiman05@gmail.com</a><div className="contact-socials">{socialLinks.map((social) => <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label} ↗</a>)}</div></div><ContactForm /></div></div></section></main>;
}
