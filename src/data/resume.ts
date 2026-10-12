export const resumePdfUrl = "/assets/YUSUF%20AIMAN%20RESUME%20OCT%202026.pdf";

export const resumeDocument = {
  title: "Professional Resume",
  name: "Muhammad Yusuf Aiman bin Mohamad Salleh",
  version: "October 2026",
  lastUpdated: "October 2026",
  format: "PDF",
  pages: 3,
  focus: ["Full-Stack Development", "Software Engineering"],
  status: "Available for download",
  location: "Cyberjaya, Selangor, Malaysia",
  email: "myusufaiman05@gmail.com",
  portfolio: "yusufaiman.me",
  linkedin: "https://www.linkedin.com/in/yusuf-aiman-2810562b9",
};

export const resumeTitles = ["Full-Stack Developer", "Software Engineer", "Technology Entrepreneur"];

export const resumeSummary = [
  "Information Technology undergraduate specialising in Information Systems at Multimedia University, with hands-on experience developing web applications, mobile applications, and integrated business management systems.",
  "Founder of Omni Systems Technology, where I design and develop digital products using Next.js, React, TypeScript, Flutter, Laravel, and Supabase.",
  "Experienced in frontend and backend development, database integration, authentication, system workflows, and user interface design.",
  "Combining software development with a background in digital marketing, entrepreneurship, and leadership, I approach technology with both technical and business perspectives.",
];

export type ResumeSkillItem = { name: string; iconSkillId?: string };
export type ResumeSkillGroup = { title: string; description: string; skills: ResumeSkillItem[] };

