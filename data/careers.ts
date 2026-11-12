export interface JobOpening {
  id: string;
  title: string;
  department: "Engineering" | "ERP & Odoo" | "AI & Automation" | "Growth & Marketing";
  location: string;
  employmentType: "Full-Time" | "Part-Time" | "Internship" | "Contract";
  experience: string;
  isOpen: boolean;
  postedDate: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

export const CAREER_DEPARTMENTS = [
  "All",
  "Engineering",
  "ERP & Odoo",
  "AI & Automation",
  "Growth & Marketing",
] as const;

/**
 * Manage active IraSoft Technologies job openings here.
 * To post a new job, add an object below with `isOpen: true`.
 * To close a role without deleting it, set `isOpen: false`.
 */
export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "odoo-erp-developer",
    title: "Odoo ERP Developer (Python / XML)",
    department: "ERP & Odoo",
    location: "Remote / Hybrid (India)",
    employmentType: "Full-Time",
    experience: "1–4 Years",
    isOpen: true,
    postedDate: "November 2026",
    summary:
      "Design, customize, and deploy Odoo Community and Enterprise modules across inventory, accounting, HR/payroll, and hospitality workflows.",
    responsibilities: [
      "Develop custom Odoo Python models, OWL components, QWeb PDF reports, and XML views tailored to client operations.",
      "Integrate Odoo backends with external payment gateways, REST APIs, and modern Next.js client portals.",
      "Configure multi-warehouse inventory, automated accounting rules, and role-based access rights.",
      "Troubleshoot database performance, perform module upgrades, and support UAT deployments.",
    ],
    requirements: [
      "Hands-on experience developing custom Odoo modules (Odoo 15/16/17+).",
      "Strong proficiency in Python, PostgreSQL, XML, and QWeb reporting.",
      "Clear understanding of core ERP flows (Sales, Purchase, Inventory, Accounting, or HR).",
      "Ability to translate client business workflows into clean, maintainable technical specifications.",
    ],
    skills: ["Python", "Odoo ORM", "PostgreSQL", "XML / QWeb", "REST APIs"],
  },
  {
    id: "fullstack-nextjs-developer",
    title: "Full-Stack Next.js & TypeScript Developer",
    department: "Engineering",
    location: "Remote / Hybrid (India)",
    employmentType: "Full-Time",
    experience: "1–3 Years",
    isOpen: true,
    postedDate: "November 2026",
    summary:
      "Build high-performance web applications, business portals, booking engines, and corporate digital platforms using Next.js App Router, TypeScript, and Tailwind CSS.",
    responsibilities: [
      "Architect responsive, accessible UI interfaces using React, TypeScript, and Tailwind CSS.",
      "Build clean Next.js Route Handlers, form validation pipelines, and third-party API integrations.",
      "Optimize Core Web Vitals, technical SEO metadata, and cross-device layout responsiveness.",
      "Collaborate directly on custom client dashboards, resort booking portals, and internal management systems.",
    ],
    requirements: [
      "Solid practical experience with Next.js (App Router), React, TypeScript, and Tailwind CSS.",
      "Experience building REST APIs and working with relational databases (PostgreSQL / MySQL).",
      "Strong eye for clean layout spacing, mobile responsiveness, and user experience.",
      "Clean Git workflow habits and reliable written/verbal communication.",
    ],
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "ai-automation-engineer",
    title: "AI & Workflow Automation Engineer",
    department: "AI & Automation",
    location: "Remote / Hybrid (India)",
    employmentType: "Full-Time",
    experience: "1–3 Years",
    isOpen: true,
    postedDate: "November 2026",
    summary:
      "Engineer practical LLM integrations, intelligent document extraction pipelines, RAG knowledge systems, and business automation agents for real client workflows.",
    responsibilities: [
      "Build document parsing pipelines for invoices, contracts, and operational records using modern LLM APIs.",
      "Design Retrieval-Augmented Generation (RAG) workflows over private business knowledge bases.",
      "Connect automated task triggers across email, CRM, spreadsheets, and ERP webhooks.",
      "Implement strict accuracy guardrails, structured JSON outputs, and evaluation checks.",
    ],
    requirements: [
      "Experience working with Python or Node.js/TypeScript and foundation model APIs (OpenAI, Gemini, Anthropic).",
      "Familiarity with vector indexing, structured prompt engineering, and API integrations.",
      "Practical mindset focused on reliability, cost efficiency, and solving real business bottlenecks.",
    ],
    skills: ["Python / Node.js", "LLM APIs", "RAG Pipelines", "Document OCR", "Webhooks"],
  },
  {
    id: "digital-marketing-seo-specialist",
    title: "Digital Marketing & Meta Ads Specialist",
    department: "Growth & Marketing",
    location: "Remote / Hybrid (India)",
    employmentType: "Full-Time",
    experience: "1–3 Years",
    isOpen: true,
    postedDate: "November 2026",
    summary:
      "Plan and execute targeted Meta (Facebook & Instagram) ad campaigns, on-page SEO audits, and lead generation funnels for IraSoft clients across hospitality and B2B services.",
    responsibilities: [
      "Set up, manage, and optimize Meta Ads campaigns focused on qualified lead acquisition and direct bookings.",
      "Conduct keyword research, on-page SEO enhancements, and Google Business Profile optimization.",
      "Collaborate on social creative direction and landing page conversion improvements.",
      "Prepare clear, transparent monthly performance summaries covering CPL, CTR, and inbound leads.",
    ],
    requirements: [
      "Proven hands-on experience managing Meta Ads Manager, pixel/conversion tracking, and A/B tests.",
      "Strong grasp of technical and on-page SEO fundamentals and Google Analytics.",
      "Clear written communication and honest, data-first reporting mindset.",
    ],
    skills: ["Meta Ads", "Technical SEO", "Google Analytics", "Lead Funnels", "Content Strategy"],
  },
];

export function getOpenJobs(): JobOpening[] {
  return JOB_OPENINGS.filter((job) => job.isOpen);
}

