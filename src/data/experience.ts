import { projectById } from "@/data/portfolio";
import { resumeExperience } from "@/data/resume";

const [founderExperience, digitalMarketingExperience, marketingAgentExperience] = resumeExperience;

export const professionalExperience = [
  {
    id: "omni-systems",
    ...founderExperience,
    role: "Founder & Software Developer",
    organisation: "Omni Systems Technology",
    period: "2026 — Present",
    description: "Founded and manage a technology solutions business focused on web development, mobile applications, business systems, and digital products.",
    technologies: ["Next.js", "React", "TypeScript", "Flutter", "Supabase", "Laravel"],
    relatedProjectIds: ["omni-systems-internal", "octomations", "kentra", "mymedik-mobile-application"],
  },
  {
    id: "mymedikal-marketing",
    ...digitalMarketingExperience,
    role: "Digital Marketing",
    organisation: "MyMedikal Healthcare",
    period: "February 2023 — April 2024",
    technologies: ["Digital Marketing", "SEO", "Meta Ads", "TikTok Ads", "Google Ads", "Content Marketing"],
    relatedProjectIds: ["mymedikal-healthcare-website", "my-medikal-healthcare-sales-pages"],
  },
  {
    id: "mymedik-marketing",
    ...marketingAgentExperience,
    role: "Marketing Agent",
    organisation: "Poliklinik MyMedik",
    period: "April 2022 — January 2023",
    technologies: ["Social Media Marketing", "Content Creation", "Marketing Communication"],
    relatedProjectIds: ["poliklinik-mymedik-website"],
  },
] as const;

export const engineeringDomains = [
  { index: "01", title: "Business Management Systems", description: "Building structured digital workflows around projects, CRM, tasks, finance, and documentation.", technologies: ["Next.js", "TypeScript", "React", "Supabase"], projectIds: ["omni-systems-internal"], capabilities: ["System planning", "Database management", "Business workflows"] },
  { index: "02", title: "Healthcare Technology", description: "Working on a healthcare education product direction with mobile-first interfaces and structured learning workflows.", technologies: ["Flutter", "Dart", "Supabase"], projectIds: ["mymedik-mobile-application"], capabilities: ["Mobile development", "Product development", "Application interfaces"] },
  { index: "03", title: "SaaS & Productivity Platforms", description: "Exploring practical software products for business operations, productivity, and digital workspaces.", technologies: ["Next.js", "TypeScript", "Supabase"], projectIds: ["octomations", "kentra"], capabilities: ["Product development", "UI/UX engineering", "Database-backed features"] },
  { index: "04", title: "Mobile Applications", description: "Developing cross-platform mobile directions for education and practical tools.", technologies: ["Flutter", "Dart", "Mobile product design"], projectIds: ["mymedik-mobile-application", "omni-tools-mobile-application"], capabilities: ["Mobile application development", "Responsive flows", "Product thinking"] },
  { index: "05", title: "Web Development", description: "Creating websites and web experiences across portfolio, healthcare, and digital product contexts.", technologies: ["Web development", "UI/UX", "Content systems"], projectIds: ["yusuf-aiman-website", "klinik-digital-website", "mymedikal-healthcare-website"], capabilities: ["Frontend development", "Responsive web design", "Digital communication"] },
  { index: "06", title: "AI-Assisted Products", description: "Exploring AI-assisted productivity inside a wider product and workspace direction.", technologies: ["Next.js", "TypeScript", "React", "Supabase"], projectIds: ["kentra"], capabilities: ["Product development", "Workspace interfaces", "Digital innovation"] },
] as const;

export const entrepreneurshipAreas = [
  { title: "Digital Products", description: "Testing ideas that can become useful, repeatable software experiences." },
  { title: "Online Services", description: "Learning how delivery, communication, and customer trust shape an offer." },
  { title: "Physical Retail", description: "Understanding the operational side of selling something people can hold." },
  { title: "Customer Acquisition", description: "Connecting the right message with the people who need it." },
  { title: "Sales & Marketing", description: "Turning attention into a clearer conversation about value." },
  { title: "Business Operations", description: "Taking responsibility for the details behind a working venture." },
] as const;

export const leadershipExperience = [
  { role: "Deputy Chairman", organisation: "PEPIAS", responsibilities: "Organisational leadership, programme planning, community engagement, and team coordination.", programmes: "Community initiatives and organisational programmes.", skills: ["Coordination", "Communication", "Planning"] },
  { role: "University Event Chairman", organisation: "Multimedia University", responsibilities: "Planned and coordinated student-led programmes with different teams and stakeholders.", programmes: "Tangan Kita Bahasa Kita, beach cleanup CSR programme, elderly home charity visit, and Developer Talk.", skills: ["Event planning", "Team coordination", "Delivery"] },
  { role: "Student Leadership", organisation: "Management & Science University", responsibilities: "Participated in student representative activities, university programmes, and extracurricular leadership.", programmes: "Student representative and campus activities.", skills: ["Representation", "Collaboration", "Initiative"] },
] as const;

export const careerMilestones = [
  { year: "2022", title: "Early experience in marketing", description: "Started building experience in digital content, promotion, and online audience engagement." },
  { year: "2023", title: "Digital marketing and medical science", description: "Expanded into digital marketing while pursuing a Foundation in Medical Science." },
  { year: "2024", title: "A transition into information technology", description: "Moved into Information Technology and began developing a stronger software engineering practice." },
  { year: "2026", title: "Omni Systems Technology founded", description: "Founded Omni Systems Technology and continued developing multiple software product directions." },
] as const;

export const resolveProjects = (ids: readonly string[]) => ids.map((id) => projectById.get(id)).filter((project): project is NonNullable<typeof project> => Boolean(project));
