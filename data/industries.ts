export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  iconName: string;
  shortDescription: string;
  challenges: string[];
  solutions: string[];
  exampleUseCases: string[];
  relatedServices: {
    name: string;
    href: string;
  }[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "hospitality",
    slug: "hospitality",
    name: "Hospitality & Accommodation",
    tagline: "Connected guest experiences & efficient hotel operations",
    iconName: "Hotel",
    shortDescription:
      "Modern management software for hotels, resorts, boutique lodges, and serviced apartments to automate bookings, front desk workflows, housekeeping, and guest billing.",
    challenges: [
      "Double bookings and inaccurate room availability records between phone and walk-in reservations.",
      "Delays at reception check-in and check-out causing guest frustration in the lobby.",
      "Lack of coordination between front desk and housekeeping regarding room turnover.",
      "Uncontrolled inventory shrinkage across toiletries, linens, and dining ingredients."
    ],
    solutions: [
      "Centralized visual room matrix with instant reservation updates.",
      "Digital guest check-in with ID upload and automated folio billing.",
      "Housekeeping mobile status board for real-time room readiness.",
      "Integrated store inventory management with threshold reordering."
    ],
    exampleUseCases: [
      "A 40-room boutique resort managing multi-category room tiers, seasonal tariffs, and guest billing under one dashboard.",
      "A business hotel reducing front desk check-in time from 10 minutes to under 2 minutes per guest."
    ],
    relatedServices: [
      { name: "Hotel & Resort Management Software", href: "/services/hotel-management" },
      { name: "Website Development", href: "/services/web-development" },
      { name: "Custom Software Development", href: "/services/custom-software" }
    ]
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Production",
    tagline: "End-to-end operational control from raw material to finished goods",
    iconName: "Factory",
    shortDescription:
      "Odoo ERP and custom software solutions designed for manufacturers to track bills of materials (BOM), work orders, warehouse inventory, and production costs.",
    challenges: [
      "Inaccurate production cost calculations due to unmonitored material waste and scrap.",
      "Inventory blind spots leading to delayed production cycles and missing components.",
      "Disconnected machinery maintenance logs leading to unexpected equipment downtime.",
      "Difficulty tracking orders across multi-stage assembly lines."
    ],
    solutions: [
      "Automated multi-level Bill of Materials (BOM) and work center scheduling in Odoo ERP.",
      "Barcode-driven raw material tracking from purchase receipt to assembly.",
      "Automated replenishment triggers based on dynamic minimum stock thresholds.",
      "Real-time cost variance reporting comparing budgeted vs actual material usage."
    ],
    exampleUseCases: [
      "An industrial fabrication unit unifying job-card tracking, supplier purchase orders, and customer dispatch.",
      "A food packaging manufacturer automating batch tracking and expiry date monitoring."
    ],
    relatedServices: [
      { name: "Odoo ERP Development", href: "/services/odoo-erp" },
      { name: "Custom Software Development", href: "/services/custom-software" },
      { name: "AI & Automation", href: "/services/ai-automation" }
    ]
  },
  {
    id: "retail-distribution",
    slug: "retail-distribution",
    name: "Retail & Wholesale Distribution",
    tagline: "Unified inventory, multi-store billing & streamlined distribution",
    iconName: "Store",
    shortDescription:
      "Scalable inventory management, Point-of-Sale (POS) systems, and wholesale order management platforms that connect warehouses, stores, and accounts.",
    challenges: [
      "Stock mismatches between physical warehouses, distribution hubs, and retail outlets.",
      "Slow, manual quotation generation for bulk wholesale customers.",
      "Difficulty managing multi-tier pricing, bulk discounts, and credit limits.",
      "Delayed reconciliation of daily cash and digital payments."
    ],
    solutions: [
      "Multi-warehouse synchronization with automated inter-branch stock transfers.",
      "Custom wholesale order portals allowing B2B buyers to check pricing and submit bulk orders.",
      "Customer credit control rules preventing new orders if past dues exceed thresholds.",
      "Unified POS software with integrated barcode scanning and instant GST billing."
    ],
    exampleUseCases: [
      "A fast-moving consumer goods (FMCG) distributor managing 5 warehouses and 500+ retailer accounts with automated invoice generation.",
      "A multi-outlet retail business unifying daily sales audits and central purchasing."
    ],
    relatedServices: [
      { name: "Odoo ERP Development", href: "/services/odoo-erp" },
      { name: "Website Development", href: "/services/web-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" }
    ]
  },
  {
    id: "education-training",
    slug: "education-training",
    name: "Education & Training",
    tagline: "Digital learning platforms, student portals & administrative automation",
    iconName: "GraduationCap",
    shortDescription:
      "Modern web platforms, student information systems, and course management tools designed for schools, institutes, academies, and training organizations.",
    challenges: [
      "Manual admission paperwork, fee tracking, and delayed receipt dispatch.",
      "Disorganized student records, batch schedules, and attendance logs.",
      "Ineffective parent or student communication channels.",
      "Lack of digital test assessment and certification workflows."
    ],
    solutions: [
      "Automated online registration and fee collection with automated receipt generation.",
      "Role-based portals for students, instructors, and administrators.",
      "Integrated attendance tracking and batch timetable management.",
      "Digital certificate issuance and student performance analytics."
    ],
    exampleUseCases: [
      "A vocational training institute automating batch enrollment, course material access, and student feedback.",
      "A competitive exam academy providing online practice tests and progress reporting."
    ],
    relatedServices: [
      { name: "Custom Software Development", href: "/services/custom-software" },
      { name: "Website Development", href: "/services/web-development" },
      { name: "IT Support & Consulting", href: "/services/it-support" }
    ]
  },
  {
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Client portals, billable task tracking & workflow automation",
    iconName: "Briefcase",
    shortDescription:
      "Tailored operational platforms for consulting firms, legal practices, accounting offices, and creative agencies to track projects, deliverables, and billings.",
    challenges: [
      "Difficulty tracking billable hours and team utilization across multiple client accounts.",
      "Chaotic document exchanges and email threads leading to lost files and missed deadlines.",
      "Slow client onboarding and scattered invoice follow-ups.",
      "Lack of centralized project status visibility for senior partners."
    ],
    solutions: [
      "Custom client portals for secure document uploads, review comments, and sign-offs.",
      "Project milestone tracking tied directly to milestone invoicing.",
      "Automated email notifications for upcoming deadlines and pending client approvals.",
      "Executive dashboards showing revenue per client and team productivity."
    ],
    exampleUseCases: [
      "A corporate consultancy automating client intake questionnaires and proposal generation.",
      "An accounting firm establishing a secure client portal for tax document exchange."
    ],
    relatedServices: [
      { name: "Custom Software Development", href: "/services/custom-software" },
      { name: "AI & Automation", href: "/services/ai-automation" },
      { name: "Odoo ERP Development", href: "/services/odoo-erp" }
    ]
  },
  {
    id: "startups-smes",
    slug: "startups-smes",
    name: "Startups & Growing SMEs",
    tagline: "Agile digital products, automated workflows & scalable foundations",
    iconName: "Rocket",
    shortDescription:
      "Cost-effective software development, high-impact business websites, and intelligent automation designed to help ambitious companies scale without bloated headcount.",
    challenges: [
      "Limited technical bandwidth to build modern digital products quickly.",
      "Overspending on disconnected SaaS subscriptions that don't scale well.",
      "Need for established corporate credibility to win higher-value enterprise deals.",
      "Manual administrative tasks consuming founder and key staff focus."
    ],
    solutions: [
      "Rapid MVP development with robust, scalable Next.js and React architecture.",
      "Consolidation of operational tools into custom, lightweight platforms.",
      "High-converting corporate website engineered for credibility and search authority.",
      "AI automation agents handling lead qualification, document drafting, and customer routing."
    ],
    exampleUseCases: [
      "A high-growth logistics startup launching an interactive client booking portal.",
      "A regional B2B service provider upgrading their online presence to close enterprise contracts."
    ],
    relatedServices: [
      { name: "Website Development", href: "/services/web-development" },
      { name: "Custom Software Development", href: "/services/custom-software" },
      { name: "AI & Automation", href: "/services/ai-automation" }
    ]
  },
  {
    id: "enterprises",
    slug: "enterprises",
    name: "Enterprises & Organizations",
    tagline: "Robust integrations, secure architecture & custom digital platforms",
    iconName: "Building2",
    shortDescription:
      "Enterprise software engineering, legacy modernization, and system integration tailored to complex compliance and departmental hierarchy requirements.",
    challenges: [
      "Rigid legacy software that prevents modern workflow automation and customer integration.",
      "Strict data privacy, access control, and regulatory compliance standards.",
      "Siloed departmental information hindering cross-organization collaboration.",
      "High risk and complexity associated with migrating legacy database systems."
    ],
    solutions: [
      "Modular microservices and RESTful API bridges connecting legacy systems to modern web interfaces.",
      "Role-based access control (RBAC) with audit logs and encrypted database storage.",
      "Phased migration pathways ensuring zero operational downtime.",
      "Dedicated maintenance SLA and ongoing technical advisory."
    ],
    exampleUseCases: [
      "A multi-branch organization centralizing disparate branch databases into a unified executive reporting dashboard.",
      "An infrastructure provider integrating legacy ERP data with a modern field technician portal."
    ],
    relatedServices: [
      { name: "Custom Software Development", href: "/services/custom-software" },
      { name: "Odoo ERP Development", href: "/services/odoo-erp" },
      { name: "IT Support & Consulting", href: "/services/it-support" }
    ]
  }
];

