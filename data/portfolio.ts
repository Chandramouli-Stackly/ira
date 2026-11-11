export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  industry: string;
  isPlaceholder: boolean;
  tagline: string;
  shortDescription: string;
  businessChallenge: string;
  proposedSolution: string;
  keyCapabilities: string[];
  techStack: string[];
  imagePlaceholderText: string;
  verifiedOutcome?: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "erp", label: "ERP Solutions" },
  { id: "hospitality", label: "Hospitality" },
  { id: "custom-software", label: "Custom Software" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "web-development", label: "Web Development" },
  { id: "digital-platforms", label: "Digital Platforms" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "hotel-management-suite",
    slug: "hotel-resort-management-suite",
    title: "Hotel & Resort Operations Management Suite",
    category: "hospitality",
    categoryLabel: "Hospitality",
    industry: "Hospitality & Accommodation",
    isPlaceholder: true,
    tagline: "Centralized reservation, front desk, and housekeeping operational engine",
    shortDescription:
      "A complete hospitality platform conceptualized to manage real-time room availability, digital guest folios, housekeeping room turnover, and daily revenue reporting.",
    businessChallenge:
      "Independent and boutique hotels frequently struggle with double bookings, slow front desk check-in queues during peak hours, and disconnected housekeeping updates between floors.",
    proposedSolution:
      "A responsive, web-based property management system featuring a visual room matrix, instant reservation synchronization, digital guest registration with ID capture, and live housekeeping boards.",
    keyCapabilities: [
      "Visual Room Availability Grid with color-coded status",
      "Express guest check-in / check-out with automated folio calculation",
      "Mobile-friendly housekeeping updates (Clean, Dirty, Under Inspection)",
      "Daily cashier shift reconciliation and revenue reporting",
      "Linen and consumable inventory tracking"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST APIs"],
    imagePlaceholderText: "Hotel Management Dashboard Interface",
    verifiedOutcome: "Project architectural blueprint and interactive prototype ready for deployment."
  },
  {
    id: "odoo-erp-wholesale-distribution",
    slug: "odoo-erp-wholesale-distribution",
    title: "Enterprise Odoo ERP for Wholesale & Distribution",
    category: "erp",
    categoryLabel: "ERP Solutions",
    industry: "Wholesale & Distribution",
    isPlaceholder: true,
    tagline: "End-to-end multi-warehouse inventory, purchasing, and sales automation",
    shortDescription:
      "Custom Odoo implementation framework tailored for high-volume distributors managing multiple storage hubs, tiered pricing rules, and credit control.",
    businessChallenge:
      "Wholesale distributors lose revenue to inventory stockouts, delayed quotation approvals, and manual invoice reconciliation across disjointed spreadsheets.",
    proposedSolution:
      "Configured Odoo Community / Enterprise ERP with custom Python modules for multi-tier pricing, customer credit limits, barcode scanning, and automated purchase triggers.",
    keyCapabilities: [
      "Multi-warehouse stock synchronization with inter-branch transfers",
      "Automated replenishment triggers based on dynamic reorder points",
      "Customer credit control and invoice overdue tracking",
      "GST-compliant accounting and automated bank reconciliation",
      "Executive gross-margin and inventory aging dashboards"
    ],
    techStack: ["Odoo 17", "Python", "PostgreSQL", "XML", "Docker"],
    imagePlaceholderText: "Odoo ERP Warehouse & Sales Workflow",
    verifiedOutcome: "Configurable implementation framework ready for corporate customization."
  },
  {
    id: "ai-document-extraction-agent",
    slug: "ai-document-extraction-agent",
    title: "Intelligent AI Document Processing & Invoice Extraction",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    industry: "Finance & Accounting",
    isPlaceholder: true,
    tagline: "Zero-touch document data parsing with human-in-the-loop verification",
    shortDescription:
      "Custom AI document pipeline that automatically extracts header details, line items, taxes, and vendor information from scanned PDF invoices and syncs with ERP systems.",
    businessChallenge:
      "Accounting departments spend dozens of manual hours every week transcribing PDF invoices and receipts into accounting software, risking costly transcription mistakes.",
    proposedSolution:
      "A privacy-first AI extraction service using LLM vision models and structured JSON schemas to parse inbound documents in seconds with high accuracy.",
    keyCapabilities: [
      "Automated PDF & image invoice ingestion via email or upload",
      "Structured extraction of vendor name, invoice date, line items, and totals",
      "Human-in-the-loop review interface for low-confidence fields",
      "Direct webhook synchronization with accounting systems",
      "Strict data privacy with zero model retention"
    ],
    techStack: ["Next.js", "Python FastApi", "OpenAI / Claude API", "PostgreSQL", "Tailwind CSS"],
    imagePlaceholderText: "AI Document Extraction & Review Workspace",
    verifiedOutcome: "Functional prototype pipeline with structured schema validation."
  },
  {
    id: "b2b-client-portal",
    slug: "b2b-client-portal",
    title: "Custom B2B Client Portal & Workflow Engine",
    category: "custom-software",
    categoryLabel: "Custom Software",
    industry: "Professional Services",
    isPlaceholder: true,
    tagline: "Secure client collaboration, project milestone tracking, and document sign-off",
    shortDescription:
      "Tailor-made web portal built for consulting and professional service firms to manage client engagements, task deliverables, file exchanges, and invoices.",
    businessChallenge:
      "Scattered email threads, lost attachments, and lack of client visibility into project progress lead to friction and prolonged project cycles.",
    proposedSolution:
      "A branded, role-based portal where clients can track deliverable milestones, upload sensitive documents, approve work orders, and review billing statements.",
    keyCapabilities: [
      "Role-based access control (Admin, Project Manager, Client Stakeholder)",
      "Milestone-based progress tracking and automated notifications",
      "Secure document repository with version history",
      "Integrated quotation approval and digital sign-off",
      "Real-time task comment feeds and status updates"
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Prisma"],
    imagePlaceholderText: "B2B Client Portal & Project Matrix",
    verifiedOutcome: "Modular portal architecture ready for client onboarding."
  },
  {
    id: "corporate-website-growth-platform",
    slug: "corporate-website-growth-platform",
    title: "Modern Corporate Digital Experience Platform",
    category: "web-development",
    categoryLabel: "Web Development",
    industry: "Technology & Professional Services",
    isPlaceholder: true,
    tagline: "High-performance Jamstack corporate website engineered for conversion",
    shortDescription:
      "Lightning-fast, mobile-responsive web platform built with Next.js, featuring technical SEO, dynamic enquiry routing, and modern light-theme corporate aesthetics.",
    businessChallenge:
      "Outdated corporate websites built on heavy, unmaintained CMS templates suffer from slow loading speeds, poor mobile responsiveness, and weak lead generation.",
    proposedSolution:
      "A modern Next.js Jamstack website delivering sub-second page loads, accessible UI components, structured schema markup, and streamlined multi-field enquiry workflows.",
    keyCapabilities: [
      "Sub-second Core Web Vitals performance across all devices",
      "Complete technical SEO architecture with OpenGraph and JSON-LD schema",
      "Multi-field project enquiry form with spam protection and email notifications",
      "Filterable service showcases, industry pages, and knowledge insights",
      "Accessible typography and responsive touch-friendly navigation"
    ],
    techStack: ["Next.js 14 App Router", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel"],
    imagePlaceholderText: "Modern Corporate Website Interface",
    verifiedOutcome: "Production-ready website framework built for IraSoft Technologies."
  },
  {
    id: "digital-marketing-attribution-system",
    slug: "digital-marketing-attribution-system",
    title: "Digital Marketing Campaign & Lead Capture System",
    category: "digital-platforms",
    categoryLabel: "Digital Platforms",
    industry: "B2B & Hospitality",
    isPlaceholder: true,
    tagline: "Full-funnel campaign tracking from Meta Ads to verified business enquiry",
    shortDescription:
      "Integrated campaign architecture connecting social media ad creatives, targeted landing pages, and automated lead notifications to maximize return on ad spend.",
    businessChallenge:
      "Businesses often burn marketing budgets running ads without knowing which creatives or audiences generate genuine paying customers.",
    proposedSolution:
      "A cohesive marketing workflow combining targeted ad campaigns, high-converting landing pages, UTM parameter tracking, and instant WhatsApp / email lead delivery.",
    keyCapabilities: [
      "Targeted Meta Ads campaign blueprints for business decision-makers",
      "Conversion-focused landing page layouts with clear calls-to-action",
      "UTM campaign attribution tracking in enquiry form submissions",
      "Instant email and WhatsApp notifications for sales follow-up",
      "Transparent conversion analytics and ROI reporting"
    ],
    techStack: ["Meta Business Suite", "Google Analytics 4", "Next.js", "Tailwind CSS"],
    imagePlaceholderText: "Campaign Attribution & Analytics Dashboard",
    verifiedOutcome: "Tested funnel framework designed for high-intent business acquisition."
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
