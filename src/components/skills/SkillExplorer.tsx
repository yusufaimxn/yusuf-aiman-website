"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Search, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { projectById, publicSkills, skillCategories, type Skill } from "@/data/portfolio";
import { getSkillIconDefinition } from "@/lib/skill-icons";

function SkillIcon({ skill, large = false }: { skill: Skill; large?: boolean }) {
  const definition = getSkillIconDefinition(skill.icon);
  const style = { "--skill-icon-color": definition.color } as React.CSSProperties;
  if (definition.type === "brand") {
    return <span className={large ? "skill-icon skill-icon-large" : "skill-icon"} style={style} aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d={definition.icon.path} fill="currentColor" /></svg></span>;
  }
  const Icon = definition.icon;
  return <span className={large ? "skill-icon skill-icon-large" : "skill-icon"} style={style} aria-hidden="true"><Icon size={large ? 30 : 18} strokeWidth={1.8} /></span>;
}

function statusLabel(status: Skill["verificationStatus"]) {
  return status === "project_based" ? "Project based" : "Portfolio verified";
}

export function SkillExplorer() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedSkillId, setSelectedSkillId] = useState("nextjs");
  const reducedMotion = useReducedMotion();

  const visibleSkills = useMemo(() => publicSkills.filter((item) => {
    const normalized = query.trim().toLowerCase();
    const matchesCategory = category === "all" || item.primaryCategory === category || item.secondaryCategories.includes(category as Skill["primaryCategory"]);
    const matchesQuery = !normalized || `${item.name} ${item.primaryCategory} ${item.description} ${item.keywords.join(" ")}`.toLowerCase().includes(normalized);
    return matchesCategory && matchesQuery;
  }), [category, query]);

  const groupedSkills = useMemo(() => skillCategories.slice(1).map((item) => ({
    ...item,
    skills: visibleSkills.filter((skill) => skill.primaryCategory === item.id),
  })).filter((group) => group.skills.length > 0), [visibleSkills]);

  const selectedSkill = visibleSkills.find((item) => item.id === selectedSkillId) ?? visibleSkills[0] ?? publicSkills[0];

  return (
    <div className="skills-explorer">
      <div className="skills-explorer-heading"><div><p className="eyebrow">04 / Complete directory</p><h2>Search the working toolkit.</h2></div><div className="skills-explorer-count"><strong>{publicSkills.length}</strong><span>published capabilities</span></div></div>
      <div className="explorer-toolbar"><label className="search-field"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search technologies, practices, or keywords..." aria-label="Search skills" /></label></div>
      <div className="filter-row skill-filter-row" aria-label="Skill categories">{skillCategories.map((item) => <button className={category === item.id ? "filter-button active" : "filter-button"} onClick={() => setCategory(item.id)} key={item.id}>{item.label}</button>)}</div>
      <div className="skill-explorer-layout">
        <div className="skill-directory">
          <div className="directory-note"><ShieldCheck size={16} /> Public skills are based on portfolio information or a published project relationship.</div>
          {groupedSkills.length > 0 ? groupedSkills.map((group, groupIndex) => <motion.details className="skill-category-group" open={Boolean(query) || category !== "all"} key={group.id} initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: reducedMotion ? 0 : groupIndex * .045 }}><summary><span>{group.label}</span><span className="category-count">{group.skills.length}<ChevronDown size={16} /></span></summary><motion.div className="skill-list" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25, delay: reducedMotion ? 0 : .08 }}>{group.skills.map((skill) => <button className={selectedSkill?.id === skill.id ? "skill-list-item selected" : "skill-list-item"} onClick={() => setSelectedSkillId(skill.id)} key={skill.id}><SkillIcon skill={skill} /><span className="skill-list-copy"><strong>{skill.name}</strong><small>{skill.verificationStatus === "project_based" ? "Project based" : "Portfolio verified"}</small></span><ArrowUpRight size={14} /></button>)}</motion.div></motion.details>) : <motion.div className="empty-state" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><span className="empty-state-mark">∅</span><h3>No published skills match.</h3><p>Try another keyword or category.</p><button className="button button-secondary" onClick={() => { setQuery(""); setCategory("all"); }}>Reset explorer</button></motion.div>}
        </div>
        <AnimatePresence mode="wait" initial={false}>{selectedSkill && <motion.aside className="skill-detail-panel" aria-live="polite" key={selectedSkill.id} initial={reducedMotion ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -12 }} transition={{ duration: reducedMotion ? 0 : .28 }}><div className="skill-detail-top"><SkillIcon skill={selectedSkill} large /><span className={`verification-badge verification-${selectedSkill.verificationStatus}`}>{statusLabel(selectedSkill.verificationStatus)}</span></div><p className="skill-detail-category">{selectedSkill.primaryCategory}</p><h3>{selectedSkill.name}</h3><p className="skill-detail-description">{selectedSkill.description}</p><div className="skill-keyword-list">{selectedSkill.keywords.slice(0, 5).map((keyword) => <span key={keyword}>{keyword}</span>)}</div>{selectedSkill.relatedProjectIds.length > 0 && <div className="skill-related-projects"><span>Connected project work</span>{selectedSkill.relatedProjectIds.map((projectId) => { const project = projectById.get(projectId); return project ? <Link href={`/projects/${project.slug}`} key={project.slug}>{project.name}<ArrowUpRight size={14} /></Link> : null; })}</div>}</motion.aside>}</AnimatePresence>
      </div>
    </div>
  );
}

export { SkillIcon };
