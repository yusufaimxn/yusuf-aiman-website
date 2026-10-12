export type AboutJourneyStage = {
  period: string;
  title: string;
  qualification: string;
  description: string;
  highlights?: string[];
  kind: "education" | "venture";
};

export const aboutJourney: AboutJourneyStage[] = [
  {
    period: "2018 — 2023",
    title: "Sekolah Bina Insan (SBI)",
    qualification: "Islamic Education & Science",
    description: "Studied science alongside Islamic subjects, building discipline, curiosity, and a strong foundation for learning.",
    highlights: ["30 Juz memorised", "Student recognition", "Public speaking competitions"],
    kind: "education",
  },
  {
    period: "2023 — 2024",
    title: "Management & Science University (MSU)",
    qualification: "Foundation in Medical Science",
    description: "Pursued medical science, received academic recognition, and participated in student leadership.",
    highlights: ["Scholarship recipient", "Dean's List recognition", "Student Representative Council"],
    kind: "education",
  },
  {
    period: "2024 — Present",
    title: "Multimedia University (MMU)",
    qualification: "Bachelor of Information Technology (Information Systems) with Honours",
    description: "Developing expertise in software engineering, information systems, databases, and business technology.",
    highlights: ["Dean's List recognition", "Entrepreneurship grant recipient", "Software development projects"],
    kind: "education",
  },
  {
    period: "2026 — Present",
    title: "Omni Systems Technology",
    qualification: "Founder & Software Developer",
    description: "A professional milestone connected to the journey: a technology business focused on websites, web applications, mobile applications, and digital systems.",
    highlights: ["Web and mobile products", "Business systems", "Digital solutions"],
    kind: "venture",
  },
];

export const aboutCapabilities = [
  { index: "01", title: "Full-Stack Web Development", description: "Building responsive, database-driven web applications using modern technologies.", href: "/skills", hrefLabel: "Explore skills", icon: "code" },
  { index: "02", title: "Mobile Application Development", description: "Developing mobile experiences using Flutter and integrated backend services.", href: "/projects/mymedik-mobile-application", hrefLabel: "View mobile work", icon: "mobile" },
  { index: "03", title: "Business Systems & Automation", description: "Designing connected workflows that simplify business operations.", href: "/projects/omni-systems-internal", hrefLabel: "See business systems", icon: "workflow" },
  { index: "04", title: "Product Development", description: "Transforming ideas into structured digital products through planning and implementation.", href: "/projects", hrefLabel: "Explore products", icon: "boxes" },
  { index: "05", title: "UI/UX & Interface Design", description: "Creating interfaces that balance visual quality, usability, and functionality.", href: "/skills", hrefLabel: "View design skills", icon: "palette" },
  { index: "06", title: "AI & Digital Innovation", description: "Exploring AI-assisted workflows and intelligent digital products.", href: "/projects/kentra", hrefLabel: "View Kentra", icon: "sparkles" },
] as const;

export const beyondTechnology = [
  { title: "Entrepreneurship", description: "Exploring businesses, understanding customers, and turning ideas into practical ventures.", icon: "briefcase" },
  { title: "Digital Marketing", description: "Working with advertising, content, campaigns, SEO, and digital growth strategies.", icon: "megaphone" },
  { title: "Leadership", description: "Coordinating teams, university programmes, and community initiatives.", icon: "users" },
  { title: "Creative Work", description: "Working across design, video production, branding, and digital storytelling.", icon: "clapperboard" },
] as const;

export const aboutLeadership = [
  { role: "Deputy Chairman", organisation: "PEPIAS", description: "Organisational leadership, community engagement, programme planning, and team coordination." },
  { role: "University Event Chairman", organisation: "Multimedia University", description: "Coordinated Tangan Kita Bahasa Kita, a beach cleanup CSR programme, an elderly home charity visit, and Developer Talk." },
  { role: "Student Leadership", organisation: "Management & Science University", description: "Participated in student representative activities, university programmes, and extracurricular leadership." },
] as const;

export const aboutPrinciples = [
  { title: "Clarity Over Complexity", description: "Make the important thing easier to understand." },
  { title: "Execution Over Theory", description: "Ideas become useful when they meet the real world." },
  { title: "Consistency Over Intensity", description: "Small, deliberate progress compounds over time." },
  { title: "Learning Through Practice", description: "Every build is a chance to sharpen the craft." },
  { title: "Ownership & Responsibility", description: "Care about the result, not just the task." },
  { title: "Continuous Improvement", description: "Keep refining the system, the work, and the thinking." },
  { title: "Respect & Collaboration", description: "Good work gets stronger when people feel heard." },
  { title: "Growth With Humility", description: "Stay curious, listen well, and keep improving." },
] as const;
