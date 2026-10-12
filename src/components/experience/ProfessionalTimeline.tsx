"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { professionalExperience, resolveProjects } from "@/data/experience";

export function ProfessionalTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeExperience = professionalExperience[activeIndex];
  const relatedProjects = resolveProjects(activeExperience.relatedProjectIds);

  return (
    <div className="professional-experience-explorer">
      <div className="professional-experience-list" role="tablist" aria-label="Professional experience">
        {professionalExperience.map((experience, index) => (
          <button className={index === activeIndex ? "professional-experience-tab active" : "professional-experience-tab"} key={experience.id} type="button" role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)}>
            <span className="professional-experience-tab-index">0{index + 1}</span>
            <span><strong>{experience.role}</strong><small>{experience.organisation}</small><small>{experience.period}</small></span>
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.article className="professional-experience-panel" key={activeExperience.id} initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }} transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <div className="professional-experience-panel-top"><span>{activeExperience.period}</span><span>Role {String(activeIndex + 1).padStart(2, "0")}</span></div>
          <h3>{activeExperience.role}</h3>
          <p className="professional-experience-organisation">{activeExperience.organisation}</p>
          <p className="professional-experience-description">{activeExperience.description}</p>
          <div className="professional-experience-columns">
            <div><p className="experience-mini-label">Responsibilities</p><ul className="experience-check-list">{activeExperience.responsibilities.map((responsibility) => <li key={responsibility}><Check size={14} />{responsibility}</li>)}</ul></div>
            <div><p className="experience-mini-label">Technologies & skills</p><div className="experience-tag-list">{activeExperience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          </div>
          {relatedProjects.length > 0 && <div className="experience-related"><p className="experience-mini-label">Related project work</p><div>{relatedProjects.map((project) => <Link href={`/projects/${project.slug}`} key={project.slug}>{project.name}<ArrowUpRight size={13} /></Link>)}</div></div>}
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
