"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BadgeDollarSign,
  BellRing,
  BookOpen,
  Boxes,
  Building2,
  Calculator,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  CalendarSync,
  ChartNoAxesCombined,
  CircleUserRound,
  ClipboardCheck,
  ClipboardList,
  CloudCog,
  Compass,
  ContactRound,
  Cpu,
  DatabaseZap,
  Files,
  FileText,
  Fingerprint,
  FolderKanban,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  LayoutPanelTop,
  Library,
  LibraryBig,
  Layers3,
  ListChecks,
  ListOrdered,
  LogIn,
  Network,
  NotebookTabs,
  Package,
  PanelsTopLeft,
  QrCode,
  Route,
  ScanSearch,
  ShieldCheck,
  ShieldQuestion,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Table2,
  UsersRound,
  WalletCards,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/data/portfolio";
import type { ArchitectureNode, ProjectCaseStudy } from "@/data/project-case-studies";

const iconMap: Record<string, LucideIcon> = {
  "arrow-left-right": ArrowLeft,
  "badge-dollar-sign": BadgeDollarSign,
  bell: BellRing,
  "bell-ring": BellRing,
  blocks: Blocks,
  book: BookOpen,
  "book-open": BookOpen,
  boxes: Boxes,
  "building-2": Building2,
  calculator: Calculator,
  "calendar-clock": CalendarClock,
  "calendar-days": CalendarDays,
  "calendar-range": CalendarRange,
  "calendar-sync": CalendarSync,
  "chart-no-axes-combined": ChartNoAxesCombined,
  "circle-user-round": CircleUserRound,
  "clipboard-check": ClipboardCheck,
  "clipboard-list": ClipboardList,
  "cloud-cog": CloudCog,
  compass: Compass,
  "contact-round": ContactRound,
  cpu: Cpu,
  "database-zap": DatabaseZap,
  files: Files,
  "file-text": FileText,
  fingerprint: Fingerprint,
  "folder-kanban": FolderKanban,
  "globe-2": Globe2,
  "graduation-cap": GraduationCap,
  "layout-dashboard": LayoutDashboard,
  "layout-panel-top": LayoutPanelTop,
  library: Library,
  "library-big": LibraryBig,
  "layers-3": Layers3,
  "list-checks": ListChecks,
  "list-ordered": ListOrdered,
  "log-in": LogIn,
  network: Network,
  "notebook-tabs": NotebookTabs,
  package: Package,
  "panels-top-left": PanelsTopLeft,
  "qr-code": QrCode,
  route: Route,
  "scan-search": ScanSearch,
  "shield-check": ShieldCheck,
  "shield-question": ShieldQuestion,
  "shopping-bag": ShoppingBag,
  smartphone: Smartphone,
  sparkles: Sparkles,
  "table-2": Table2,
  "users-round": UsersRound,
  "wallet-cards": WalletCards,
  workflow: Workflow,
};

type CaseStudySection = {
  id: string;
  label: string;
};

type ProjectCaseStudyProps = {
  project: Project;
  caseStudy: ProjectCaseStudy;
  projectNumber: string;
  relatedProjects: Project[];
  previousProject: Project;
  nextProject: Project;
};

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const Component = iconMap[name] ?? Cpu;
  return <Component aria-hidden="true" size={size} strokeWidth={1.7} />;
}

function statusLabel(status: Project["status"]) {
  return status === "Completed" ? "Completed development" : status;
}

function ProjectSectionNav({ sections, activeSection }: { sections: CaseStudySection[]; activeSection: string }) {
  return (
    <>
      <aside className="case-study-nav-column">
        <div className="case-study-toc-wrap">
          <p className="case-study-toc-label">On this page</p>
          <nav className="case-study-toc" aria-label="Case study sections">
            {sections.map((section) => (
              <a className={activeSection === section.id ? "active" : ""} href={`#${section.id}`} key={section.id}>
                <span>{section.label}</span>
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            ))}
          </nav>
        </div>
      </aside>
      <details className="case-study-mobile-nav">
        <summary>Jump to a section <ArrowRight aria-hidden="true" size={15} /></summary>
        <nav aria-label="Mobile case study sections">
          {sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.label}</a>)}
        </nav>
      </details>
    </>
  );
}

