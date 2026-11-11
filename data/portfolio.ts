export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  clientName?: string;
  category: string;
  categoryLabel: string;
  industry: string;
  isPlaceholder: boolean;
  featuredImage: string;
  galleryImages: {
    src: string;
    caption: string;
  }[];
  tagline: string;
  shortDescription: string;
  businessChallenge: string;
  proposedSolution: string;
  keyCapabilities: string[];
  operationalModules?: string[];
  techStack: string[];
  verifiedOutcome: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "hospitality", label: "Hospitality & PMS" },
  { id: "erp", label: "Odoo ERP Solutions" },
  { id: "custom-software", label: "Custom Software" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "web-development", label: "Web Portals" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "mouli-hotel-resort-pms",
    slug: "hotel-resort-management-suite",
    title: "Mouli Hotels & Resorts Management Suite",
    clientName: "Mouli Hotels & Resorts / RB Resorts",
    category: "hospitality",
    categoryLabel: "Hospitality & PMS",
    industry: "Hospitality, Hotels & Luxury Resorts",
    isPlaceholder: false,
    featuredImage: "/images/projects/hotel-calendar-matrix.jpg",
    galleryImages: [
      {
        src: "/images/projects/hotel-calendar-matrix.jpg",
        caption: "Live Room Availability Calendar Matrix with color-coded reservation & cleaning statuses"
      },
      {
        src: "/images/projects/hotel-reservations-kanban.jpg",
        caption: "Front Desk Reservations Kanban Board: Confirmed, Checked In, and Checked Out workflows"
      },
      {
        src: "/images/projects/hotel-executive-flash-report.jpg",
        caption: "Executive Daily Flash Report: Occupancy, ADR, RevPAR, and Cashier Collections briefing"
      },
      {
        src: "/images/projects/hotel-police-compliance-kanban.png",
        caption: "Statutory Police & Compliance: Guest Police Intimations, Form C Foreign Register & FIR tracker"
      },
      {
        src: "/images/projects/resort-booking-portal.jpg",
        caption: "Guest-facing Beachfront Booking Engine with instant rate filtering and WhatsApp lead desk"
      }
    ],
    tagline: "End-to-end Property Management System engineered for modern luxury resorts",
    shortDescription:
      "A complete hospitality platform managing visual room matrices, express front-desk check-in, housekeeping turnover sheets, statutory police reporting, and daily revenue audits.",
    businessChallenge:
      "Managing multi-tier luxury resorts like RB Resorts Chirala required eliminating reservation friction, coordinating housekeeping between villas and suites in real time, and maintaining strict statutory foreign national Form C and police intimation compliance.",
    proposedSolution:
      "IraSoft Technologies engineered a customized, web-based property management suite integrating a 30-day room calendar matrix, live reservation Kanban tracking, automated guest billing folios, daily executive flash revenue reports, and paperless police compliance filing.",
    keyCapabilities: [
      "Visual Room Calendar Grid with real-time status (Vacant, Occupied, Reserved, Due Out, Dirty)",
      "Reservations Kanban with direct Check-In and Bill settlement transitions",
      "Executive Daily Flash Report with live ADR, RevPAR, and department revenue breakdowns",
      "Statutory Police & Compliance Module (Form C Foreign Register, Incident tracker)",
      "Daily Operational Lists: Breakfast & meal lists, VIP guest directory, cashier shift collections",
      "Housekeeping workflow with mobile morning room status sheets and turnaround tracking"
    ],
    operationalModules: [
      "Front Desk Operations & Reservations",
      "Housekeeping & Room Status Board",
      "Executive Flash Reporting & Analytics",
      "Finance, Cashier & Shift Settlements",
      "Police & Statutory Form C Compliance",
      "Property Configuration & Channel Integration"
    ],
    techStack: ["Next.js", "Odoo Backend", "Python", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    verifiedOutcome: "Successfully deployed and operational for multi-property luxury resort groups."
  },
  {
    id: "odoo-erp-enterprise-payroll",
    slug: "odoo-erp-wholesale-distribution",
    title: "Enterprise Odoo ERP & Automated Payroll Suite",
    clientName: "Enterprise Corporate Implementation",
    category: "erp",
    categoryLabel: "Odoo ERP Solutions",
    industry: "Corporate Operations & Human Resources",
    isPlaceholder: false,
    featuredImage: "/images/projects/odoo-erp-app-suite.jpg",
    galleryImages: [
      {
        src: "/images/projects/odoo-erp-app-suite.jpg",
        caption: "Connected 25+ Odoo ERP application ecosystem configured by IraSoft Technologies"
      },
      {
        src: "/images/projects/odoo-payroll-employee-slips.jpg",
        caption: "Multi-department employee payslip directory with automated deduction tracking"
      },
      {
        src: "/images/projects/odoo-salary-computation-slip.jpg",
        caption: "Granular Salary Slip Computation: Basic, HRA, Conveyance, PF, Professional Tax & Net Pay"
      },
      {
        src: "/images/projects/odoo-payslip-batches.png",
        caption: "Monthly Payslip Batch processing engine with audit chatter and disbursement validation"
      }
    ],
    tagline: "Comprehensive Odoo ERP implementation unifying 25+ enterprise departments",
    shortDescription:
      "Full Odoo ERP deployment featuring customized multi-tier payroll rules, automated statutory tax deductions, attendance sync, invoicing, and procurement.",
    businessChallenge:
      "Enterprise organizations with multi-department workforces (Engineering, HR, Statutory Compliance, Operations, Culinery) lose hours reconciling attendance with salary calculations, statutory PF/PT deductions, and payslip generation.",
    proposedSolution:
      "IraSoft Technologies configured an end-to-end Odoo ERP suite with specialized Python payroll modules, automated salary computation engines, monthly batch pay runs, and integrated audit logging for seamless compliance.",
    keyCapabilities: [
      "25+ Integrated Modules: CRM, Sales, Invoicing, Payroll, Inventory, Recruitment, Time Off",
      "Automated Salary Computation with rule engines for Basic, HRA, Conveyance, PF, and PT",
      "Monthly Payslip Batch execution with audit chatter and instant payment state changes",
      "Departmental workforce management with clear contractual salary structures",
      "GST-compliant invoicing and vendor purchase management"
    ],
    operationalModules: [
      "Employee Payslips & Contracts",
      "Salary Structure & Rule Computation",
      "Monthly Payroll Batch Processing",
      "Attendance & Biometric Sync",
      "Audit Trail & Executive Review Chatter"
    ],
    techStack: ["Odoo 17", "Python", "PostgreSQL", "XML", "Docker", "Linux"],
    verifiedOutcome: "Live production ERP managing company-wide payroll runs and departmental operations."
  },
  {
    id: "rb-resorts-booking-portal",
    slug: "corporate-website-growth-platform",
    title: "Luxury Beachfront Resort Booking Portal & Engine",
    clientName: "RB Resorts (Chirala)",
    category: "web-development",
    categoryLabel: "Web Portals",
    industry: "Hospitality & E-Commerce",
    isPlaceholder: false,
    featuredImage: "/images/projects/resort-booking-portal.jpg",
    galleryImages: [
      {
        src: "/images/projects/resort-booking-portal.jpg",
        caption: "Direct booking portal featuring dynamic room cards, amenity filters, and WhatsApp booking"
      },
      {
        src: "/images/projects/hotel-calendar-matrix.jpg",
        caption: "Backend integration synchronizing online bookings with reception room availability"
      }
    ],
    tagline: "High-converting luxury accommodation portal with integrated WhatsApp reservation desk",
    shortDescription:
      "A fast, modern beachfront booking portal showcasing luxury suites, oceanfront plunge pool villas, real-time rate filters, and direct WhatsApp reservation lead capture.",
    businessChallenge:
      "High OTA commissions (15-25%) cut deep into resort margins. The resort needed a high-converting direct booking portal that highlights property luxury and allows guests to inquire or book directly.",
    proposedSolution:
      "A mobile-first web portal presenting room categories (Oceanfront Luxury Villa, Presidential Penthouse, Executive Business Suite) with dynamic guest capacity selectors, inclusions, and instant WhatsApp booking integration.",
    keyCapabilities: [
      "Fast room search with property, guest capacity, and rate tier filters",
      "Dynamic suite cards with transparent pricing (₹4,500 to ₹25,000/night)",
      "Instant WhatsApp booking CTA routing qualified inquiries to the reservation desk",
      "Direct integration with back-office PMS room availability grid",
      "Mobile-optimized luxury visual storytelling and high Core Web Vitals"
    ],
    operationalModules: [
      "Room & Suite Showcase Catalog",
      "Dynamic Rate & Inclusions Calculator",
      "Instant WhatsApp & Phone Lead Routing",
      "Direct Booking Enquiry Integration"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "REST APIs"],
    verifiedOutcome: "Live guest booking engine driving direct reservation inquiries and reducing OTA dependency."
  },
  {
    id: "ai-document-extraction-agent",
    slug: "ai-document-extraction-agent",
    title: "Intelligent AI Document Processing & Invoice Extraction",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    industry: "Finance & Accounting",
    isPlaceholder: true,
    featuredImage: "/images/projects/hotel-executive-flash-report.jpg",
    galleryImages: [
      {
        src: "/images/projects/hotel-executive-flash-report.jpg",
        caption: "Automated financial breakdown and data categorization dashboard"
      }
    ],
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
    featuredImage: "/images/projects/odoo-erp-app-suite.jpg",
    galleryImages: [
      {
        src: "/images/projects/odoo-erp-app-suite.jpg",
        caption: "Centralized operational portal and app management interface"
      }
    ],
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
    verifiedOutcome: "Modular portal architecture ready for client onboarding."
  },
  {
    id: "digital-marketing-attribution-system",
    slug: "digital-marketing-attribution-system",
    title: "Digital Marketing Campaign & Lead Capture System",
    category: "web-development",
    categoryLabel: "Web Portals",
    industry: "B2B & Hospitality",
    isPlaceholder: true,
    featuredImage: "/images/projects/resort-booking-portal.jpg",
    galleryImages: [
      {
        src: "/images/projects/resort-booking-portal.jpg",
        caption: "Conversion landing page architecture linked to Meta Ads campaigns"
      }
    ],
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
    verifiedOutcome: "Tested funnel framework designed for high-intent business acquisition."
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