export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    title: "Programming Languages",
    description: "Core languages for application development and information systems.",
    skills: [
      { name: "JavaScript", iconSkillId: "javascript" },
      { name: "TypeScript", iconSkillId: "typescript" },
      { name: "PHP", iconSkillId: "php" },
      { name: "Dart", iconSkillId: "dart" },
      { name: "SQL" },
      { name: "HTML5", iconSkillId: "html5" },
      { name: "CSS3", iconSkillId: "css3" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Responsive, component-based interfaces shaped around real product needs.",
    skills: [
      { name: "React", iconSkillId: "react" },
      { name: "Next.js", iconSkillId: "nextjs" },
      { name: "Tailwind CSS", iconSkillId: "tailwind-css" },
      { name: "Responsive Web Design", iconSkillId: "responsive-web-design" },
      { name: "Component-Based Architecture", iconSkillId: "component-architecture" },
      { name: "UI Development", iconSkillId: "ui-ux-design" },
    ],
  },
  {
    title: "Backend Development",
    description: "Application logic, integrations, identity, and business workflows.",
    skills: [
      { name: "Laravel", iconSkillId: "laravel" },
      { name: "Supabase", iconSkillId: "supabase" },
      { name: "Authentication & Authorisation", iconSkillId: "backend-development" },
      { name: "API Integration", iconSkillId: "rest-api-integration" },
      { name: "Backend Development", iconSkillId: "backend-development" },
    ],
  },
  {
    title: "Database & Data Management",
    description: "Structured data, relationships, modelling, and dependable CRUD workflows.",
    skills: [
      { name: "PostgreSQL", iconSkillId: "postgresql" },
      { name: "Relational Databases", iconSkillId: "database-management" },
      { name: "Database Design", iconSkillId: "database-management" },
      { name: "Data Modelling", iconSkillId: "database-management" },
      { name: "CRUD Operations", iconSkillId: "database-management" },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile experiences and Android application workflows.",
    skills: [
      { name: "Flutter", iconSkillId: "flutter" },
      { name: "Cross-Platform Mobile Development", iconSkillId: "mobile-application-development" },
      { name: "Android Application Development", iconSkillId: "flutter" },
    ],
  },
  {
    title: "Development Tools & Deployment",
    description: "The tools used to develop, version, and ship modern software products.",
    skills: [
      { name: "Git", iconSkillId: "git" },
      { name: "GitHub", iconSkillId: "github" },
      { name: "Visual Studio Code", iconSkillId: "visual-studio-code" },
      { name: "Vercel", iconSkillId: "vercel" },
      { name: "Supabase CLI", iconSkillId: "supabase" },
      { name: "Cloudflare" },
    ],
  },
  {
    title: "Software Engineering",
    description: "Structured thinking from requirements and system design through delivery.",
    skills: [
      { name: "System Analysis & Design", iconSkillId: "system-planning" },
      { name: "Software Development Lifecycle", iconSkillId: "software-development" },
      { name: "Requirements Analysis", iconSkillId: "system-planning" },
      { name: "System Integration", iconSkillId: "component-architecture" },
      { name: "Debugging", iconSkillId: "software-development" },
      { name: "Technical Documentation", iconSkillId: "technical-documentation" },
    ],
  },
  {
    title: "Design & Additional Tools",
    description: "Visual communication and creative tools that support product work.",
    skills: [
      { name: "Figma", iconSkillId: "figma" },
      { name: "Canva", iconSkillId: "canva" },
      { name: "CapCut", iconSkillId: "capcut" },
      { name: "Notion" },
      { name: "AI-Assisted Development", iconSkillId: "ai-assisted-development" },
    ],
  },
];

export type ResumeExperience = {
  role: string;
  organisation: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export const resumeExperience: ResumeExperience[] = [
  {
    role: "Founder & Software Developer",
    organisation: "Omni Systems Technology",
    period: "January 2026 – Present",
    description: "Founded and manage a technology solutions business focused on developing websites, web applications, mobile applications, and integrated digital systems.",
    responsibilities: [
      "Design and develop full-stack web applications and business management systems.",
      "Build responsive user interfaces, database-driven applications, authentication systems, and integrated business workflows.",
      "Develop software products supporting project management, CRM, financial operations, and automation.",
      "Manage development processes from requirements gathering and planning to implementation, testing, and deployment.",
      "Apply UI/UX principles to create functional and maintainable products.",
      "Coordinate product development, client requirements, and business operations.",
    ],
  },
  {
    role: "Digital Marketing",
    organisation: "MyMedikal Healthcare",
    period: "February 2023 – April 2024",
    description: "Worked across digital campaigns, website development, content, SEO, and online customer acquisition for a healthcare business.",
    responsibilities: [
      "Managed digital marketing initiatives across social media and advertising platforms.",
      "Supported website development, landing pages, SEO, and digital customer acquisition.",
      "Created marketing content and conversion-focused campaigns.",
      "Analysed campaign performance and supported lead generation.",
      "Connected marketing activities with business objectives.",
    ],
  },
  {
    role: "Marketing Agent",
    organisation: "Poliklinik MyMedik",
    period: "April 2022 – January 2023",
    description: "Supported digital marketing campaigns, promotional activities, and online communication for a healthcare environment.",
    responsibilities: [
      "Supported digital marketing campaigns and promotional activities.",
      "Produced social media content and marketing materials.",
      "Assisted with online audience engagement and promotional communication.",
    ],
  },
];

export type ResumeProject = {
  name: string;
  category: string;
  technologies: string[];
  highlights: string[];
  projectSlug?: string;
};

export const resumeProjects: ResumeProject[] = [
  {
    name: "Omni Systems Internal",
    category: "Integrated Business Management System",
    technologies: ["Next.js", "TypeScript", "React", "Supabase"],
    highlights: [
      "Developed an integrated platform connecting projects, CRM, tasks, finance, and documentation.",
      "Implemented database-driven modules and business workflows.",
      "Developed authentication and role-based interfaces.",
      "Designed responsive dashboards and data visualisation components.",
      "Built reusable UI components.",
    ],
    projectSlug: "omni-systems-internal",
  },
  {
    name: "MyMedik Mobile Application",
    category: "Healthcare Education Mobile Platform",
    technologies: ["Flutter", "Dart", "Supabase"],
    highlights: [
      "Developed a cross-platform mobile application for healthcare education.",
      "Implemented role-based user interfaces.",
      "Integrated authentication, learning content, and assessments.",
      "Developed question banks, events, attendance, notifications, and administration modules.",
      "Worked on Android builds, testing, and distribution preparation.",
    ],
    projectSlug: "mymedik-mobile-application",
  },
  {
    name: "Octomations",
    category: "Modular Business Operating System",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    highlights: [
      "Developed a modular business management web application.",
      "Worked on financial processes and operational reporting.",
      "Designed responsive interfaces and reusable components.",
      "Integrated database functionality for structured business information.",
    ],
    projectSlug: "octomations",
  },
  {
    name: "Kentra",
    category: "AI-Powered Digital Workspace",
    technologies: ["Next.js", "TypeScript", "React", "Supabase"],
    highlights: [
      "Developed a digital workspace integrating AI-assisted productivity.",
      "Built workspace, project, file, and activity interfaces.",
      "Implemented database-backed features.",
      "Designed responsive productivity workflows.",
    ],
    projectSlug: "kentra",
  },
];

export const additionalProjects = [
  { name: "TrueSelf", projectSlug: "trueself" },
  { name: "Intrafluence", projectSlug: "intrafluence" },
  { name: "Omni Tools", projectSlug: "omni-tools-mobile-application" },
  { name: "Klinik Digital", projectSlug: "klinik-digital-website" },
  { name: "Alumni Engagement System", projectSlug: "alumni-engagement-system" },
];

export type ResumeEducation = {
  qualification: string;
  institution: string;
  location?: string;
  period: string;
  details: string[];
};

export const resumeEducation: ResumeEducation[] = [
  {
    qualification: "Bachelor of Information Technology (Information Systems) with Honours",
    institution: "Multimedia University (MMU)",
    location: "Cyberjaya, Malaysia",
    period: "2024 – Present",
    details: [
      "Information systems, software development, databases, and business information technology.",
      "Dean's List recognition.",
      "University entrepreneurship grant recipient.",
      "Student leadership and university programmes.",
    ],
  },
  {
    qualification: "Foundation in Medical Science",
    institution: "Management & Science University (MSU)",
    period: "2023 – 2024",
    details: [
      "Scholarship recipient.",
      "Dean's List recognition.",
      "Student leadership, university programmes, and extracurricular activities.",
    ],
  },
];

export const resumeAchievements = [
  { title: "Founder", organisation: "Omni Systems Technology", description: "Established a technology business focused on software products and digital solutions." },
  { title: "Deputy Chairman", organisation: "PEPIAS", description: "Involved in organisational leadership, programme planning, community initiatives, and team coordination." },
  { title: "University Event Chairman", organisation: "University programmes", description: "Led and coordinated university programmes, developer talks, and community initiatives." },
  { title: "Dean's List Recognition", organisation: "MMU & MSU", description: "Recognised for academic performance during university studies." },
  { title: "Entrepreneurship Grant Recipient", organisation: "Multimedia University", description: "Received university support for entrepreneurial initiatives." },
  { title: "Hafiz Al-Quran — 30 Juz", organisation: "Personal achievement", description: "Completed memorisation of the Quran." },
];

export const resumeAdditionalExpertise = [
  { title: "Digital Marketing", skills: ["SEO", "Google Ads", "Meta Ads", "TikTok Ads", "Content Marketing", "Marketing Analytics"] },
  { title: "UI/UX & Creative", skills: ["Figma", "Canva", "Graphic Design", "Video Editing", "Interface Design"] },
  { title: "Business & Leadership", skills: ["Entrepreneurship", "Project Management", "Team Leadership", "Public Speaking", "Business Development"] },
  { title: "Languages", skills: ["Malay — Native", "English — Intermediate", "Arabic — Beginner"] },
];
