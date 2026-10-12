import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { projects } from "@/data/portfolio";
import { getProjectCaseStudy } from "@/data/project-case-studies";
import { StructuredData } from "@/components/seo/StructuredData";
import { createBreadcrumbSchema, createPageMetadata, createProjectSchema } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function getRelatedProjects(slug: string) {
  const project = findProject(slug);
  if (!project) return [];

  return projects
    .filter((candidate) => candidate.slug !== project.slug)
    .map((candidate) => {
      const sharedTechnologyCount = candidate.technologies.filter((technology) => project.technologies.includes(technology)).length;
      const score = (candidate.category === project.category ? 5 : 0) + sharedTechnologyCount * 2 + (candidate.status === project.status ? 1 : 0);
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score || a.candidate.name.localeCompare(b.candidate.name))
    .slice(0, 3)
    .map(({ candidate }) => candidate);
}

function getAdjacentProject(slug: string, direction: -1 | 1) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return projects[0];
  return projects[(index + direction + projects.length) % projects.length];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return createPageMetadata({ title: "Project not found | Yusuf Aiman", description: "The requested Yusuf Aiman project page could not be found.", path: `/projects/${slug}`, noIndex: true });

  const caseStudy = getProjectCaseStudy(project);
  return createPageMetadata({
    title: `${project.name} | Project Case Study | Yusuf Aiman`,
    description: caseStudy.heroSummary,
    path: `/projects/${project.slug}`,
    type: "article",
    noIndex: project.slug === "omni-systems-internal",
  });
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const caseStudy = getProjectCaseStudy(project);
  const previousProject = getAdjacentProject(project.slug, -1);
  const nextProject = getAdjacentProject(project.slug, 1);

  return (
    <>
      <StructuredData data={[createProjectSchema(project, caseStudy.heroSummary), createBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: project.name, path: `/projects/${project.slug}` }])]} />
      <ProjectCaseStudy
        project={project}
        caseStudy={caseStudy}
        projectNumber={String(projectIndex + 1).padStart(2, "0")}
        relatedProjects={getRelatedProjects(project.slug)}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </>
  );
}
