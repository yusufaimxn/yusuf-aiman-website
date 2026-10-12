import type { Project } from "@/data/portfolio";

export type CaseStudyFeature = {
  name: string;
  description: string;
  icon: string;
  scopeStatus?: "Documented scope" | "Planned" | "Requires verification";
  technicalNote?: string;
};

export type CaseStudyTechnology = {
  name: string;
  category: string;
  description: string;
};

export type ArchitectureNode = {
  name: string;
  description: string;
  icon: string;
};

export type ArchitectureSpec = {
  summary: string;
  nodes: ArchitectureNode[];
  note?: string;
};

export type EngineeringInsight = {
  title: string;
  challenge: string;
  approach: string;
  solution: string;
  learning: string;
  kind?: "Engineering insight" | "Engineering consideration";
};

export type ProjectGalleryItem = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
};

export type ProjectExternalLink = {
  label: string;
  href: string;
  kind: "Live website" | "Live demo" | "Repository" | "Related product";
};

export type ProjectCaseStudy = {
  heroSummary: string;
  year?: string;
  organisation?: string;
  role?: string;
  projectType?: string;
  overview: string[];
  background?: string[];
  problems?: Array<{ title: string; description: string; icon: string }>;
  objectives?: string[];
  solution?: string[];
  features?: CaseStudyFeature[];
  technologies?: CaseStudyTechnology[];
  architecture?: ArchitectureSpec;
  contributions?: string[];
  developmentApproach?: Array<{ step: string; title: string; description: string }>;
  engineeringInsights?: EngineeringInsight[];
  outcomes?: string[];
  gallery?: ProjectGalleryItem[];
  links?: ProjectExternalLink[];
};

const documentedScope = "Documented scope" as const;

