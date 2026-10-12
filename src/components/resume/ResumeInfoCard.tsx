import Link from "next/link";
import { ArrowUpRight, CalendarDays, CheckCircle2, Download, ExternalLink, FileText, MapPin } from "lucide-react";
import { resumeDocument, resumePdfUrl } from "@/data/resume";

export function ResumePdfActions({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "resume-pdf-actions resume-pdf-actions-compact" : "resume-pdf-actions"}>
    <a className="button button-primary" href={resumePdfUrl} download="Muhammad_Yusuf_Aiman_Resume_October_2026.pdf"><Download size={16} /> Download Resume</a>
    <a className="button button-secondary" href={resumePdfUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} /> View PDF</a>
  </div>;
}

export function ResumeInfoCard() {
  return <aside className="resume-info-card">
    <div className="resume-info-card-top"><span className="resume-info-icon"><FileText size={19} /></span><span className="resume-status"><CheckCircle2 size={14} /> {resumeDocument.status}</span></div>
    <p className="resume-info-label">Document</p>
    <h2>{resumeDocument.title}</h2>
    <dl className="resume-info-list">
      <div><dt>Name</dt><dd>{resumeDocument.name}</dd></div>
      <div><dt>Version</dt><dd>{resumeDocument.version}</dd></div>
      <div><dt>Last updated</dt><dd><CalendarDays size={14} /> {resumeDocument.lastUpdated}</dd></div>
      <div><dt>Format</dt><dd>{resumeDocument.format} · {resumeDocument.pages} pages</dd></div>
      <div><dt>Primary focus</dt><dd>{resumeDocument.focus.join(" · ")}</dd></div>
      <div><dt>Location</dt><dd><MapPin size={14} /> {resumeDocument.location}</dd></div>
    </dl>
    <ResumePdfActions compact />
    <Link className="resume-info-contact" href="/contact">Let&apos;s connect <ArrowUpRight size={14} /></Link>
  </aside>;
}
