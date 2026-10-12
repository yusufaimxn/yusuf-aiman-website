import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { publicSkills, projectById, technicalCapabilities, multidisciplinaryCapabilities, type Skill } from "@/data/portfolio";
import { SkillExplorer, SkillIcon } from "@/components/skills/SkillExplorer";
import { validateSkillIconRegistry } from "@/lib/skill-icons";

const coreSkillIds = ["nextjs", "react", "typescript", "javascript", "flutter", "laravel", "php", "supabase", "tailwind-css", "html5", "css3", "database-management"];
const actionSkillIds = ["typescript", "flutter", "database-management", "vercel", "digital-marketing"];

function findSkill(id: string) {
  return publicSkills.find((skill) => skill.id === id);
}

function ProjectLinks({ projectIds }: { projectIds: readonly string[] }) {
  return projectIds.length > 0 ? <div className="capability-projects">{projectIds.slice(0, 2).map((projectId) => { const project = projectById.get(projectId); return project ? <Link href={`/projects/${project.slug}`} key={project.slug}>{project.name}<ArrowUpRight size={13} /></Link> : null; })}</div> : null;
}

function SkillChips({ skillIds }: { skillIds: readonly string[] }) {
  return <div className="capability-skill-list">{skillIds.map((skillId) => { const skill = findSkill(skillId); return skill ? <span key={skill.id}><SkillIcon skill={skill} />{skill.name}</span> : null; })}</div>;
}

export function SkillsShowcase() {
  const coreSkills = coreSkillIds.map(findSkill).filter((skill): skill is Skill => Boolean(skill));
  const actionSkills = actionSkillIds.map(findSkill).filter((skill): skill is Skill => Boolean(skill));
  const missingIconIds = validateSkillIconRegistry(publicSkills.map((skill) => skill.icon));
  if (process.env.NODE_ENV === "development" && missingIconIds.length > 0) console.warn("Missing published skill icons:", missingIconIds);

  return <>
    <section className="skills-section skills-core-section"><div className="skills-section-heading"><div><p className="eyebrow">01 / Core technologies</p><h2>The stack I reach for first.</h2></div><p>Published technologies are kept focused: tools with a clear place in the current portfolio story.</p></div><div className="core-tech-grid">{coreSkills.map((skill) => <article className="core-tech-card" key={skill.id}><SkillIcon skill={skill} large /><div><h3>{skill.name}</h3><p>{skill.description}</p></div><span className="core-tech-status">{skill.verificationStatus === "project_based" ? "In project" : "In toolkit"}</span></article>)}</div></section>

    <section className="skills-section"><div className="skills-section-heading"><div><p className="eyebrow">02 / Technical capabilities</p><h2>What the tools let me build.</h2></div><p>Capabilities are grouped around the kind of work a recruiter, collaborator, or client actually needs to understand.</p></div><div className="capability-grid">{technicalCapabilities.map((capability) => { const iconSkill = findSkill(capability.icon); return <article className="capability-card" key={capability.id}><div className="capability-card-top">{iconSkill ? <SkillIcon skill={iconSkill} large /> : null}<span className="capability-index">{String(technicalCapabilities.indexOf(capability) + 1).padStart(2, "0")}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><SkillChips skillIds={capability.skillIds} /><ProjectLinks projectIds={capability.relatedProjectIds} /></article>; })}</div></section>

    <section className="skills-section skills-explorer-section"><SkillExplorer /></section>

    <section className="skills-section"><div className="skills-section-heading"><div><p className="eyebrow">05 / Beyond engineering</p><h2>The work around the work.</h2></div><p>These disciplines complement the technical identity: they keep product decisions connected to people, communication, and business reality.</p></div><div className="multidisciplinary-grid">{multidisciplinaryCapabilities.map((capability, index) => <article className="multidisciplinary-card" key={capability.title}><span className="capability-index">0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p><SkillChips skillIds={capability.skillIds} /></article>)}</div></section>

    <section className="skills-section skills-action-section"><div className="skills-section-heading"><div><p className="eyebrow">06 / Skills in action</p><h2>Credibility lives in the work.</h2></div><p>These are the published relationships between a capability and a real project entry. Empty relationships stay empty until there is evidence to connect.</p></div><div className="skills-action-list">{actionSkills.map((skill) => <article className="skills-action-row" key={skill.id}><div className="skills-action-skill"><SkillIcon skill={skill} /><div><strong>{skill.name}</strong><span>{skill.primaryCategory}</span></div></div><div className="skills-action-projects">{skill.relatedProjectIds.map((projectId) => { const project = projectById.get(projectId); return project ? <Link href={`/projects/${project.slug}`} key={project.slug}>{project.name}<ArrowUpRight size={14} /></Link> : null; })}</div><span className="action-status"><Layers3 size={14} /> {skill.verificationStatus === "project_based" ? "Project based" : "Portfolio verified"}</span></article>)}</div></section>

    <section className="skills-cta"><div><p className="eyebrow">07 / Go deeper</p><h2>See how I put these skills into practice.</h2></div><Link className="button button-primary" href="/projects">Explore projects <ArrowUpRight size={16} /></Link></section>
  </>;
}