export const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  "omni-systems-internal": {
    heroSummary: "An integrated business management platform designed to connect internal operations, project delivery, client relationships, and financial workflows.",
    year: "2026",
    organisation: "Omni Systems Technology",
    role: "Founder & Full-Stack Developer",
    projectType: "Internal business management platform",
    overview: [
      "Omni Systems Internal is an integrated business management platform developed to support the operational needs of Omni Systems Technology.",
      "The documented product direction brings project management, customer relationship management, task coordination, products, estimates, proposals, documentation, financial information, and team-related workflows into a centralised digital workspace.",
      "The project is relevant as an example of translating business operations into connected software modules rather than treating each workflow as a separate tool.",
    ],
    background: [
      "The platform was initiated around the practical need to organise a growing technology venture and its related product work. Business information becomes harder to maintain when projects, customer context, documents, estimates, and financial records are spread across disconnected tools.",
      "The system direction therefore focuses on creating a structured operational foundation for Omni Systems Technology. Its public case study describes the documented product scope without exposing private business records or internal implementation details.",
    ],
    problems: [
      { title: "Fragmented information", description: "Business information becomes difficult to manage when projects, clients, documents, and financial context live in disconnected places.", icon: "layers-3" },
      { title: "Disconnected workflows", description: "Projects, tasks, estimates, proposals, and customer relationships need links between them that separate tools may not provide.", icon: "workflow" },
      { title: "Limited operational visibility", description: "Without a shared workspace, tracking responsibilities, work status, and related business activity becomes more difficult.", icon: "scan-search" },
      { title: "Manual administration", description: "Repeated administrative work can increase operational complexity and make consistent documentation harder to maintain.", icon: "clipboard-list" },
    ],
    objectives: [
      "Centralise essential business operations.",
      "Connect projects, clients, tasks, products, and financial data.",
      "Improve visibility into ongoing work and responsibilities.",
      "Establish consistent project documentation and proposal workflows.",
      "Create a structured foundation for future automation and business growth.",
    ],
    solution: [
      "The solution is organised as a modular business workspace. Instead of presenting every activity as an isolated screen, the documented modules are intended to share relationships around projects, organisations, customers, products, documents, and financial workflows.",
      "The interface direction prioritises clear navigation and readable information structures because operational software needs to support repeated use. The architecture is described at a verified technology level; private implementation details and production access rules are intentionally not exposed.",
    ],
    features: [
      { name: "Dashboard", description: "Provides a central overview for business activities, projects, tasks, and operational information.", icon: "layout-dashboard", scopeStatus: documentedScope },
      { name: "Project management", description: "Organises projects and their related information, activities, and documentation.", icon: "folder-kanban", scopeStatus: documentedScope },
      { name: "Task management", description: "Supports task-oriented planning, assignment, organisation, and progress tracking.", icon: "list-checks", scopeStatus: documentedScope },
      { name: "Customer relationship management", description: "Maintains information about leads, clients, and related business activities.", icon: "contact-round", scopeStatus: documentedScope },
      { name: "Products", description: "Organises product and service information for connected business workflows.", icon: "package", scopeStatus: documentedScope },
      { name: "Estimates and pricing", description: "Supports structured estimates and pricing-related workflows.", icon: "calculator", scopeStatus: documentedScope },
      { name: "Proposals and documents", description: "Provides a home for business proposals and project documentation.", icon: "file-text", scopeStatus: documentedScope },
      { name: "Finance", description: "Provides financial information management and invoice-related workflows.", icon: "wallet-cards", scopeStatus: documentedScope },
      { name: "Team management", description: "Supports user and team-related management inside the operating workspace.", icon: "users-round", scopeStatus: documentedScope },
      { name: "Business divisions", description: "Creates a structured way to represent the different areas of business activity.", icon: "network", scopeStatus: documentedScope },
    ],
    technologies: [
      { name: "Next.js", category: "Frontend", description: "Web application framework for the platform interface and application structure." },
      { name: "React", category: "Frontend", description: "Component-based interface layer for modular operational screens." },
      { name: "TypeScript", category: "Frontend", description: "Typed application development for clearer boundaries across product modules." },
      { name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling for a consistent internal product interface." },
      { name: "Supabase", category: "Backend", description: "Backend and data platform included in the documented project stack." },
      { name: "PostgreSQL", category: "Database", description: "Relational database layer documented for structured business data." },
      { name: "Vercel", category: "Deployment", description: "Deployment platform documented for the web application direction." },
    ],
    architecture: {
      summary: "The verified project context describes a Next.js and React application using TypeScript and Tailwind CSS, connected to Supabase and PostgreSQL, with Vercel documented as the deployment platform.",
      nodes: [
        { name: "Next.js + React", description: "Web application and interface layer.", icon: "panels-top-left" },
        { name: "Supabase", description: "Backend services and application data access.", icon: "database-zap" },
        { name: "PostgreSQL", description: "Relational store for connected business records.", icon: "table-2" },
        { name: "Vercel", description: "Documented deployment platform for the web application.", icon: "cloud-cog" },
      ],
      note: "Authentication rules, storage configuration, and private integrations are not described publicly and are intentionally not inferred here.",
    },
    contributions: [
      "Defined system requirements around the documented operational workflows.",
      "Planned product structure and relationships between business modules.",
      "Worked on the interface direction and reusable application experience.",
      "Developed the frontend and integrated the documented backend and data direction.",
      "Translated business operations into a database-driven software product foundation.",
    ],
    developmentApproach: [
      { step: "01", title: "Understand the operation", description: "Map the business activities, records, and relationships that need to live together." },
      { step: "02", title: "Structure the product", description: "Break the operational scope into modules with clear boundaries and connected context." },
      { step: "03", title: "Build the interface", description: "Develop reusable screens and interactions that keep repeated operational work readable." },
      { step: "04", title: "Refine the foundation", description: "Iterate on workflows, information structure, and the documented database-backed direction." },
    ],
    engineeringInsights: [
      { title: "Connected records need clear boundaries", challenge: "Business modules such as projects, customers, documents, estimates, and finance are useful together only when their relationships remain understandable.", approach: "The documented product scope was considered as a set of related operational records rather than unrelated screens.", solution: "A modular workspace direction keeps each workflow distinct while preserving the context needed to move between them.", learning: "Good business software depends as much on information architecture and relationship design as on individual features.", kind: "Engineering consideration" },
    ],
    outcomes: [
      "A developed internal business management platform designed around Omni Systems Technology's documented operational requirements.",
      "A structured product foundation connecting business workflows that would otherwise be managed separately.",
      "Private implementation and operational data remain intentionally undisclosed.",
    ],
    gallery: [{ title: "Verified screenshots will be added later", description: "The case study is ready for real dashboard and workflow screenshots once approved assets are available." }],
  },
  "mymedik-mobile-application": {
    heroSummary: "A mobile application developed to support healthcare-related education and professional engagement within the MyMedik ecosystem.",
    year: "2026",
    organisation: "MyMedik ecosystem",
    role: "Mobile Application Developer",
    projectType: "Healthcare education mobile application",
    overview: [
      "The MyMedik Mobile Application brings together learning resources, question banks, professional events, notifications, and user-related functionality in a mobile product direction.",
      "It is designed for healthcare education and professional engagement, with documented scope covering both learner-facing flows and administration-related functionality.",
    ],
    background: [
      "Healthcare education activities can become fragmented across different channels. The project was initiated to explore a more accessible mobile experience for learning, events, attendance, and professional development activities within the MyMedik ecosystem.",
      "The available project information documents the scope and technology direction. Individual production-readiness claims are intentionally left for later verification.",
    ],
    problems: [
      { title: "Fragmented learning resources", description: "Educational resources and question-based learning can be harder to access when they are separated across channels.", icon: "book-open" },
      { title: "Disconnected professional activity", description: "Events, attendance, notifications, and continuing development need a shared mobile context.", icon: "calendar-range" },
      { title: "Different user needs", description: "Learners, professionals, and administrators require different flows inside the same product ecosystem.", icon: "users-round" },
    ],
    objectives: [
      "Provide an accessible mobile learning experience.",
      "Organise educational resources and question-based activities.",
      "Support professional events, QR attendance, and CPD-related workflows.",
      "Create role-aware user flows for the documented product scope.",
    ],
    solution: [
      "The documented solution brings learning, events, attendance, notifications, profiles, and administration into one mobile application direction.",
      "The user experience is organised around task-specific flows so that a learner can focus on education while other roles can access their relevant product areas. The scope is documented; feature-by-feature production status still requires verification.",
    ],
    features: [
      { name: "Authentication", description: "Documented account access and user entry flow for the mobile application.", icon: "log-in", scopeStatus: "Requires verification" },
      { name: "Role-based experiences", description: "Documented scope for different user experiences within the ecosystem.", icon: "contact-round", scopeStatus: "Requires verification" },
      { name: "Question bank", description: "Organises question-based learning activities for healthcare education.", icon: "clipboard-check", scopeStatus: "Requires verification" },
      { name: "Learning resources", description: "Provides a mobile home for educational content and reference materials.", icon: "library", scopeStatus: "Requires verification" },
      { name: "Events and QR attendance", description: "Supports documented event participation and QR-based attendance scope.", icon: "qr-code", scopeStatus: "Requires verification" },
      { name: "CPD hub", description: "Creates a dedicated direction for continuing professional development activities.", icon: "graduation-cap", scopeStatus: "Requires verification" },
      { name: "Notifications and profiles", description: "Keeps users informed and gives them a place to manage their application identity.", icon: "bell-ring", scopeStatus: "Requires verification" },
      { name: "Admin management", description: "Documents administration-related functionality within the wider application scope.", icon: "shield-check", scopeStatus: "Requires verification" },
    ],
    technologies: [
      { name: "Flutter", category: "Mobile", description: "Cross-platform framework for the mobile application experience." },
      { name: "Dart", category: "Mobile", description: "Application language used with the Flutter development direction." },
      { name: "Supabase", category: "Backend", description: "Backend platform included in the documented project stack." },
      { name: "PostgreSQL", category: "Database", description: "Relational data technology included in the documented stack." },
    ],
    architecture: {
      summary: "The documented technology context describes a Flutter and Dart mobile client connected to Supabase and PostgreSQL. Authentication and individual feature readiness remain areas for verification.",
      nodes: [
        { name: "Flutter + Dart", description: "Cross-platform mobile application layer.", icon: "smartphone" },
        { name: "Supabase", description: "Documented backend and application data service.", icon: "database-zap" },
        { name: "PostgreSQL", description: "Documented relational data layer.", icon: "table-2" },
      ],
      note: "The exact authentication configuration, notification service, and production infrastructure are not published in the available project record.",
    },
    contributions: [
      "Developed mobile interfaces and documented user flows.",
      "Worked on backend integration and the application data direction.",
      "Implemented or explored authentication-related flows within the documented scope.",
      "Translated healthcare education requirements into a cross-platform mobile experience.",
    ],
    developmentApproach: [
      { step: "01", title: "Map user roles", description: "Separate learner, professional, and administration needs before shaping the mobile flows." },
      { step: "02", title: "Organise learning", description: "Group resources, question banks, events, and CPD-related experiences around clear tasks." },
      { step: "03", title: "Build mobile flows", description: "Develop cross-platform interfaces with the documented Flutter and Dart direction." },
      { step: "04", title: "Verify readiness", description: "Treat production status of individual features as an explicit validation step." },
    ],
    engineeringInsights: [
      { title: "Role-aware mobile experiences", challenge: "A healthcare education ecosystem can serve users with different responsibilities and priorities.", approach: "The documented scope was separated into learning, professional engagement, profile, and administration-related flows.", solution: "A role-aware product direction creates clearer entry points without presenting every capability to every user at once.", learning: "Mobile product clarity often comes from reducing the number of decisions a user has to make per screen.", kind: "Engineering consideration" },
    ],
    outcomes: [
      "A developed mobile application supporting the documented MyMedik healthcare education ecosystem.",
      "A cross-platform product foundation for learning resources, events, question banks, and professional engagement.",
      "Production readiness of individual features remains subject to verification.",
    ],
    gallery: [{ title: "Mobile screenshots will be added later", description: "Real device screenshots can be added without changing the case study layout once approved assets are available." }],
  },
  "octomations": {
    heroSummary: "A modular business operating system initiative designed to bring essential business operations into a connected digital platform.",
    year: "2026",
    organisation: "Omni Systems Technology",
    role: "Founder & Product Developer",
    projectType: "SaaS platform / business operating system",
    overview: [
      "Octomations explores a modular platform for everyday business operations, combining practical workflows into a connected digital product direction.",
      "The documented scope includes POS, inventory, appointments, queue management, finance, reports, and organisation-based workspaces. These are documented product areas, not a claim that every module is production-ready.",
    ],
    background: [
      "Small businesses often rely on separate tools for everyday operational activities. Octomations was initiated to explore whether common business workflows could be represented within a more connected platform.",
      "The project sits at the intersection of product planning and software architecture: it tests how modular business capabilities can share an organisation context without becoming an indistinct collection of screens.",
    ],
    problems: [
      { title: "Disconnected operations", description: "Small businesses can need several tools to manage sales, inventory, appointments, queues, and finance.", icon: "blocks" },
      { title: "Repeated context switching", description: "Moving between operational tools makes it harder to keep business information and responsibilities connected.", icon: "arrow-left-right" },
      { title: "Unclear organisation boundaries", description: "A multi-organisation product needs a clear way to separate workspaces and operational data.", icon: "building-2" },
    ],
    objectives: [
      "Explore a modular platform for connected business management.",
      "Group operational workflows around organisation-based workspaces.",
      "Create a foundation for automation and future product expansion.",
      "Keep each business module understandable as the product grows.",
    ],
    solution: [
      "The solution direction is a modular SaaS product with organisation-based workspaces as the shared context. Each documented area can represent a focused operational workflow while still belonging to the same business environment.",
      "The product is described conservatively: the case study records the documented scope and architecture direction without implying that every planned module has reached production readiness.",
    ],
    features: [
      { name: "POS", description: "Documented point-of-sale direction for everyday transaction workflows.", icon: "shopping-bag", scopeStatus: "Requires verification" },
      { name: "Inventory", description: "Documented product and stock management direction.", icon: "boxes", scopeStatus: "Requires verification" },
      { name: "Appointments", description: "Documented scheduling workflow for service-based operations.", icon: "calendar-clock", scopeStatus: "Requires verification" },
      { name: "Queue management", description: "Documented direction for organising customer queues and service flow.", icon: "list-ordered", scopeStatus: "Requires verification" },
      { name: "Finance", description: "Documented finance-related operational area.", icon: "wallet-cards", scopeStatus: "Requires verification" },
      { name: "Reports", description: "Documented reporting direction for operational visibility.", icon: "chart-no-axes-combined", scopeStatus: "Requires verification" },
      { name: "Organisation workspaces", description: "Creates the documented boundary for business-specific operational data.", icon: "building-2", scopeStatus: documentedScope },
    ],
    technologies: [
      { name: "Next.js", category: "Frontend", description: "Web application framework for the SaaS product direction." },
      { name: "React", category: "Frontend", description: "Component model for modular business workflows." },
      { name: "TypeScript", category: "Frontend", description: "Typed development direction for clearer product boundaries." },
      { name: "Tailwind CSS", category: "Frontend", description: "Consistent interface styling for the product surface." },
      { name: "Supabase", category: "Backend", description: "Backend and data platform documented for the project." },
      { name: "PostgreSQL", category: "Database", description: "Relational database technology documented for structured data." },
      { name: "Vercel", category: "Deployment", description: "Deployment platform documented for the web application direction." },
    ],
    architecture: {
      summary: "The documented web stack connects a Next.js and React application with TypeScript and Tailwind CSS to Supabase and PostgreSQL, with Vercel listed as the deployment platform.",
      nodes: [
        { name: "Next.js + React", description: "Web application layer for modular business workflows.", icon: "panels-top-left" },
        { name: "Supabase", description: "Backend and data access layer.", icon: "database-zap" },
        { name: "PostgreSQL", description: "Relational store for organisation-scoped data.", icon: "table-2" },
        { name: "Vercel", description: "Documented deployment platform.", icon: "cloud-cog" },
      ],
      note: "Automation providers, payment integrations, and individual module infrastructure are not described in the verified project context.",
    },
    contributions: [
      "Shaped the product concept around connected business operations.",
      "Planned the application architecture and modular product direction.",
      "Developed web application interfaces and core product structures.",
      "Worked on the database-backed direction for organisation-based workflows.",
    ],
    developmentApproach: [
      { step: "01", title: "Define the operating model", description: "Identify the business activities and the shared organisation context behind them." },
      { step: "02", title: "Separate modules", description: "Give POS, inventory, scheduling, finance, and reporting their own understandable boundaries." },
      { step: "03", title: "Connect the workspace", description: "Use the organisation context to keep related operational areas connected." },
      { step: "04", title: "Validate the scope", description: "Keep planned and production-ready capabilities distinct as the product direction evolves." },
    ],
    engineeringInsights: [
      { title: "Modularity without fragmentation", challenge: "A business operating system can become difficult to use if every capability is built as an unrelated product.", approach: "The product direction starts from organisation-based workspaces and treats each operational area as a module within that context.", solution: "Shared product structure provides a consistent frame while individual workflows remain focused.", learning: "Modular architecture is useful when boundaries clarify the product rather than simply multiplying screens.", kind: "Engineering consideration" },
    ],
    outcomes: [
      "A developed SaaS product foundation for integrated business management.",
      "A documented modular direction covering operational areas across sales, stock, service, finance, and reporting.",
      "Production readiness of planned modules is not inferred from the documented scope.",
    ],
    gallery: [{ title: "Product screenshots will be added later", description: "The visual container is reserved for verified product images and workflow captures." }],
  },
  "kentra": {
    heroSummary: "An AI-powered digital workspace designed to bring productivity and project organisation into a unified application.",
    year: "2026",
    role: "Product Developer",
    projectType: "Progressive web application / AI workspace",
    overview: [
      "Kentra is a digital workspace direction for organising projects, files, activities, calendars, messages, notifications, and user profiles in one application.",
      "The project is relevant as an exploration of how a productivity product can combine structured work management with AI-related experiences while keeping the workspace understandable.",
    ],
    background: [
      "Digital work frequently involves fragmented information across project, file, calendar, and communication tools. Kentra was developed to explore a more connected workspace model.",
      "The application format is documented as a progressive web application, making the product direction accessible through a web-based experience while retaining a product-like interaction model.",
    ],
    problems: [
      { title: "Fragmented project context", description: "Project information, files, activities, and communication can become separated across different tools.", icon: "files" },
      { title: "Scattered daily work", description: "Calendars, notifications, and messages are harder to manage when they are not connected to the work they describe.", icon: "calendar-sync" },
      { title: "Unclear workspace structure", description: "A productivity product needs understandable boundaries for workspaces, projects, and user activity.", icon: "layout-panel-top" },
    ],
    objectives: [
      "Create a connected workspace for organising digital work.",
      "Bring projects, files, activities, and schedules into a unified product direction.",
      "Explore AI-related experiences within a structured application.",
      "Deliver a responsive progressive web application format.",
    ],
    solution: [
      "Kentra approaches the problem as a workspace product rather than a collection of isolated utilities. The documented scope groups projects, files, activities, calendars, messages, notifications, and profiles around the workspace model.",
      "The AI aspect is kept intentionally broad because the available project record does not specify the underlying integrations or models. The case study therefore describes the product direction without inventing AI capabilities.",
    ],
    features: [
      { name: "AI workspace", description: "Provides the documented product direction for AI-related productivity experiences.", icon: "sparkles", scopeStatus: "Requires verification" },
      { name: "Workspaces and projects", description: "Organises digital work around structured workspace and project contexts.", icon: "layout-dashboard", scopeStatus: documentedScope },
      { name: "Files and activities", description: "Brings project files and work activity into the documented workspace scope.", icon: "files", scopeStatus: documentedScope },
      { name: "Calendar and messages", description: "Documents scheduling and communication-related product areas.", icon: "calendar-days", scopeStatus: "Requires verification" },
      { name: "Notifications", description: "Provides a documented direction for keeping users aware of relevant activity.", icon: "bell-ring", scopeStatus: "Requires verification" },
      { name: "User profiles", description: "Represents the user identity layer within the application scope.", icon: "circle-user-round", scopeStatus: documentedScope },
    ],
    technologies: [
      { name: "Next.js", category: "Frontend", description: "Web application framework for the progressive web application direction." },
      { name: "React", category: "Frontend", description: "Component-based interface layer for the workspace experience." },
      { name: "TypeScript", category: "Frontend", description: "Typed application development for structured product features." },
      { name: "Tailwind CSS", category: "Frontend", description: "Interface styling direction for responsive workspace screens." },
      { name: "Supabase", category: "Backend", description: "Backend platform documented in the project technology context." },
      { name: "Vercel", category: "Deployment", description: "Deployment platform documented for the web product direction." },
    ],
    architecture: {
      summary: "The documented stack describes a Next.js and React progressive web application using TypeScript and Tailwind CSS, with Supabase and Vercel included in the project context.",
      nodes: [
        { name: "Next.js + React PWA", description: "Responsive workspace application layer.", icon: "panels-top-left" },
        { name: "Supabase", description: "Documented backend and data platform.", icon: "database-zap" },
        { name: "Vercel", description: "Documented web deployment platform.", icon: "cloud-cog" },
      ],
      note: "The AI provider, model integrations, storage configuration, and messaging infrastructure are not specified in the available project information.",
    },
    contributions: [
      "Defined the product concept and application structure.",
      "Planned the workspace-oriented information architecture.",
      "Developed interfaces for the documented web application direction.",
      "Worked on the progressive web application experience and connected product surfaces.",
    ],
    developmentApproach: [
      { step: "01", title: "Frame the workspace", description: "Start with the relationships between users, workspaces, projects, files, and activity." },
      { step: "02", title: "Organise the product", description: "Give daily work a clear home across project, calendar, message, and notification areas." },
      { step: "03", title: "Build the PWA", description: "Shape responsive interfaces around a web application that feels coherent across devices." },
      { step: "04", title: "Keep AI grounded", description: "Describe AI as a product direction until the underlying integrations are verified." },
    ],
    engineeringInsights: [
      { title: "AI needs a usable workspace around it", challenge: "AI-related experiences are difficult to use when the surrounding work context is unclear.", approach: "The documented product scope places AI-related experiences inside a broader workspace model with projects, files, activities, and profiles.", solution: "The workspace becomes the organising layer while the exact AI implementation remains explicitly unclaimed until verified.", learning: "Product structure and user context are as important as the intelligence feature itself.", kind: "Engineering consideration" },
    ],
    outcomes: [
      "A developed digital workspace application exploring connected productivity experiences.",
      "A progressive web application direction covering workspaces, projects, files, activities, and user-related areas.",
      "AI implementation details and individual feature readiness remain subject to verification.",
    ],
    gallery: [{ title: "Workspace screenshots will be added later", description: "Real product images can replace this placeholder after the relevant assets are approved." }],
  },
  "trueself": {
    heroSummary: "An interactive digital assessment platform focused on personality, identity, behaviour, and personal development.",
    year: "2026",
    role: "Web Application Developer",
    projectType: "Personality assessment platform",
    overview: [
      "TrueSelf is a web platform direction for structured self-discovery through interactive assessments and clear results experiences.",
      "The documented assessment categories cover personality, identity, relationships, career fit, motivation, growth, stress and emotions, mind, and life.",
    ],
    background: [
      "Digital assessments can become difficult to navigate when question flows, category choices, and results are not presented as one coherent experience. TrueSelf was developed around the need for a more structured assessment journey.",
      "The available project record focuses on product scope and user experience. Its technology stack is intentionally not listed here until it is verified from project documentation.",
    ],
    problems: [
      { title: "Complex assessment journeys", description: "Users need clear progress and navigation when moving through multiple question-based experiences.", icon: "route" },
      { title: "Scattered self-discovery topics", description: "Different assessment areas are easier to explore when they are organised into a coherent catalogue.", icon: "library-big" },
      { title: "Results need clarity", description: "An assessment is less useful when the result experience is difficult to understand or revisit.", icon: "notebook-tabs" },
    ],
    objectives: [
      "Organise a catalogue of assessment experiences.",
      "Provide interactive questionnaires with clear navigation.",
      "Present results in a readable, structured experience.",
      "Support the documented premium access model without assuming its implementation details.",
    ],
    solution: [
      "The product structure is organised around an assessment catalogue, interactive questionnaires, navigation, and results. The category model gives users a clearer way to choose the area they want to explore.",
      "The responsive interface direction is intended to keep the assessment journey comfortable across screen sizes. Details of scoring, access control, and underlying implementation are not claimed without verification.",
    ],
    features: [
      { name: "Assessment catalogue", description: "Organises the documented categories into a discoverable starting point.", icon: "library-big", scopeStatus: documentedScope },
      { name: "Interactive questionnaires", description: "Provides the documented question-based assessment experience.", icon: "list-checks", scopeStatus: documentedScope },
      { name: "Assessment navigation", description: "Supports movement through a structured assessment journey.", icon: "route", scopeStatus: documentedScope },
      { name: "Results experience", description: "Presents the documented direction for reviewing assessment outcomes.", icon: "notebook-tabs", scopeStatus: documentedScope },
      { name: "Premium access model", description: "Documents a premium access direction without claiming payment implementation details.", icon: "badge-dollar-sign", scopeStatus: "Requires verification" },
      { name: "Responsive interfaces", description: "Keeps the assessment experience adaptable across screen sizes.", icon: "panels-top-left", scopeStatus: documentedScope },
    ],
    contributions: [
      "Structured the product and assessment experience.",
      "Worked on questionnaire navigation and the results direction.",
      "Designed and developed the web application interfaces.",
      "Translated a broad self-discovery concept into an understandable product flow.",
    ],
    developmentApproach: [
      { step: "01", title: "Organise the catalogue", description: "Group the documented assessment categories into a clearer discovery experience." },
      { step: "02", title: "Shape the question flow", description: "Keep questionnaire navigation understandable across a longer interactive journey." },
      { step: "03", title: "Design the results", description: "Treat the result experience as part of the product, not merely the end of a form." },
      { step: "04", title: "Verify the access model", description: "Keep premium and scoring implementation details separate until project evidence is available." },
    ],
    engineeringInsights: [
      { title: "Long-form interaction needs orientation", challenge: "Users can lose confidence in an assessment when they are unsure where they are or what happens next.", approach: "The documented scope separates catalogue, questionnaire navigation, and results into distinct product areas.", solution: "A staged assessment journey gives each part a clear responsibility while preserving a continuous experience.", learning: "Progressive disclosure and clear orientation are important for any product built around sustained user input.", kind: "Engineering consideration" },
    ],
    outcomes: [
      "A developed web platform exploring interactive self-discovery and assessment experiences.",
      "A documented product structure covering catalogue, questionnaires, navigation, results, access, and responsive interfaces.",
      "The technology stack and production status of individual features require verification before publication as technical claims.",
    ],
    gallery: [{ title: "Assessment screenshots will be added later", description: "Real catalogue, questionnaire, and results images can be added when approved assets are ready." }],
  },
  "intrafluence": {
    heroSummary: "A digital platform project exploring the relationship between online identity, content, and professional networking.",
    year: "2026",
    role: "Product Developer",
    projectType: "Digital platform / networking product concept",
    overview: [
      "Intrafluence explores how a digital platform can connect online identity, content, and professional networking in a structured web experience.",
      "The documented scope includes a public website, web application, digital identity direction, networking-related product concept, and interface development.",
    ],
    background: [
      "Online presence increasingly spans public content, personal identity, and professional connections. Intrafluence was developed to explore how those ideas could be brought into a coherent digital platform direction.",
      "The available record is intentionally concise. It does not verify messaging, monetisation, or a specific technical stack, so those details are omitted from this case study.",
    ],
    problems: [
      { title: "Disconnected digital identity", description: "Professional identity and public content can be spread across different online experiences.", icon: "fingerprint" },
      { title: "Unclear platform purpose", description: "A networking product needs a clear relationship between its public website and application experience.", icon: "compass" },
      { title: "Unverified feature assumptions", description: "Networking concepts can easily be over-described without confirming the actual product scope.", icon: "shield-question" },
    ],
    objectives: [
      "Develop a structured web application focused on digital presence and connections.",
      "Explore the relationship between public content and product identity.",
      "Create a clear interface direction for a networking-related concept.",
      "Keep undocumented messaging and monetisation features out of the public case study.",
    ],
    solution: [
      "The solution direction combines a public website and a web application concept around digital identity and professional connections.",
      "Because the verified project record is intentionally limited, the case study focuses on the product framing and interface contribution rather than claiming specific networking mechanics.",
    ],
    features: [
      { name: "Public website", description: "Provides the documented public-facing presence for the platform direction.", icon: "globe-2", scopeStatus: documentedScope },
      { name: "Web application", description: "Documents the application layer for the digital platform concept.", icon: "panels-top-left", scopeStatus: documentedScope },
      { name: "Digital identity", description: "Explores how a person's online identity can be represented in the product direction.", icon: "fingerprint", scopeStatus: documentedScope },
      { name: "Networking concept", description: "Documents a professional connection direction without claiming specific messaging features.", icon: "network", scopeStatus: "Requires verification" },
      { name: "Interface development", description: "Covers the documented contribution around product structure and web interfaces.", icon: "blocks", scopeStatus: documentedScope },
    ],
    contributions: [
      "Shaped the product concept and application structure.",
      "Worked on the relationship between the public website and application direction.",
      "Developed interfaces for the documented digital identity and networking concept.",
    ],
    developmentApproach: [
      { step: "01", title: "Define the identity layer", description: "Clarify what the platform is trying to represent about a person or professional presence." },
      { step: "02", title: "Separate public and app surfaces", description: "Give the public website and web application clear but connected responsibilities." },
      { step: "03", title: "Shape the interface", description: "Develop an interface direction that communicates the product concept without overclaiming features." },
      { step: "04", title: "Document verified scope", description: "Keep messaging, monetisation, and other unverified mechanics out of the published case study." },
    ],
    engineeringInsights: [
      { title: "Product clarity before feature expansion", challenge: "A networking concept can become vague when identity, content, and connections are treated as separate promises.", approach: "The documented scope was kept focused on the relationship between the public website, application, and digital identity direction.", solution: "The case study separates confirmed product areas from features that still require verification.", learning: "Clear boundaries protect both the product experience and the credibility of its technical documentation.", kind: "Engineering consideration" },
    ],
    outcomes: [
      "A developed website and web application exploring digital networking experiences.",
      "A documented product direction connecting public presence, digital identity, and a networking-related concept.",
      "Messaging, monetisation, and technology stack details remain intentionally undisclosed until verified.",
    ],
    gallery: [{ title: "Platform screenshots will be added later", description: "Approved public website and application visuals can be added to this gallery without changing the page structure." }],
  },
};

export function getProjectCaseStudy(project: Project): ProjectCaseStudy {
  const caseStudy = projectCaseStudies[project.slug];
  if (caseStudy) return caseStudy;

  return {
    heroSummary: project.description,
    projectType: project.category,
    overview: [project.summary, "Additional implementation details are not publicly documented for this project yet."],
    background: ["This project is part of Yusuf Aiman's documented portfolio inventory. The available public record is intentionally concise until more project information is verified."],
    objectives: ["Document the verified purpose and scope of the project.", "Preserve a clear, useful case study as more information becomes available."],
    solution: ["The available project record confirms the project direction described above. Unsupported implementation details are intentionally omitted from this page."],
    technologies: project.technologies.map((technology) => ({ name: technology, category: "Portfolio record", description: "Listed in the portfolio record; project-specific implementation details are not publicly documented." })),
    outcomes: [project.summary, "Further outcomes will be added when they are verified and approved for publication."],
    gallery: [{ title: "Verified project assets will be added later", description: "The gallery is ready for real screenshots or approved visuals when they become available." }],
  };
}
