import Link from "next/link";
import { ArrowUpRight, Boxes, BriefcaseBusiness, Code2, Database, Smartphone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { engineeringDomains, resolveProjects } from "@/data/experience";

const icons = [BriefcaseBusiness, Smartphone, Boxes, Smartphone, Code2, Sparkles];

export function EngineeringDomains() {
  return <div className="engineering-domain-grid">{engineeringDomains.map((domain, index) => { const Icon = icons[index] ?? Database; const projects = resolveProjects(domain.projectIds); return <Reveal className="engineering-domain-wrap" key={domain.title} delay={index * 0.04}><details className="engineering-domain-card"><summary><span className="engineering-domain-top"><span>{domain.index}</span><Icon size={19} strokeWidth={1.5} /></span><strong>{domain.title}</strong><span className="engineering-domain-summary">{domain.description}</span><span className="engineering-domain-toggle">+</span></summary><div className="engineering-domain-detail"><p>{domain.description}</p><div className="experience-tag-list">{domain.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><p className="experience-mini-label">Relevant capabilities</p><div className="experience-tag-list">{domain.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div><p className="experience-mini-label">Related projects</p><div className="engineering-project-links">{projects.map((project) => <Link href={`/projects/${project.slug}`} key={project.slug}>{project.name}<ArrowUpRight size={13} /></Link>)}</div></div></details></Reveal>; })}</div>;
}