function Paragraphs({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return <div className="case-study-paragraphs">{items.map((item) => <p key={item}>{item}</p>)}</div>;
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="case-study-section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="case-study-section-description">{description}</p> : null}
    </div>
  );
}

function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="architecture-diagram" aria-label="Project system architecture">
      {nodes.map((node, index) => (
        <div className="architecture-step" key={node.name}>
          <div className="architecture-node">
            <span className="case-study-icon"><Icon name={node.icon} size={19} /></span>
            <div>
              <strong>{node.name}</strong>
              <p>{node.description}</p>
            </div>
          </div>
          {index < nodes.length - 1 ? <ArrowRight className="architecture-arrow" aria-hidden="true" size={17} /> : null}
        </div>
      ))}
    </div>
  );
}

export function ProjectCaseStudy({ project, caseStudy, projectNumber, relatedProjects, previousProject, nextProject }: ProjectCaseStudyProps) {
  const sections = useMemo<CaseStudySection[]>(() => [
    { id: "overview", label: "Overview" },
    ...(caseStudy.problems?.length ? [{ id: "problem", label: "Problem" }] : []),
    ...(caseStudy.solution?.length ? [{ id: "solution", label: "Solution" }] : []),
    ...(caseStudy.features?.length ? [{ id: "features", label: "Features" }] : []),
    ...(caseStudy.technologies?.length ? [{ id: "technology", label: "Technology" }] : []),
    ...(caseStudy.architecture ? [{ id: "architecture", label: "Architecture" }] : []),
    ...(caseStudy.contributions?.length ? [{ id: "contributions", label: "Contributions" }] : []),
    ...(caseStudy.engineeringInsights?.length ? [{ id: "engineering", label: "Engineering" }] : []),
    ...(caseStudy.outcomes?.length ? [{ id: "outcome", label: "Outcome" }] : []),
  ], [caseStudy]);
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "overview");

  useEffect(() => {
    const elements = sections.map((section) => document.getElementById(section.id)).filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]?.target.id) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-18% 0px -64% 0px", threshold: [0, 0.18, 0.5, 0.8] });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const metadata = [
    { label: "Category", value: project.category },
    { label: "Status", value: statusLabel(project.status) },
    ...(caseStudy.year ? [{ label: "Year", value: caseStudy.year }] : []),
    ...(caseStudy.organisation ? [{ label: "Organisation", value: caseStudy.organisation }] : []),
    ...(caseStudy.role ? [{ label: "My role", value: caseStudy.role }] : []),
    ...(caseStudy.projectType ? [{ label: "Project type", value: caseStudy.projectType }] : []),
  ];

  return (
    <main className="case-study-page">
      <section className="case-study-header case-study-hero">
        <div className="container">
          <Link className="text-link case-study-back-link" href="/projects"><ArrowLeft aria-hidden="true" size={15} /> Back to projects</Link>
          <div className="case-study-hero-kicker"><span>Project / {projectNumber}</span><span>{project.category}</span><span className="status-complete">{statusLabel(project.status)}</span></div>
          <h1>{project.name}</h1>
          <p className="case-study-hero-summary">{caseStudy.heroSummary}</p>
          <div className="case-study-meta-grid">
            {metadata.map((item) => <div className="case-study-meta-card" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
          </div>
          {caseStudy.technologies?.length ? <div className="case-study-hero-stack"><span>Technology stack</span><div>{caseStudy.technologies.map((technology) => <span className="project-tag" key={technology.name}>{technology.name}</span>)}</div></div> : null}
          <div className={`case-study-banner ${project.coverImage ? "case-study-banner-image" : "case-study-visual-placeholder"}`} role="img" aria-label={`${project.name} project visual`}>
            {project.coverImage ? <Image className="case-study-banner-image-content" src={project.coverImage} alt={`${project.name} project banner`} fill sizes="(max-width: 720px) 100vw, 1000px" priority /> : <>
              <div className="placeholder-grid" aria-hidden="true" />
              <div className="placeholder-orbit placeholder-orbit-one" aria-hidden="true" />
              <div className="placeholder-orbit placeholder-orbit-two" aria-hidden="true" />
              <div className="case-study-placeholder-copy"><span>PROJECT VISUAL / {projectNumber}</span><strong>{project.name}</strong><small>Verified screenshots will be added when available.</small></div>
            </>}
          </div>
        </div>
      </section>

      <section className="section case-study-detail-shell">
        <div className="container case-study-layout">
          <div className="case-study-main">
            <Reveal>
              <section className="case-study-detail-section" id="overview">
                <SectionIntro eyebrow="01 / Project overview" title="What was built and why it matters." />
                <Paragraphs items={caseStudy.overview} />
                {caseStudy.background?.length ? <div className="case-study-subsection"><p className="case-study-sub-label">Background</p><Paragraphs items={caseStudy.background} /></div> : null}
              </section>
            </Reveal>

            {caseStudy.problems?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="problem"><SectionIntro eyebrow="02 / Problem" title="The product need behind the work." description="The documented problem space is kept close to the available project context." /><div className="case-study-card-grid">{caseStudy.problems.map((problem) => <article className="case-study-info-card" key={problem.title}><span className="case-study-icon"><Icon name={problem.icon} /></span><h3>{problem.title}</h3><p>{problem.description}</p></article>)}</div></section></Reveal> : null}

            {caseStudy.objectives?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="objectives"><SectionIntro eyebrow="03 / Objectives" title="What the project set out to achieve." /><ol className="case-study-objectives">{caseStudy.objectives.map((objective, index) => <li key={objective}><span>{String(index + 1).padStart(2, "0")}</span><p>{objective}</p></li>)}</ol></section></Reveal> : null}

            {caseStudy.solution?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="solution"><SectionIntro eyebrow="04 / Solution" title="A product direction shaped around the real workflow." /><Paragraphs items={caseStudy.solution} /></section></Reveal> : null}

            {caseStudy.features?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="features"><SectionIntro eyebrow="05 / Features and modules" title="The parts that make up the experience." /><div className="case-study-feature-grid">{caseStudy.features.map((feature) => <article className="case-study-feature-card" key={feature.name}><div className="case-study-feature-top"><span className="case-study-icon"><Icon name={feature.icon} /></span>{feature.scopeStatus ? <span className={`scope-badge scope-${feature.scopeStatus === "Documented scope" ? "documented" : feature.scopeStatus === "Planned" ? "planned" : "verify"}`}>{feature.scopeStatus}</span> : null}</div><h3>{feature.name}</h3><p>{feature.description}</p>{feature.technicalNote ? <small>{feature.technicalNote}</small> : null}</article>)}</div><p className="case-study-note">Scope labels describe the available project documentation; they are not claims that every feature is publicly deployed or production-ready.</p></section></Reveal> : null}

            {caseStudy.technologies?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="technology"><SectionIntro eyebrow="06 / Technology stack" title="Tools chosen for the documented product direction." /><div className="case-study-technology-groups">{Array.from(new Set(caseStudy.technologies.map((technology) => technology.category))).map((category) => <div className="case-study-technology-group" key={category}><h3>{category}</h3><div>{caseStudy.technologies?.filter((technology) => technology.category === category).map((technology) => <article className="case-study-technology-card" key={technology.name}><div className="case-study-technology-name"><span className="technology-monogram" aria-hidden="true">{technology.name.slice(0, 2).toUpperCase()}</span><strong>{technology.name}</strong></div><p>{technology.description}</p></article>)}</div></div>)}</div></section></Reveal> : null}

            {caseStudy.architecture ? <Reveal delay={0.04}><section className="case-study-detail-section" id="architecture"><SectionIntro eyebrow="07 / System architecture" title="How the documented system pieces relate." description={caseStudy.architecture.summary} /><ArchitectureDiagram nodes={caseStudy.architecture.nodes} />{caseStudy.architecture.note ? <p className="case-study-note">{caseStudy.architecture.note}</p> : null}</section></Reveal> : null}

            {caseStudy.contributions?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="contributions"><SectionIntro eyebrow="08 / My role and contributions" title="The work I personally contributed." /><ul className="case-study-check-list">{caseStudy.contributions.map((contribution) => <li key={contribution}><span>↗</span><p>{contribution}</p></li>)}</ul></section></Reveal> : null}

            {caseStudy.developmentApproach?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="approach"><SectionIntro eyebrow="09 / Development approach" title="From product context to working direction." /><div className="case-study-process-list">{caseStudy.developmentApproach.map((item) => <article className="case-study-process-item" key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section></Reveal> : null}

            {caseStudy.engineeringInsights?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="engineering"><SectionIntro eyebrow="10 / Engineering insights" title="Considerations behind the implementation." description="Where implementation incidents are not publicly documented, this section records grounded engineering considerations instead of inventing debugging stories." /><div className="case-study-insight-list">{caseStudy.engineeringInsights.map((insight) => <article className="case-study-insight" key={insight.title}><div className="case-study-insight-heading"><span>{insight.kind ?? "Engineering insight"}</span><h3>{insight.title}</h3></div><div className="case-study-insight-grid"><div><strong>Challenge</strong><p>{insight.challenge}</p></div><div><strong>Approach</strong><p>{insight.approach}</p></div><div><strong>Solution</strong><p>{insight.solution}</p></div><div><strong>Learning</strong><p>{insight.learning}</p></div></div></article>)}</div></section></Reveal> : null}

            {caseStudy.outcomes?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="outcome"><SectionIntro eyebrow="11 / Project outcomes" title="What the development work resulted in." /><ul className="case-study-outcome-list">{caseStudy.outcomes.map((outcome) => <li key={outcome}><span>01</span><p>{outcome}</p></li>)}</ul></section></Reveal> : null}

            {caseStudy.gallery?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="gallery"><SectionIntro eyebrow="12 / Project gallery" title="A place for verified product visuals." /><div className="case-study-gallery-grid">{caseStudy.gallery.map((item) => <article className="case-study-gallery-item" key={item.title}>{item.image ? <Image src={item.image} alt={item.alt ?? item.title} fill sizes="(max-width: 720px) 100vw, 50vw" /> : <div className="gallery-placeholder"><span>ASSET PLACEHOLDER</span><strong>{item.title}</strong></div>}<div className="case-study-gallery-caption"><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section></Reveal> : null}

            {caseStudy.links?.length ? <Reveal delay={0.04}><section className="case-study-detail-section" id="links"><SectionIntro eyebrow="13 / Project links" title="Continue to the live work." /><div className="case-study-links">{caseStudy.links.map((link) => <a className="button button-secondary" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<ArrowUpRight aria-hidden="true" size={15} /></a>)}</div></section></Reveal> : null}
          </div>
          <ProjectSectionNav sections={sections} activeSection={activeSection} />
        </div>
      </section>

      {relatedProjects.length ? <section className="section case-study-related-section"><div className="container"><SectionIntro eyebrow="14 / Related projects" title="More work in the same orbit." /><div className="case-study-related-grid">{relatedProjects.map((related, index) => <Link className="case-study-related-card" href={`/projects/${related.slug}`} key={related.slug}><div className="project-meta"><span>{related.category}</span><span className={related.status === "Completed" ? "status-complete" : "status-progress"}>{statusLabel(related.status)}</span></div><span className="related-card-index">0{index + 1}</span><h3>{related.name}</h3><p>{related.description}</p><span className="text-link">Open case study <ArrowUpRight aria-hidden="true" size={15} /></span></Link>)}</div></div></section> : null}

      <section className="case-study-next-section"><div className="container"><div className="case-study-next-grid"><Link className="case-study-next-card" href={`/projects/${previousProject.slug}`}><span><ArrowLeft aria-hidden="true" size={15} /> Previous project</span><strong>{previousProject.name}</strong><small>{previousProject.category}</small></Link><Link className="case-study-next-card next" href={`/projects/${nextProject.slug}`}><span>Next project <ArrowRight aria-hidden="true" size={15} /></span><strong>{nextProject.name}</strong><small>{nextProject.category}</small></Link></div></div></section>
    </main>
  );
}
