import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index = 0, className = "" }: { project: Project; index?: number; className?: string }) {
  return (
    <article className={`project-card project-card-${(index % 3) + 1} ${className}`.trim()}>
      <div className={`project-visual ${project.coverImage ? "project-visual-image" : ""}`} aria-hidden="true">
        {project.coverImage ? <Image className="project-cover-image" src={project.coverImage} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" /> : <>
          <span className="visual-orbit orbit-one" />
          <span className="visual-orbit orbit-two" />
          <span className="visual-line line-one" />
          <span className="visual-line line-two" />
          <span className="visual-cursor">_</span>
        </>}
        <span className="visual-index">0{index + 1}</span>
      </div>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.category}</span><span className={project.status === "Completed" ? "status-complete" : "status-progress"}>{project.status}</span></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tags">{project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div>
        <Link className="text-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  );
}
