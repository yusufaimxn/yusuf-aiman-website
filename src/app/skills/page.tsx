import { SkillsShowcase } from "@/components/skills/SkillsShowcase";
import { publicSkills, skills } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Technical Skills & Technologies | Yusuf Aiman",
  description: "Discover Yusuf Aiman's technical skills in Next.js, React, TypeScript, Flutter, Supabase, Laravel, and modern software development.",
  path: "/skills",
});

export default function SkillsPage() {
  const heldForVerification = skills.length - publicSkills.length;
  return <main><section className="page-hero skills-page-hero"><div className="container"><div className="skills-hero-grid"><div><p className="eyebrow">Technical expertise / 04</p><h1>Technologies, tools & capabilities.</h1><p className="page-hero-copy">A collection of technologies, development practices, and professional capabilities I&apos;ve gained through building software, developing products, and working across different industries.</p></div><div className="skills-hero-interface"><span className="interface-label">capability.index / 2026</span><div className="interface-lines"><span /><span /><span /><span /></div><div className="interface-readout"><strong>{publicSkills.length}</strong><span>published capabilities</span><small>{heldForVerification} held for verification</small></div></div></div><div className="skills-hero-metrics"><span><strong>12</strong> categories</span><span><strong>08</strong> capability groups</span><span><strong>01</strong> source of truth</span></div></div></section><div className="container"><SkillsShowcase /></div></main>;
}
