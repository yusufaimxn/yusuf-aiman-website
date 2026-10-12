"use client";

import { SkillIcon } from "@/components/skills/SkillExplorer";
import { publicSkills, type Skill } from "@/data/portfolio";

const technologyIds = [
  "nextjs",
  "react",
  "typescript",
  "flutter",
  "supabase",
  "vercel",
  "tailwind-css",
  "laravel",
  "github",
  "figma",
] as const;

const technologies = technologyIds
  .map((id) => publicSkills.find((skill) => skill.id === id))
  .filter((skill): skill is Skill => Boolean(skill));

function TechnologyGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="technology-marquee-group" aria-hidden={hidden}>
      {technologies.map((skill) => (
        <span className="technology-marquee-item" key={`${hidden ? "duplicate-" : ""}${skill.id}`}>
          <SkillIcon skill={skill} />
          <span>{skill.name}</span>
        </span>
      ))}
    </div>
  );
}

export function TechnologyMarquee() {
  return (
    <section className="technology-marquee-section section-border" aria-labelledby="technology-marquee-title">
      <div className="container">
        <div className="technology-marquee-heading">
          <div>
            <p className="eyebrow">Tools / 01</p>
            <h2 id="technology-marquee-title">TECHNOLOGIES I BUILD WITH</h2>
          </div>
          <p>A selection of the tools and technologies behind my work.</p>
        </div>

        <div className="technology-marquee" role="region" aria-label="Technologies Yusuf Aiman builds with">
          <div className="technology-marquee-viewport" tabIndex={0}>
            <div className="technology-marquee-track">
              <TechnologyGroup />
              <TechnologyGroup hidden />
            </div>
          </div>
        </div>
        <p className="technology-marquee-note">Portfolio technologies, based on published project and skills information.</p>
      </div>
    </section>
  );
}
