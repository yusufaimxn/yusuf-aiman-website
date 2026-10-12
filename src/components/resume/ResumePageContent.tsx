import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, ExternalLink, GraduationCap, Layers3, Mail, MapPin } from "lucide-react";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { SkillIcon } from "@/components/skills/SkillExplorer";
import { projects, skills } from "@/data/portfolio";
import {
  additionalProjects,
  resumeAchievements,
  resumeAdditionalExpertise,
  resumeEducation,
  resumeExperience,
  resumeProjects,
  resumeSkillGroups,
  resumeSummary,
  resumeTitles,
} from "@/data/resume";
import { ResumeInfoCard, ResumePdfActions } from "@/components/resume/ResumeInfoCard";

const skillLookup = new Map(skills.map((skill) => [skill.id, skill]));
const projectLookup = new Map(projects.map((project) => [project.slug, project]));

function ResumeSectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: React.ReactNode }) {
  return <Reveal className="resume-section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="resume-section-description">{description}</p>}</div>{action}</Reveal>;
}

function ResumeSkillIcon({ iconSkillId, name }: { iconSkillId?: string; name: string }) {
  const skill = iconSkillId ? skillLookup.get(iconSkillId) : undefined;
  return skill ? <SkillIcon skill={skill} /> : <span className="resume-skill-fallback" aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
}

function ProjectLink({ slug }: { slug?: string }) {
  if (!slug) return null;
  const project = projectLookup.get(slug);
  return project ? <Link className="resume-project-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={14} /></Link> : null;
}

