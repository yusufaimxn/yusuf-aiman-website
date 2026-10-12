"use client";

import Link from "next/link";
import { ArrowUpRight, FileText, Mail, Search, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, projects, skills } from "@/data/portfolio";

type CommandPaletteProps = { onClose: () => void };

export function CommandPalette({ onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return navItems.map((item) => ({ label: item.label, href: item.href, type: "Navigate" }));
    }

    const navigation = navItems
      .filter((item) => item.label.toLowerCase().includes(normalized))
      .map((item) => ({ label: item.label, href: item.href, type: "Navigate" }));
    const projectResults = projects
      .filter((project) => `${project.name} ${project.category}`.toLowerCase().includes(normalized))
      .slice(0, 5)
      .map((project) => ({ label: project.name, href: `/projects/${project.slug}`, type: "Project" }));
    const skillResults = skills
      .filter((skill) => `${skill.name} ${skill.primaryCategory}`.toLowerCase().includes(normalized))
      .slice(0, 5)
      .map((skill) => ({ label: skill.name, href: "/skills", type: "Skill" }));
    return [...navigation, ...projectResults, ...skillResults];
  }, [query]);

  return (
    <div className="palette-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}>
        <div className="palette-search">
          <Search size={18} />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the portfolio..." aria-label="Search the portfolio" />
          <kbd>ESC</kbd>
        </div>
        <div className="palette-results">
          {results.length > 0 ? results.map((result) => (
            <Link href={result.href} className="palette-result" key={`${result.type}-${result.href}`} onClick={onClose}>
              <span className="palette-result-icon">
                {result.type === "Project" ? <Sparkles size={15} /> : result.type === "Skill" ? <FileText size={15} /> : <ArrowUpRight size={15} />}
              </span>
              <span>{result.label}</span>
              <small>{result.type}</small>
            </Link>
          )) : (
            <div className="palette-empty"><Mail size={16} /> No matching portfolio content yet.</div>
          )}
        </div>
        <div className="palette-footer"><span>Navigate to a page, project, or skill</span><span>⌘K / Ctrl K</span></div>
      </section>
    </div>
  );
}
