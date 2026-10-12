import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { projects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Software Development Projects | Yusuf Aiman",
  description: "Explore software projects by Yusuf Aiman, including full-stack web applications, mobile apps, business systems, and digital platforms.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <main><section className="page-hero"><div className="container"><p className="eyebrow">Projects / 03</p><h1>Selected work, in context.</h1><p className="page-hero-copy">Explore the products, systems, experiments, and academic projects that make up my current body of work.</p><div className="page-hero-meta"><span className="meta-pill">{projects.length} documented entries</span><span className="meta-pill">Filtering enabled</span><span className="meta-pill">Case studies in progress</span></div></div></section><section className="section"><div className="container"><ProjectExplorer /></div></section></main>;
}
