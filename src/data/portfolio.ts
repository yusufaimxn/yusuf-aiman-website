export type ProjectStatus = "Completed" | "In development";
export type ProjectCategory =
  | "Web applications"
  | "Mobile applications"
  | "Business systems"
  | "SaaS platforms"
  | "Websites"
  | "Academic projects";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  featured?: boolean;
  technologies: string[];
  summary: string;
  coverImage?: string;
  detailsAvailable?: boolean;
};

export type AchievementCategory =
  | "Academic"
  | "Entrepreneurship"
  | "Leadership"
  | "Technology"
  | "Communication"
  | "Personal";

export type Achievement = {
  id: string;
  title: string;
  organization: string;
  category: AchievementCategory;
  description: string;
  detail: string;
  year?: string;
  icon: string;
  accentColor: string;
  gradient: string;
  featured?: boolean;
  statGroup?: "academic" | "leadership-community";
};

export const projects: Project[] = [
  {
    slug: "omni-systems-internal",
    name: "Omni Systems Internal",
    category: "Business systems",
    status: "Completed",
    description: "An internal systems initiative for organising digital operations and product work.",
    featured: true,
    technologies: ["TypeScript", "Web systems"],
    summary: "A private internal project within Omni Systems Technology. Selected technical details are intentionally kept private.",
    coverImage: "/assets/omni systems internal banner.png",
  },
  {
    slug: "mymedik-mobile-application",
    name: "MyMedik Mobile Application",
    category: "Mobile applications",
    status: "Completed",
    description: "A healthcare mobile application project developed as part of the MyMedik ecosystem.",
    featured: true,
    technologies: ["Flutter", "Mobile"],
    summary: "A mobile application project for the MyMedik ecosystem. Full case study details are being documented.",
    coverImage: "/assets/mymedik mobile app banner.png",
  },
  {
    slug: "octomations",
    name: "Octomations",
    category: "SaaS platforms",
    status: "Completed",
    description: "A product direction exploring practical digital automation experiences.",
    featured: true,
    technologies: ["Web applications", "Product development"],
    summary: "A completed product direction. Architecture, feature notes, and outcomes will be added as the case study is verified.",
    coverImage: "/assets/octomations banner.png",
  },
  {
    slug: "kentra",
    name: "Kentra",
    category: "Web applications",
    status: "Completed",
    description: "A digital product project spanning a website and web application experience.",
    featured: true,
    technologies: ["Web applications", "UI/UX"],
    summary: "A web product project with a public-facing website and application direction. Detailed documentation is in progress.",
    coverImage: "/assets/kentra banner.png",
  },
  {
    slug: "trueself",
    name: "TrueSelf",
    category: "Web applications",
    status: "Completed",
    description: "A website and web application project focused on a thoughtful digital experience.",
    featured: true,
    technologies: ["Web applications", "Product development"],
    summary: "A completed website and web application project. The public case study will be expanded with verified implementation details.",
    coverImage: "/assets/trueself banner.png",
  },
  {
    slug: "intrafluence",
    name: "Intrafluence",
    category: "Web applications",
    status: "Completed",
    description: "A digital platform project combining brand, content, and web application thinking.",
    featured: true,
    technologies: ["Web applications", "Digital products"],
    summary: "A completed website and web application project. Selected details remain awaiting final documentation.",
    coverImage: "/assets/intrafluence banner.png",
  },
  {
    slug: "poliklinik-mymedik-website",
    name: "Poliklinik MyMedik Website",
    category: "Websites",
    status: "Completed",
    description: "A healthcare website project for Poliklinik MyMedik.",
    technologies: ["Websites", "Content"],
    summary: "A completed website project. Technical notes are available on request while the case study is being prepared.",
    coverImage: "/assets/poliklinik mymedik website banner.png",
  },
  {
    slug: "mymedikal-healthcare-website",
    name: "MyMedikal Healthcare Website",
    category: "Websites",
    status: "Completed",
    description: "A healthcare website project for MyMedikal Healthcare.",
    technologies: ["Websites", "Digital marketing"],
    summary: "A completed website project with public details awaiting final documentation.",
    coverImage: "/assets/mymedikal healthcare website banner.png",
  },
  {
    slug: "mymedik-academy-website",
    name: "MyMedik Academy Website",
    category: "Websites",
    status: "Completed",
    description: "A website project for the MyMedik Academy direction.",
    technologies: ["Websites", "Content"],
    summary: "A completed website project. Technical details are being documented.",
    coverImage: "/assets/mymedik academy website banner.png",
  },
  {
    slug: "klinik-digital-website",
    name: "Klinik Digital Website",
    category: "Websites",
    status: "Completed",
    description: "A digital healthcare website project.",
    technologies: ["Websites", "UI/UX"],
    summary: "A completed website project. Public case study details are pending verification.",
    coverImage: "/assets/klinik digital banner.png",
  },
  {
    slug: "moneymore-web-game",
    name: "MoneyMore Web Game",
    category: "Web applications",
    status: "Completed",
    description: "A web game project exploring an interactive browser experience.",
    technologies: ["Web applications", "Interactive"],
    summary: "A completed web game project. Implementation notes are awaiting documentation.",
  },
  {
    slug: "pacman-website",
    name: "Pacman Website",
    category: "Web applications",
    status: "Completed",
    description: "A browser-based Pacman project.",
    technologies: ["Web applications", "Interactive"],
    summary: "A completed interactive web project.",
  },
  {
    slug: "birthday-website",
    name: "Birthday Website",
    category: "Websites",
    status: "Completed",
    description: "A personal website project built for a birthday experience.",
    technologies: ["Websites", "Creative development"],
    summary: "A completed personal website project.",
  },
  {
    slug: "my-medikal-healthcare-sales-pages",
    name: "MyMedikal Healthcare Sales Pages",
    category: "Websites",
    status: "Completed",
    description: "A collection of healthcare sales page work for MyMedikal Healthcare.",
    technologies: ["Websites", "Digital marketing"],
    summary: "A completed sales page project.",
  },
  {
    slug: "alumni-engagement-system",
    name: "Alumni Engagement System",
    category: "Academic projects",
    status: "Completed",
    description: "An academic system project centred on alumni engagement and information management.",
    technologies: ["Database management", "Web systems"],
    summary: "An academic system project. The case study will describe the verified requirements and implementation approach.",
  },
  {
    slug: "mmu-advanced-database-project",
    name: "MMU Advanced Database Project",
    category: "Academic projects",
    status: "Completed",
    description: "An advanced database project completed during the Information Technology degree.",
    technologies: ["Database management", "System planning"],
    summary: "An academic database project completed at Multimedia University.",
  },
  {
    slug: "yusuf-aiman-website",
    name: "Yusuf Aiman Website",
    category: "Websites",
    status: "Completed",
    description: "This portfolio: a maintainable, accessible home for Yusuf Aiman's work and professional story.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    summary: "The portfolio itself is designed as a living product: structured content, useful interactions, and a clear path from first impression to contact.",
    coverImage: "/assets/yusuf aiman website banner.png",
    detailsAvailable: true,
  },
  {
    slug: "omni-tools-mobile-application",
    name: "Omni Tools Mobile Application",
    category: "Mobile applications",
    status: "Completed",
    description: "A mobile application direction for a collection of practical tools.",
    technologies: ["Flutter", "Product development"],
    summary: "A completed mobile application project. Public technical details are still being assembled.",
    coverImage: "/assets/omni tools banner.png",
  },
  {
    slug: "omni-docs",
    name: "Omni Docs",
    category: "SaaS platforms",
    status: "In development",
    description: "A planned product direction for documents and knowledge workflows.",
    technologies: ["Product development", "SaaS"],
    summary: "An in-development Omni Systems product direction.",
  },
  {
    slug: "omni-copy",
    name: "Omni Copy",
    category: "SaaS platforms",
    status: "In development",
    description: "A planned product direction for content and copy workflows.",
    technologies: ["Product development", "SaaS"],
    summary: "An in-development Omni Systems product direction.",
  },
  {
    slug: "omni-money",
    name: "Omni Money",
    category: "SaaS platforms",
    status: "In development",
    description: "A planned product direction for practical money workflows.",
    technologies: ["Product development", "SaaS"],
    summary: "An in-development Omni Systems product direction.",
  },
  {
    slug: "omni-plan",
    name: "Omni Plan",
    category: "SaaS platforms",
    status: "In development",
    description: "A planned product direction for planning and execution workflows.",
    technologies: ["Product development", "SaaS"],
    summary: "An in-development Omni Systems product direction.",
  },
  {
    slug: "poliklinik-mymedik-system",
    name: "Poliklinik MyMedik System",
    category: "Business systems",
    status: "In development",
    description: "An in-development system direction for Poliklinik MyMedik.",
    technologies: ["Business systems", "System planning"],
    summary: "An in-development project. Public technical details will follow when ready to share.",
  },
  {
    slug: "mymedik-butik-website",
    name: "MyMedik Butik Website",
    category: "Websites",
    status: "In development",
    description: "An in-development website direction for MyMedik Butik.",
    technologies: ["Websites", "Product development"],
    summary: "An in-development project direction.",
  },
  {
    slug: "mymedik-circumcision-website",
    name: "MyMedik Circumcision Website",
    category: "Websites",
    status: "In development",
    description: "An in-development website direction for MyMedik Circumcision.",
    technologies: ["Websites", "Content"],
    summary: "An in-development project direction.",
  },
  {
    slug: "mymedikal-healthcare-system",
    name: "MyMedikal Healthcare System",
    category: "Business systems",
    status: "In development",
    description: "An in-development admin system direction for MyMedikal Healthcare.",
    technologies: ["Business systems", "Database management"],
    summary: "An in-development project direction.",
  },
  {
    slug: "shadow-burger-website",
    name: "Shadow Burger Website",
    category: "Websites",
    status: "In development",
    description: "An in-development website direction for Shadow Burger.",
    technologies: ["Websites", "Creative development"],
    summary: "An in-development project direction.",
  },
  {
    slug: "omni-systems-website",
    name: "Omni Systems Website",
    category: "Websites",
    status: "Completed",
    description: "A public website direction for Omni Systems Technology.",
    technologies: ["Websites", "Digital products"],
    summary: "A documented website project for Omni Systems Technology. Additional public technical details are not yet available.",
  },
  {
    slug: "octomations-website",
    name: "Octomations Website",
    category: "Websites",
    status: "Completed",
    description: "A public website direction supporting the Octomations product concept.",
    technologies: ["Websites", "Product development"],
    summary: "A documented website project related to the Octomations product direction.",
  },
  {
    slug: "kentra-website",
    name: "Kentra Website",
    category: "Websites",
    status: "Completed",
    description: "A public website direction for the Kentra product concept.",
    technologies: ["Websites", "Digital products"],
    summary: "A documented website project related to the Kentra product direction.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export type SkillVerificationStatus = "confirmed" | "project_based" | "needs_verification";

export type SkillCategory =
  | "Programming Languages"
  | "Frontend Development"
  | "Backend Development"
  | "Database & Data"
  | "Mobile Development"
  | "Software Engineering"
  | "Cloud & Development Tools"
  | "UI/UX & Product Design"
  | "AI & Automation"
  | "Digital Marketing & Analytics"
  | "Creative & Multimedia"
  | "Business & Leadership";

export type Skill = {
  id: string;
  name: string;
  slug: string;
  primaryCategory: SkillCategory;
  secondaryCategories: SkillCategory[];
  description: string;
  icon: string;
  featured: boolean;
  verificationStatus: SkillVerificationStatus;
  relatedProjectIds: string[];
  keywords: string[];
};

const skill = (definition: Omit<Skill, "slug">): Skill => ({ ...definition, icon: definition.id, slug: definition.id });

export const skills: Skill[] = [
  skill({ id: "javascript", name: "JavaScript", primaryCategory: "Programming Languages", secondaryCategories: [], description: "Core language for interactive web experiences and application logic.", icon: "JS", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["js", "ecmascript"] }),
  skill({ id: "typescript", name: "TypeScript", primaryCategory: "Programming Languages", secondaryCategories: ["Software Engineering"], description: "Typed application development for clearer, more maintainable systems.", icon: "TS", featured: true, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website", "omni-systems-internal"], keywords: ["ts", "typed javascript"] }),
  skill({ id: "php", name: "PHP", primaryCategory: "Programming Languages", secondaryCategories: ["Backend Development"], description: "Server-side programming language included in Yusuf's working toolkit.", icon: "PHP", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["server side"] }),
  skill({ id: "dart", name: "Dart", primaryCategory: "Programming Languages", secondaryCategories: ["Mobile Development"], description: "Programming language used with Flutter for cross-platform applications.", icon: "D", featured: true, verificationStatus: "project_based", relatedProjectIds: ["mymedik-mobile-application", "omni-tools-mobile-application"], keywords: ["flutter language"] }),
  skill({ id: "html5", name: "HTML5", primaryCategory: "Programming Languages", secondaryCategories: ["Frontend Development"], description: "Semantic structure for accessible, responsive web pages.", icon: "HTML", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["html", "markup"] }),
  skill({ id: "css3", name: "CSS3", primaryCategory: "Programming Languages", secondaryCategories: ["Frontend Development"], description: "Responsive layout, visual systems, and interaction styling.", icon: "CSS", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["css", "styling"] }),
  skill({ id: "react", name: "React", primaryCategory: "Frontend Development", secondaryCategories: ["Software Engineering"], description: "Component-based interfaces for interactive digital products.", icon: "<>" , featured: true, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["components", "frontend"] }),
  skill({ id: "nextjs", name: "Next.js", primaryCategory: "Frontend Development", secondaryCategories: ["Software Engineering", "Cloud & Development Tools"], description: "Full-stack React framework for production web applications.", icon: "N.js", featured: true, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["next", "app router", "react"] }),
  skill({ id: "tailwind-css", name: "Tailwind CSS", primaryCategory: "Frontend Development", secondaryCategories: ["UI/UX & Product Design"], description: "Utility-first styling for consistent, responsive interfaces.", icon: "TW", featured: true, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["tailwind", "utility css"] }),
  skill({ id: "responsive-web-design", name: "Responsive Web Design", primaryCategory: "Frontend Development", secondaryCategories: ["UI/UX & Product Design"], description: "Layouts that remain clear and useful across screen sizes.", icon: "RWD", featured: false, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["responsive", "mobile first"] }),
  skill({ id: "component-architecture", name: "Component-Based Architecture", primaryCategory: "Frontend Development", secondaryCategories: ["Software Engineering"], description: "Reusable interface building blocks with clear boundaries.", icon: "UI", featured: false, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["components", "architecture"] }),
  skill({ id: "form-validation", name: "Form Handling & Validation", primaryCategory: "Frontend Development", secondaryCategories: ["Backend Development"], description: "Accessible form inputs, validation feedback, and safe submission flows.", icon: "FORM", featured: false, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["forms", "validation"] }),
  skill({ id: "dynamic-routing", name: "Dynamic Routing", primaryCategory: "Frontend Development", secondaryCategories: ["Software Engineering"], description: "Structured routes for pages, project detail, and content discovery.", icon: "↗", featured: false, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["routing", "pages"] }),
  skill({ id: "web-accessibility", name: "Web Accessibility", primaryCategory: "Frontend Development", secondaryCategories: ["UI/UX & Product Design"], description: "Keyboard-aware, semantic, readable experiences for more people.", icon: "A11Y", featured: false, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["a11y", "wcag", "keyboard"] }),
  skill({ id: "laravel", name: "Laravel", primaryCategory: "Backend Development", secondaryCategories: [], description: "PHP framework included in Yusuf's backend development toolkit.", icon: "L", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["php", "framework"] }),
  skill({ id: "supabase", name: "Supabase", primaryCategory: "Backend Development", secondaryCategories: ["Database & Data"], description: "Backend and data platform included in the working stack.", icon: "SB", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["backend", "database"] }),
  skill({ id: "backend-development", name: "Backend Development", primaryCategory: "Backend Development", secondaryCategories: ["Software Engineering"], description: "Server-side thinking for application logic, data, and business workflows.", icon: "API", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["server", "api"] }),
  skill({ id: "database-management", name: "Database Management", primaryCategory: "Database & Data", secondaryCategories: ["Backend Development"], description: "Working with structured data, relationships, and information systems.", icon: "DB", featured: true, verificationStatus: "project_based", relatedProjectIds: ["alumni-engagement-system", "mmu-advanced-database-project"], keywords: ["data", "database"] }),
  skill({ id: "system-planning", name: "System Planning", primaryCategory: "Software Engineering", secondaryCategories: ["Database & Data"], description: "Breaking requirements into workable systems, flows, and implementation steps.", icon: "SYS", featured: true, verificationStatus: "project_based", relatedProjectIds: ["alumni-engagement-system", "mmu-advanced-database-project"], keywords: ["analysis", "systems"] }),
  skill({ id: "flutter", name: "Flutter", primaryCategory: "Mobile Development", secondaryCategories: ["Software Engineering"], description: "Cross-platform application framework in Yusuf's mobile toolkit.", icon: "FL", featured: true, verificationStatus: "project_based", relatedProjectIds: ["mymedik-mobile-application", "omni-tools-mobile-application"], keywords: ["mobile", "dart", "android"] }),
  skill({ id: "mobile-application-development", name: "Mobile Application Development", primaryCategory: "Mobile Development", secondaryCategories: ["UI/UX & Product Design"], description: "Designing and building practical mobile product experiences.", icon: "APP", featured: false, verificationStatus: "project_based", relatedProjectIds: ["mymedik-mobile-application", "omni-tools-mobile-application"], keywords: ["mobile", "app"] }),
  skill({ id: "software-development", name: "Software Development", primaryCategory: "Software Engineering", secondaryCategories: ["Frontend Development", "Backend Development"], description: "Turning requirements and ideas into maintainable digital products.", icon: "DEV", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["engineering", "software"] }),
  skill({ id: "product-development", name: "Product Development", primaryCategory: "Software Engineering", secondaryCategories: ["UI/UX & Product Design", "Business & Leadership"], description: "Connecting user needs, product decisions, and implementation work.", icon: "PROD", featured: true, verificationStatus: "project_based", relatedProjectIds: ["octomations", "omni-tools-mobile-application"], keywords: ["product", "planning"] }),
  skill({ id: "technical-documentation", name: "Technical Documentation", primaryCategory: "Software Engineering", secondaryCategories: [], description: "Making systems and decisions easier for others to understand and maintain.", icon: "DOC", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["docs", "documentation"] }),
  skill({ id: "visual-studio-code", name: "Visual Studio Code", primaryCategory: "Cloud & Development Tools", secondaryCategories: [], description: "Primary development environment for day-to-day implementation work.", icon: "VS", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["editor", "ide"] }),
  skill({ id: "vercel", name: "Vercel", primaryCategory: "Cloud & Development Tools", secondaryCategories: ["Frontend Development"], description: "Deployment platform selected for this portfolio architecture.", icon: "VC", featured: true, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["deploy", "hosting"] }),
  skill({ id: "git", name: "Git", primaryCategory: "Cloud & Development Tools", secondaryCategories: ["Software Engineering"], description: "Version control for tracking, reviewing, and evolving code.", icon: "GIT", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["version control"] }),
  skill({ id: "github", name: "GitHub", primaryCategory: "Cloud & Development Tools", secondaryCategories: ["Software Engineering"], description: "Repository and collaboration platform in the development workflow.", icon: "GH", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["repositories", "collaboration"] }),
  skill({ id: "figma", name: "Figma", primaryCategory: "UI/UX & Product Design", secondaryCategories: [], description: "Interface design, visual exploration, and product communication.", icon: "FIG", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["design", "prototype"] }),
  skill({ id: "ui-ux-design", name: "UI/UX Design", primaryCategory: "UI/UX & Product Design", secondaryCategories: ["Frontend Development"], description: "Balancing visual clarity, user flow, and functional interaction.", icon: "UX", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["user experience", "interface"] }),
  skill({ id: "design-systems", name: "Design Systems", primaryCategory: "UI/UX & Product Design", secondaryCategories: ["Frontend Development"], description: "Reusable visual rules and components for consistent experiences.", icon: "DS", featured: false, verificationStatus: "project_based", relatedProjectIds: ["yusuf-aiman-website"], keywords: ["tokens", "components"] }),
  skill({ id: "chatgpt", name: "ChatGPT", primaryCategory: "AI & Automation", secondaryCategories: ["Software Engineering"], description: "AI tool used as part of a broader development and learning workflow.", icon: "AI", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["ai", "assistant"] }),
  skill({ id: "digital-marketing", name: "Digital Marketing", primaryCategory: "Digital Marketing & Analytics", secondaryCategories: ["Business & Leadership"], description: "Digital campaigns, content, and customer acquisition experience.", icon: "MKT", featured: true, verificationStatus: "confirmed", relatedProjectIds: ["mymedikal-healthcare-website", "my-medikal-healthcare-sales-pages"], keywords: ["campaigns", "marketing"] }),
  skill({ id: "analytics", name: "Marketing Analytics", primaryCategory: "Digital Marketing & Analytics", secondaryCategories: [], description: "Using campaign and audience signals to improve digital decisions.", icon: "ANA", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["analytics", "metrics"] }),
  skill({ id: "content-creation", name: "Content Creation", primaryCategory: "Creative & Multimedia", secondaryCategories: ["Digital Marketing & Analytics"], description: "Creating useful visual and written material for digital audiences.", icon: "CNT", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["content", "creative"] }),
  skill({ id: "canva", name: "Canva", primaryCategory: "Creative & Multimedia", secondaryCategories: [], description: "Accessible visual production for campaigns and communication.", icon: "CAN", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["design", "graphics"] }),
  skill({ id: "capcut", name: "CapCut", primaryCategory: "Creative & Multimedia", secondaryCategories: [], description: "Video editing and short-form content production tool.", icon: "CAP", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["video", "editing"] }),
  skill({ id: "entrepreneurship", name: "Entrepreneurship", primaryCategory: "Business & Leadership", secondaryCategories: ["Software Engineering"], description: "Building and exploring products, services, and business ideas.", icon: "ENT", featured: true, verificationStatus: "confirmed", relatedProjectIds: ["omni-systems-internal"], keywords: ["business", "founder"] }),
  skill({ id: "leadership", name: "Leadership", primaryCategory: "Business & Leadership", secondaryCategories: [], description: "Student, community, and venture leadership experience.", icon: "LEAD", featured: true, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["team", "community"] }),
  skill({ id: "public-speaking", name: "Public Speaking", primaryCategory: "Business & Leadership", secondaryCategories: [], description: "Communicating ideas clearly in presentations and group settings.", icon: "SPEAK", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["communication", "presentation"] }),
  skill({ id: "project-management", name: "Project Management", primaryCategory: "Business & Leadership", secondaryCategories: ["Software Engineering"], description: "Organising work, priorities, and communication around a shared outcome.", icon: "PM", featured: false, verificationStatus: "confirmed", relatedProjectIds: [], keywords: ["planning", "delivery"] }),
  skill({ id: "postgresql", name: "PostgreSQL", primaryCategory: "Database & Data", secondaryCategories: ["Backend Development"], description: "Relational database technology awaiting a published project reference.", icon: "PG", featured: false, verificationStatus: "needs_verification", relatedProjectIds: [], keywords: ["sql", "relational database"] }),
  skill({ id: "rest-api-integration", name: "REST API Integration", primaryCategory: "Backend Development", secondaryCategories: [], description: "Integration capability awaiting a published project reference.", icon: "REST", featured: false, verificationStatus: "needs_verification", relatedProjectIds: [], keywords: ["api", "http"] }),
  skill({ id: "ai-assisted-development", name: "AI-Assisted Development", primaryCategory: "AI & Automation", secondaryCategories: ["Software Engineering"], description: "Development practice awaiting a public, project-based case study.", icon: "AI+", featured: false, verificationStatus: "needs_verification", relatedProjectIds: [], keywords: ["ai", "automation"] }),
  skill({ id: "workflow-automation", name: "Workflow Automation", primaryCategory: "AI & Automation", secondaryCategories: ["Business & Leadership"], description: "Automation capability awaiting a public, project-based case study.", icon: "AUTO", featured: false, verificationStatus: "needs_verification", relatedProjectIds: [], keywords: ["automation", "workflow"] }),
];

export const skillCategories = [
  { id: "all", label: "All skills" },
  { id: "Programming Languages", label: "Programming" },
  { id: "Frontend Development", label: "Frontend" },
  { id: "Backend Development", label: "Backend" },
  { id: "Database & Data", label: "Database" },
  { id: "Mobile Development", label: "Mobile" },
  { id: "Software Engineering", label: "Engineering" },
  { id: "Cloud & Development Tools", label: "Cloud & tools" },
  { id: "UI/UX & Product Design", label: "UI/UX" },
  { id: "AI & Automation", label: "AI & automation" },
  { id: "Digital Marketing & Analytics", label: "Marketing" },
  { id: "Creative & Multimedia", label: "Creative" },
  { id: "Business & Leadership", label: "Business" },
] as const;

export const publicSkills = skills.filter((item) => item.verificationStatus !== "needs_verification");
export const featuredSkills = publicSkills.filter((item) => item.featured);
export const projectById = new Map(projects.map((project) => [project.slug, project]));

export const technicalCapabilities = [
  { id: "full-stack", title: "Full-Stack Development", description: "From interface to application logic, with an emphasis on clear boundaries and useful outcomes.", icon: "software-development", skillIds: ["nextjs", "react", "typescript", "software-development"], relatedProjectIds: ["yusuf-aiman-website"] },
  { id: "mobile", title: "Mobile Development", description: "Practical cross-platform mobile experiences shaped around real product needs.", icon: "mobile-application-development", skillIds: ["flutter", "dart", "mobile-application-development"], relatedProjectIds: ["mymedik-mobile-application", "omni-tools-mobile-application"] },
  { id: "backend-data", title: "Backend & Data", description: "Server-side and information-system thinking for dependable digital workflows.", icon: "database-management", skillIds: ["laravel", "supabase", "database-management"], relatedProjectIds: ["alumni-engagement-system", "mmu-advanced-database-project"] },
  { id: "engineering", title: "Software Engineering", description: "Planning, structuring, documenting, and maintaining software with care.", icon: "system-planning", skillIds: ["system-planning", "technical-documentation", "git"], relatedProjectIds: ["alumni-engagement-system"] },
  { id: "architecture", title: "System Architecture", description: "Turning product requirements into modular, understandable system directions.", icon: "component-architecture", skillIds: ["component-architecture", "dynamic-routing", "product-development"], relatedProjectIds: ["yusuf-aiman-website", "octomations"] },
  { id: "cloud", title: "Cloud & Deployment", description: "Development tooling and deployment foundations for shipping modern web products.", icon: "vercel", skillIds: ["vercel", "visual-studio-code", "github"], relatedProjectIds: ["yusuf-aiman-website"] },
  { id: "uiux", title: "UI/UX Engineering", description: "Connecting visual hierarchy, interaction design, and reusable frontend systems.", icon: "ui-ux-design", skillIds: ["ui-ux-design", "figma", "design-systems"], relatedProjectIds: ["yusuf-aiman-website"] },
  { id: "ai", title: "AI & Automation", description: "Exploring AI-assisted workflows as a complement to deliberate engineering practice.", icon: "chatgpt", skillIds: ["chatgpt"], relatedProjectIds: [] },
] as const;

export const multidisciplinaryCapabilities = [
  { title: "Digital Marketing", description: "Campaigns, content, analytics, and customer acquisition across healthcare contexts.", skillIds: ["digital-marketing", "analytics"] },
  { title: "Creative Production", description: "Visual content, design, and video tools for communicating ideas clearly.", skillIds: ["content-creation", "canva", "capcut"] },
  { title: "Business Development", description: "Exploring products, services, and customer-facing opportunities with ownership.", skillIds: ["entrepreneurship", "project-management"] },
  { title: "Leadership & Communication", description: "Leading initiatives, presenting ideas, and working with people across different contexts.", skillIds: ["leadership", "public-speaking"] },
] as const;

export const experiences = [
  {
    period: "2026 — Present",
    role: "Founder & Software Developer",
    organisation: "Omni Systems Technology",
    description: "Building software products, business systems, and digital solutions while shaping a long-term technology venture.",
  },
  {
    period: "2023 — 2024",
    role: "Digital Marketing",
    organisation: "MyMedikal Healthcare",
    description: "Worked across digital campaigns, content creation, website development, marketing analytics, and online customer acquisition.",
  },
  {
    period: "2022 — 2023",
    role: "Marketing Agent",
    organisation: "Poliklinik MyMedik",
    description: "Supported digital marketing, promotional content, and online engagement.",
  },
];

export const achievements: Achievement[] = [
  {
    id: "deans-list-mmu",
    title: "Dean's List",
    organization: "Multimedia University",
    category: "Academic",
    description: "Recognized for strong academic performance while pursuing a Bachelor of Information Technology in Information Systems.",
    detail: "Multimedia University",
    icon: "graduation-cap",
    accentColor: "#3B82F6",
    gradient: "#071a3d, #102b57",
    statGroup: "academic",
  },
  {
    id: "deans-list-msu",
    title: "Dean's List",
    organization: "Management & Science University",
    category: "Academic",
    description: "Received academic recognition during Foundation in Medical Science studies.",
    detail: "Management & Science University",
    icon: "award",
    accentColor: "#06B6D4",
    gradient: "#06252c, #0b4650",
    statGroup: "academic",
  },
  {
    id: "scholarship-recipient",
    title: "Scholarship Recipient",
    organization: "Management & Science University",
    category: "Academic",
    description: "Awarded a scholarship in recognition of academic potential during foundation studies.",
    detail: "Management & Science University",
    icon: "medal",
    accentColor: "#8B5CF6",
    gradient: "#180b35, #32136b",
    statGroup: "academic",
  },
  {
    id: "omni-systems-founder",
    title: "Founder",
    organization: "Omni Systems Technology",
    category: "Entrepreneurship",
    description: "Established a technology business focused on software development, digital systems, and innovative technology solutions.",
    detail: "Omni Systems Technology",
    year: "2026",
    icon: "rocket",
    accentColor: "#F5C451",
    gradient: "#342306, #5f4310",
    featured: true,
  },
  {
    id: "entrepreneurship-grant",
    title: "Entrepreneurship Grant Recipient",
    organization: "Multimedia University",
    category: "Entrepreneurship",
    description: "Received university entrepreneurship grant support for business development initiatives.",
    detail: "Multimedia University",
    icon: "lightbulb",
    accentColor: "#F59E0B",
    gradient: "#341907, #5f2d0a",
  },
  {
    id: "pepias-deputy-chairman",
    title: "Deputy Chairman",
    organization: "PEPIAS",
    category: "Leadership",
    description: "Served in a leadership position supporting organizational activities, coordination, and community initiatives.",
    detail: "PEPIAS",
    icon: "users",
    accentColor: "#10B981",
    gradient: "#062b25, #0b513c",
    statGroup: "leadership-community",
  },
  {
    id: "university-event-chairman",
    title: "University Event Chairman",
    organization: "Multimedia University",
    category: "Leadership",
    description: "Chaired multiple university initiatives involving student development, community engagement, and collaborative events.",
    detail: "Multimedia University",
    icon: "calendar",
    accentColor: "#14B8A6",
    gradient: "#062c2d, #0d5b5c",
    statGroup: "leadership-community",
  },
  {
    id: "student-representative-council",
    title: "Student Representative Council Involvement",
    organization: "Management & Science University",
    category: "Leadership",
    description: "Contributed to student representation, event coordination, and campus engagement activities.",
    detail: "Management & Science University",
    icon: "network",
    accentColor: "#6366F1",
    gradient: "#101542, #282a78",
    statGroup: "leadership-community",
  },
  {
    id: "hafiz-al-quran",
    title: "Hafiz Al-Quran",
    organization: "Personal Achievement",
    category: "Personal",
    description: "Completed the memorisation of all 30 Juz of the Quran, representing years of dedication, discipline, and consistency.",
    detail: "Personal Achievement",
    icon: "book",
    accentColor: "#22C55E",
    gradient: "#062d1e, #0d5932",
  },
  {
    id: "public-speaking-champion",
    title: "Public Speaking Competition Champion",
    organization: "School Achievement",
    category: "Communication",
    description: "Recognized for public speaking ability, communication, confidence, and presentation skills.",
    detail: "School Achievement",
    icon: "microphone",
    accentColor: "#FB7185",
    gradient: "#3b111d, #6a2232",
    statGroup: "leadership-community",
  },
  {
    id: "best-character-award",
    title: "Best Character Award",
    organization: "School Recognition",
    category: "Personal",
    description: "Received recognition for personal character, positive conduct, and contributions within the school community.",
    detail: "School Recognition",
    icon: "heart",
    accentColor: "#F4A6A6",
    gradient: "#351820, #5f2b3a",
  },
  {
    id: "digital-projects-developed",
    title: "30 Digital Projects Developed",
    organization: "Software Development Portfolio",
    category: "Technology",
    description: "Built and documented a portfolio of 30 digital projects spanning websites, web applications, business systems, mobile applications, and digital products. The portfolio includes both completed development work and ongoing projects.",
    detail: "Software Development Portfolio",
    icon: "code",
    accentColor: "#A855F7",
    gradient: "#230c43, #4a1680",
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yusuf-aiman-2810562b9" },
  { label: "Instagram", href: "https://www.instagram.com/yusufaimxn/" },
  { label: "WhatsApp", href: "https://wa.me/601158955662" },
];
