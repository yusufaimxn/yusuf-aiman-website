import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experience", "/projects", "/skills", "/achievements", "/resume", "/contact"];
  const publicProjects = projects.filter((project) => project.slug !== "omni-systems-internal");
  return [...routes.map((route) => ({ url: `https://yusufaiman.me${route}` })), ...publicProjects.map((project) => ({ url: `https://yusufaiman.me/projects/${project.slug}` }))];
}
