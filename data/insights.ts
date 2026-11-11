export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  isDraft: boolean;
  statusBadge: string;
  publishedDate: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  tableOfContents: string[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
  relatedTopics: string[];
}

export const INSIGHT_CATEGORIES = [
  { id: "all", label: "All Insights" },
  { id: "odoo-erp", label: "Odoo ERP" },
  { id: "hotel-management", label: "Hotel Management" },
  { id: "custom-software", label: "Software Development" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "web-development", label: "Website Development" },
  { id: "digital-transformation", label: "Digital Transformation" },
];

export const ARTICLES: InsightArticle[] = [
  {
    id: "how-odoo-erp-helps-smbs",
    slug: "how-odoo-erp-helps-small-and-medium-businesses",
    title: "How Odoo ERP Helps Small and Medium Businesses Scale Efficiently",
    category: "odoo-erp",
    categoryLabel: "Odoo ERP",
    isDraft: false,
    statusBadge: "Guide",
    publishedDate: "November 2026",
    readingTime: "6 min read",
    author: {
      name: "IraSoft Technology Editorial",
      role: "Enterprise Systems Practice",
    },
    summary:
      "A practical breakdown of how growing businesses transition from fragmented spreadsheets to a unified Odoo ERP platform, reducing overhead and improving order-to-cash turnaround.",
    tableOfContents: [
      "The Hidden Cost of Disjointed Spreadsheets",
      "What Makes Odoo Different for Growing Businesses",
      "Core Modules That Deliver Immediate Impact",
      "Common ERP Implementation Pitfalls to Avoid",
      "How to Plan Your Odoo Migration"
    ],
    content: [
      {
        heading: "The Hidden Cost of Disjointed Spreadsheets",
        paragraphs: [
          "As small and medium businesses expand, their operational complexity grows exponentially. A sales rep creates an invoice in one format, the warehouse manager records inventory on an Excel sheet, and the accountant spends days at month-end reconciling disparate bank statements.",
          "This software fragmentation causes communication delays, stockouts, inaccurate inventory counts, and double data entry. In reality, growing businesses don't need complex, multimillion-dollar legacy enterprise platforms—they need a cohesive, modular operational backbone."
        ]
      },
      {
        heading: "What Makes Odoo Different for Growing Businesses",
        paragraphs: [
          "Odoo stands out because of its modular architecture. Rather than forcing you to adopt dozens of unneeded features on day one, you can start with the specific modules you need—such as Inventory, Sales, and Accounting—and seamlessly activate additional modules like CRM, Manufacturing, or HR as your business grows.",
          "Because all Odoo modules share a single underlying database, an order approved by sales automatically reserves stock in the warehouse, creates a draft invoice for accounting, and updates the customer's purchase history in real time."
        ]
      },
      {
        heading: "Core Modules That Deliver Immediate Impact",
        paragraphs: [
          "1. Inventory & Multi-Warehouse: Track stock levels, set automated reordering thresholds, and monitor movements between branches with barcode verification.",
          "2. Invoicing & Accounting: Automate tax calculations, generate GST-compliant invoices, and gain instant visibility into cash flow and outstanding balances.",
          "3. Sales & CRM: Manage your quotation pipeline, customer communications, and sales representative performance without losing track of leads."
        ]
      },
      {
        heading: "How to Plan Your Odoo Migration",
        paragraphs: [
          "A successful ERP rollout begins with mapping your actual day-to-day business processes before touching any code. By identifying your exact approval workflows, permission rules, and reporting needs upfront, you ensure the system adapts to your business—not the other way around."
        ]
      }
    ],
    keyTakeaways: [
      "Modular ERP allows companies to start small and expand as operations demand.",
      "Shared database architecture eliminates duplicate data entry across departments.",
      "Thorough business process mapping is the number one predictor of successful ERP adoption."
    ],
    relatedTopics: ["Odoo Implementation", "Inventory Management", "Business Automation"]
  },
  {
    id: "what-should-hotel-management-system-include",
    slug: "what-should-a-hotel-management-system-include",
    title: "What Should a Modern Hotel Management System Include?",
    category: "hotel-management",
    categoryLabel: "Hotel Management",
    isDraft: false,
    statusBadge: "Industry Guide",
    publishedDate: "November 2026",
    readingTime: "5 min read",
    author: {
      name: "IraSoft Hospitality Technology Team",
      role: "Hospitality Solutions Group",
    },
    summary:
      "Key operational capabilities every independent hotel, resort, and boutique lodge needs in a property management system to deliver effortless guest stays and smooth front-desk operations.",
    tableOfContents: [
      "The Challenges of Modern Property Operations",
      "Essential Feature 1: Intuitive Visual Room Calendar",
      "Essential Feature 2: Frictionless Check-In & Guest Folios",
      "Essential Feature 3: Real-Time Housekeeping Coordination",
      "Essential Feature 4: Inventory & Purchasing Controls",
      "Essential Feature 5: Daily Shift Auditing & Revenue Analytics"
    ],
    content: [
      {
        heading: "The Challenges of Modern Property Operations",
        paragraphs: [
          "Running a hotel or resort is an intensive, 24/7 undertaking. Receptionists, housekeeping supervisors, storekeepers, and managers must constantly communicate without friction. When room readiness is delayed or guest requests get lost between shift handovers, guest satisfaction suffers immediately.",
          "A modern hotel management system is not just an electronic guestbook; it is the digital nervous system of your property."
        ]
      },
      {
        heading: "Essential Features for Daily Excellence",
        paragraphs: [
          "A visual room matrix enables front desk staff to see room statuses at a glance—identifying occupied, reserved, vacant, and cleaning rooms in seconds.",
          "Integrated folios allow front desk staff to append room charges, dining orders, laundry services, and miscellaneous expenses onto a single, clean checkout invoice without manual tallying."
        ]
      },
      {
        heading: "Connecting Housekeeping with Reception",
        paragraphs: [
          "The biggest operational bottleneck in many hotels is room turnover. With a mobile-responsive housekeeping dashboard, cleaning staff can mark a room as 'Clean' or 'Inspected' the moment they finish, immediately freeing the room for front desk check-in without walkie-talkie shouting or physical checks."
        ]
      }
    ],
    keyTakeaways: [
      "Visual room matrices reduce front desk look-up times and eliminate double bookings.",
      "Mobile housekeeping boards speed up room turnover and guest check-in.",
      "Unified guest folios ensure zero forgotten room charges during checkout."
    ],
    relatedTopics: ["Hospitality Software", "Front Desk Operations", "Housekeeping Technology"]
  },
  {
    id: "custom-vs-ready-made-software",
    slug: "custom-software-vs-ready-made-software",
    title: "Custom Software vs. Ready-Made SaaS: Making the Right Business Decision",
    category: "custom-software",
    categoryLabel: "Software Development",
    isDraft: false,
    statusBadge: "Strategic Analysis",
    publishedDate: "October 2026",
    readingTime: "7 min read",
    author: {
      name: "IraSoft Engineering Architecture",
      role: "Software Architecture Team",
    },
    summary:
      "When does it make sense to subscribe to an existing SaaS tool, and when should a growing business invest in proprietary custom software? An honest, ROI-driven evaluation framework.",
    tableOfContents: [
      "The Appeal of Ready-Made SaaS",
      "The Tipping Point: When Off-the-Shelf Breaks Down",
      "Total Cost of Ownership (TCO) Comparison",
      "Strategic Competitive Advantage",
      "The Hybrid Approach"
    ],
    content: [
      {
        heading: "The Appeal of Ready-Made SaaS",
        paragraphs: [
          "Off-the-shelf software is ideal for commodity business functions that follow standardized industry rules—such as standard email hosting, basic spreadsheets, or standard video conferencing.",
          "Setup is fast, initial capital outlay is minimal, and the software is maintained by the vendor. For generic workflows, subscribing to an existing SaaS tool is often the smart initial move."
        ]
      },
      {
        heading: "The Tipping Point: When Off-the-Shelf Breaks Down",
        paragraphs: [
          "Problems arise when a growing business attempts to force its core differentiators into a rigid SaaS framework. You find yourself paying for dozens of per-seat licenses for features you never use, while spending additional hours creating manual spreadsheets just to bridge functionality gaps.",
          "Custom software allows you to build around your actual workflows, retain 100% intellectual property ownership, and eliminate recurring per-user licensing fees."
        ]
      }
    ],
    keyTakeaways: [
      "Commodity workflows are well-served by standard SaaS products.",
      "Core proprietary business workflows yield higher ROI when built custom.",
      "Custom software eliminates compounding per-seat subscription licensing fees."
    ],
    relatedTopics: ["Software Architecture", "Custom Development", "IT Strategy"]
  },
  {
    id: "how-ai-automation-improves-business-operations",
    slug: "how-ai-automation-can-improve-business-operations",
    title: "How AI Automation Can Improve Daily Business Operations Today",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    isDraft: false,
    statusBadge: "Technology Explainer",
    publishedDate: "October 2026",
    readingTime: "5 min read",
    author: {
      name: "IraSoft AI Practice",
      role: "Intelligent Automation Lab",
    },
    summary:
      "Moving beyond the hype: practical, measurable ways businesses are using intelligent document processing, AI support assistants, and workflow bots to reduce operational friction.",
    tableOfContents: [
      "Beyond the Hype: Practical Business AI",
      "Use Case 1: Automated Document Processing",
      "Use Case 2: 24/7 Intelligent Client Concierge",
      "Use Case 3: Natural Language Knowledge Search (RAG)",
      "Maintaining Data Privacy and Human Oversight"
    ],
    content: [
      {
        heading: "Beyond the Hype: Practical Business AI",
        paragraphs: [
          "Artificial intelligence in business is most valuable when applied to specific, well-defined operational bottlenecks. Rather than replacing human judgment, practical AI automates high-volume cognitive tasks: reading documents, categorizing inquiries, and extracting structured information.",
          "When businesses pair AI with strict human-in-the-loop review boundaries, operational turnaround times shrink dramatically without compromising accuracy."
        ]
      },
      {
        heading: "Automated Document Processing",
        paragraphs: [
          "Finance and procurement teams often spend hours manually reading invoices and transcribing line items into accounting software. Modern AI extraction pipelines parse multi-page PDFs in seconds, mapping vendor names, invoice numbers, tax amounts, and totals directly into your ERP database."
        ]
      }
    ],
    keyTakeaways: [
      "AI delivers the highest ROI when focused on specific document and query bottlenecks.",
      "Human-in-the-loop guardrails ensure critical decisions always have human verification.",
      "Enterprise private API agreements protect sensitive company information."
    ],
    relatedTopics: ["AI Automation", "Document Processing", "Workflow Optimization"]
  },
  {
    id: "why-every-business-needs-professional-website",
    slug: "why-every-growing-business-needs-a-professional-website",
    title: "Why Every Growing Business Needs a Fast, Conversion-Focused Website",
    category: "web-development",
    categoryLabel: "Website Development",
    isDraft: false,
    statusBadge: "Digital Strategy",
    publishedDate: "September 2026",
    readingTime: "4 min read",
    author: {
      name: "IraSoft Digital Experience Team",
      role: "Web Architecture Group",
    },
    summary:
      "How page speed, clear service messaging, mobile responsiveness, and technical SEO turn a corporate website into a predictable generator of qualified client enquiries.",
    tableOfContents: [
      "First Impressions in the Digital Economy",
      "Why Speed Equals Conversion",
      "Mobile-First Architecture is Non-Negotiable",
      "Clarity Over Complexity in Service Navigation"
    ],
    content: [
      {
        heading: "First Impressions in the Digital Economy",
        paragraphs: [
          "Before a prospective client calls your office or agrees to a proposal, they examine your website. A slow, poorly formatted, or broken website immediately creates doubt regarding your technical capability and professionalism.",
          "A modern corporate website clearly explains what you do, who you serve, and how a potential client can take the next step without ambiguity."
        ]
      }
    ],
    keyTakeaways: [
      "Corporate websites establish baseline credibility before contracts are signed.",
      "Sub-second load times keep high-intent decision-makers on your pages.",
      "Clear, multi-field enquiry pathways maximize conversion rates."
    ],
    relatedTopics: ["Website Design", "Conversion Rate Optimization", "SEO"]
  },
  {
    id: "how-to-plan-successful-erp-implementation",
    slug: "how-to-plan-a-successful-erp-implementation",
    title: "How to Plan a Successful ERP Implementation: A Practical Roadmap",
    category: "odoo-erp",
    categoryLabel: "Odoo ERP",
    isDraft: false,
    statusBadge: "Implementation Guide",
    publishedDate: "September 2026",
    readingTime: "6 min read",
    author: {
      name: "IraSoft Enterprise Systems Practice",
      role: "ERP Implementation Team",
    },
    summary:
      "A structured 5-phase roadmap for business owners and managers planning an ERP migration, covering requirement scoping, data cleansing, user training, and change management.",
    tableOfContents: [
      "Phase 1: Clear Objective Definition",
      "Phase 2: Process Mapping Before Configuration",
      "Phase 3: Data Cleansing & Master Structuring",
      "Phase 4: User Acceptance Testing (UAT)",
      "Phase 5: Phased Cutover & Staff Training"
    ],
    content: [
      {
        heading: "Process Mapping Before Configuration",
        paragraphs: [
          "The most common reason ERP projects encounter friction is attempting to configure software before defining standard operating procedures. By documenting every approval gate, order stage, and user role beforehand, configuration proceeds quickly and smoothly."
        ]
      }
    ],
    keyTakeaways: [
      "Clean master data before migrating into your new ERP system.",
      "Engage departmental end-users early during testing to build confidence.",
      "Plan a gradual cutover strategy to safeguard continuous operations."
    ],
    relatedTopics: ["ERP Roadmap", "Change Management", "Business Operations"]
  }
];

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