export function ResumePageContent() {
  return <main className="resume-page">
    <section className="page-hero resume-page-hero">
      <div className="container">
        <div className="resume-hero-grid">
          <Reveal className="resume-hero-copy" distance={22}>
            <p className="eyebrow">Resume / 2026</p>
            <div className="resume-hero-title"><h1>Experience, Skills &amp; Everything I&apos;ve Built.</h1><span className="resume-version-mark">OCT<br />2026</span></div>
            <p className="page-hero-copy">An overview of my professional experience, technical expertise, software projects, education, and achievements.</p>
            <div className="resume-title-list">{resumeTitles.map((title) => <span key={title}>{title}</span>)}</div>
            <div className="resume-hero-meta"><span><Check size={14} /> Official document</span><span>Last updated October 2026</span></div>
            <ResumePdfActions />
            <Link className="resume-tertiary-action" href="/contact">Let&apos;s connect <ArrowUpRight size={15} /></Link>
          </Reveal>
          <Reveal className="resume-hero-aside" delay={0.14} distance={22}><ResumeInfoCard /></Reveal>
        </div>
      </div>
    </section>

    <section className="section resume-overview-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="01 / Resume overview" title="A practical view of the work behind the title." description="The short version: a software builder with a systems mindset, a product eye, and a business perspective." />
        <div className="resume-overview-grid">
          <Reveal className="resume-overview-intro"><p>I build thoughtful digital products across web, mobile, and integrated business systems. The resume is the formal snapshot; the portfolio shows the work in context.</p><Link className="text-link" href="/projects">Explore selected projects <ArrowUpRight size={15} /></Link></Reveal>
          <div className="resume-overview-facts">
            <Reveal delay={0.08} distance={18}><article><span className="resume-fact-icon"><BriefcaseBusiness size={17} /></span><strong>Founder &amp; Software Developer</strong><span>Omni Systems Technology · 2026 — Present</span></article></Reveal>
            <Reveal delay={0.14} distance={18}><article><span className="resume-fact-icon"><Code2 size={17} /></span><strong>Full-stack product development</strong><span>Web applications, mobile products, and business systems</span></article></Reveal>
            <Reveal delay={0.2} distance={18}><article><span className="resume-fact-icon"><AnimatedCounter value={3} /></span><strong>Professional experience chapters</strong><span>Software development and digital marketing</span></article></Reveal>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-border resume-summary-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="02 / Professional summary" title="Technical enough to build. Business-aware enough to matter." />
        <div className="resume-summary-grid"><Reveal className="resume-summary-mark" distance={20}>01<span>.</span></Reveal><Reveal className="resume-summary-copy" delay={0.1} distance={20}>{resumeSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal></div>
      </div>
    </section>

    <section className="section resume-skills-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="03 / Technical skills" title="The tools and practices I use to make things work." description="A compact view of the technical toolkit from the October 2026 resume." action={<Link className="button button-secondary resume-heading-action" href="/skills">Open complete skills index <ArrowUpRight size={15} /></Link>} />
        <div className="resume-skill-grid">{resumeSkillGroups.map((group, index) => <Reveal key={group.title} delay={index * 0.045} distance={18}><article className="resume-skill-group"><div className="resume-skill-group-head"><span>0{index + 1}</span><h3>{group.title}</h3></div><p>{group.description}</p><div className="resume-skill-list">{group.skills.map((skill) => <span className="resume-skill-chip" key={skill.name}><ResumeSkillIcon iconSkillId={skill.iconSkillId} name={skill.name} />{skill.name}</span>)}</div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="section section-border resume-experience-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="04 / Professional experience" title="Roles shaped by building, learning, and taking ownership." description="An interactive timeline of the professional experience documented in the official resume." />
        <div className="resume-timeline">{resumeExperience.map((experience, index) => <Reveal key={`${experience.organisation}-${experience.role}`} delay={index * 0.08} distance={22}><article className="resume-experience-item"><div className="resume-timeline-index">0{index + 1}</div><div className="resume-experience-main"><div className="resume-experience-head"><div><p className="resume-period">{experience.period}</p><h3>{experience.role}</h3><p className="resume-organisation">{experience.organisation}</p></div><span className="resume-experience-badge">{index === 0 ? "Current" : "Experience"}</span></div><p className="resume-experience-description">{experience.description}</p><details className="resume-responsibilities" open={index === 0}><summary>Responsibilities <span>+</span></summary><ul>{experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></details></div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="section resume-projects-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="05 / Selected software projects" title="Products, platforms, and systems built around useful outcomes." description="Selected projects from the portfolio and the official resume, with case-study links only where a corresponding route exists." action={<Link className="button button-secondary resume-heading-action" href="/projects">View all projects <ArrowUpRight size={15} /></Link>} />
        <div className="resume-project-grid">{resumeProjects.map((project, index) => <Reveal key={project.name} delay={index * 0.07} distance={20}><article className="resume-project-card"><div className="resume-project-top"><span>0{index + 1}</span><Layers3 size={18} /></div><p className="resume-project-category">{project.category}</p><h3>{project.name}</h3><div className="resume-project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><ProjectLink slug={project.projectSlug} /></article></Reveal>)}</div>
        <div className="resume-additional-projects"><span>Additional projects</span>{additionalProjects.map((project) => <span key={project.name}><Link href={`/projects/${project.projectSlug}`}>{project.name}</Link><ArrowUpRight size={13} /></span>)}</div>
      </div>
    </section>

    <section className="section section-border resume-education-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="06 / Education" title="Different disciplines, one systems perspective." />
        <div className="resume-education-grid">{resumeEducation.map((education, index) => <Reveal key={education.institution} delay={index * 0.1} distance={20}><article className="resume-education-card"><div className="resume-education-icon"><GraduationCap size={22} /></div><div><p className="resume-period">{education.period}</p><h3>{education.qualification}</h3><p className="resume-organisation">{education.institution}{education.location ? ` · ${education.location}` : ""}</p><ul>{education.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="section resume-achievements-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="07 / Leadership & achievements" title="The milestones behind the momentum." description="Leadership, academic recognition, entrepreneurship, and personal discipline all inform how I work." />
        <div className="resume-achievement-grid">{resumeAchievements.map((achievement, index) => <Reveal key={`${achievement.title}-${achievement.organisation}`} delay={index * 0.055} distance={18}><article className="resume-achievement-card"><span className="resume-achievement-index">0{index + 1}</span><h3>{achievement.title}</h3><p className="resume-achievement-organisation">{achievement.organisation}</p><p>{achievement.description}</p></article></Reveal>)}</div>
      </div>
    </section>

    <section className="section section-border resume-expertise-section">
      <div className="container">
        <ResumeSectionHeading eyebrow="08 / Additional expertise" title="The work around the work." description="Complementary capabilities that connect software with communication, creative production, and business reality." />
        <div className="resume-expertise-grid">{resumeAdditionalExpertise.map((group, index) => <Reveal key={group.title} delay={index * 0.07} distance={18}><article className="resume-expertise-card"><span className="resume-achievement-index">0{index + 1}</span><h3>{group.title}</h3><div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="resume-cta-section">
      <div className="container"><Reveal className="resume-cta-panel" distance={24}><div><p className="eyebrow">09 / Keep the conversation moving</p><h2>See the document. Then see the work.</h2><p>Download the official October 2026 resume, open it in a new tab, or get in touch to talk through an opportunity.</p><ResumePdfActions /><Link className="resume-tertiary-action" href="/contact"><Mail size={15} /> Let&apos;s connect <ArrowUpRight size={15} /></Link></div><div className="resume-cta-contact"><MapPin size={17} /><span>{"Cyberjaya, Selangor, Malaysia"}</span><a href="mailto:myusufaiman05@gmail.com">myusufaiman05@gmail.com</a><a href="https://www.linkedin.com/in/yusuf-aiman-2810562b9" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a></div></Reveal></div>
    </section>
  </main>;
}
