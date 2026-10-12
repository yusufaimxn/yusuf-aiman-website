"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/ProjectCard";

const categories = ["All", "Web applications", "Mobile applications", "Business systems", "SaaS platforms", "Websites", "Academic projects"] as const;
type Filter = "All" | ProjectCategory;

export function ProjectExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"All" | "Completed" | "In development">("All");

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = filter === "All" || project.category === filter;
      const matchesStatus = status === "All" || project.status === status;
      const matchesQuery = !normalized || `${project.name} ${project.category} ${project.description} ${project.technologies.join(" ")}`.toLowerCase().includes(normalized);
      return matchesFilter && matchesStatus && matchesQuery;
    });
  }, [filter, query, status]);

  return (
    <div className="explorer">
      <div className="explorer-toolbar">
        <label className="search-field">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects..." aria-label="Search projects" />
        </label>
        <label className="select-field"><SlidersHorizontal size={15} /><span className="sr-only">Filter project status</span><select value={status} onChange={(event) => setStatus(event.target.value as typeof status)}><option value="All">All statuses</option><option value="Completed">Completed</option><option value="In development">In development</option></select></label>
      </div>
      <div className="filter-row" aria-label="Project categories">
        {categories.map((category) => <button className={filter === category ? "filter-button active" : "filter-button"} onClick={() => setFilter(category)} key={category}>{category}</button>)}
      </div>
      <div className="explorer-count"><span>{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</span><span>Single source of truth · structured content</span></div>
      {filteredProjects.length > 0 ? <motion.div layout className="project-grid"><AnimatePresence mode="popLayout">{filteredProjects.map((project, index) => <motion.div layout key={project.slug} initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .98 }} transition={{ duration: .32, delay: index * .025, ease: [0.22, 1, 0.36, 1] }}><ProjectCard project={project} index={index} /></motion.div>)}</AnimatePresence></motion.div> : <motion.div className="empty-state" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><span className="empty-state-mark">∅</span><h3>No projects match that search.</h3><p>Try a different keyword or reset the filters.</p><button className="button button-secondary" onClick={() => { setQuery(""); setFilter("All"); setStatus("All"); }}>Reset filters</button></motion.div>}
    </div>
  );
}
