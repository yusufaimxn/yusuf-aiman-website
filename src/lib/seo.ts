import type { Metadata } from "next";
import type { Project } from "@/data/portfolio";

export const siteUrl = "https://yusufaiman.me";
export const siteName = "Yusuf Aiman";
export const defaultShareImage = `${siteUrl}/opengraph-image`;
export const socialProfiles = [
  "https://www.linkedin.com/in/yusuf-aiman-2810562b9",
  "https://www.instagram.com/yusufaimxn/",
];

const baseKeywords = [
  "Yusuf Aiman",
  "full-stack developer",
  "software engineer",
  "technology entrepreneur",
  "web development",
  "mobile application development",
  "software projects",
  "business systems",
  "Cyberjaya",
  "Malaysia",
];

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title: { absolute: title },
    description,
    keywords: baseKeywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [{ url: defaultShareImage, width: 1200, height: 630, alt: `${siteName} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultShareImage],
    },
  };
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yusuf Aiman",
  alternateName: "Muhammad Yusuf Aiman bin Mohamad Salleh",
  url: siteUrl,
  jobTitle: "Full-Stack Developer / Software Engineer",
  email: "mailto:myusufaiman05@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cyberjaya",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
  worksFor: { "@type": "Organization", name: "Omni Systems Technology" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Multimedia University" },
    { "@type": "CollegeOrUniversity", name: "Management & Science University" },
  ],
  knowsAbout: ["Next.js", "React", "TypeScript", "Flutter", "Supabase", "Laravel", "Web Development", "Software Engineering"],
  sameAs: socialProfiles,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: "Portfolio of Yusuf Aiman, a full-stack developer, software engineer, and technology entrepreneur based in Cyberjaya, Malaysia.",
  publisher: { "@id": `${siteUrl}/#person` },
};

export function createBreadcrumbSchema(items: Array<{ name: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: new URL(item.path, siteUrl).toString() } : {}),
    })),
  };
}

export function createProjectSchema(project: Project, description = project.description) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description,
    url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    creator: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    genre: project.category,
    keywords: project.technologies,
    creativeWorkStatus: project.status,
  };
}
