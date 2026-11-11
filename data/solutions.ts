export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  shortDescription: string;
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  rolesSupported: {
    role: string;
    responsibilities: string;
  }[];
  configurableModules: string[];
  businessBenefits: string[];
  ctaText: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "hotel-management-system",
    slug: "hotel-management-system",
    title: "Complete Hotel & Resort Management System",
    badge: "Flagship Hospitality Solution",
    heroHeadline: "Complete Hotel & Resort Management Solutions",
    heroSubheadline:
      "Manage reservations, front desk operations, room turnover, inventory, employees, billing, and business reporting through connected technology.",
    shortDescription:
      "Designed specifically for hotels, resorts, lodges, and serviced accommodations seeking streamlined daily operations, happier guests, and complete financial clarity.",
    overview:
      "Running a hospitality property means managing numerous moving parts at once: incoming reservations, front desk check-ins, guest inquiries, room readiness, supply consumption, restaurant orders, and nightly audits. IraSoft's Hotel & Resort Management solution brings these disparate tasks into one intuitive web-based interface accessible across reception computers, manager laptops, and staff tablets.",
    keyFeatures: [
      {
        title: "Front Desk & Reception Operations",
        description: "Visual calendar matrix displaying room status (Occupied, Reserved, Cleaning, Maintenance, Available) for rapid desk management."
      },
      {
        title: "Reservations & Booking Workflows",
        description: "Direct walk-in bookings, phone reservation tracking, advance deposit records, and flexible rate tier assignments."
      },
      {
        title: "Guest Check-In & Check-Out",
        description: "Quick guest registration, contact details, identity document attachments, key card logs, and express checkout settlement."
      },
      {
        title: "Housekeeping & Room Turnover",
        description: "Mobile-friendly room cleaning status updates (Clean, Dirty, Inspected, Out of Service) to prevent front desk delays."
      },
      {
        title: "Inventory & Purchasing Management",
        description: "Monitor linen, housekeeping consumables, toiletries, and minibar stock with reorder threshold alerts."
      },
      {
        title: "Staff & Employee Workflows",
        description: "Role-based shifts, task assignment, employee logs, and departmental accountability."
      },
      {
        title: "Billing & Financial Operations",
        description: "Multi-item guest folios combining room tariffs, laundry, room service, and taxes into a clean itemized invoice."
      },
      {
        title: "Management Reports & Analytics",
        description: "Daily revenue audits, Average Daily Rate (ADR), occupancy percentages, and expense tracking for owners and managers."
      }
    ],
    rolesSupported: [
      {
        role: "Hotel Administrator / Owner",
        responsibilities: "Full system oversight, revenue metrics, expense approvals, room rate configurations, and audit logs."
      },
      {
        role: "General / Operations Manager",
        responsibilities: "Daily operations monitoring, occupancy oversight, staff duty shifts, and inventory reordering approvals."
      },
      {
        role: "Front Desk Receptionist",
        responsibilities: "Guest check-ins, room reservations, folios settlement, key issuance, and guest assistance requests."
      },
      {
        role: "Housekeeping Supervisor & Staff",
        responsibilities: "Real-time room status updates, linen replenishment, maintenance flags, and cleaning audits."
      },
      {
        role: "Storekeeper / Inventory Manager",
        responsibilities: "Stock intake, issuance of supplies to housekeeping and kitchen, purchase orders, and physical stock counts."
      },
      {
        role: "Accounts & Finance Staff",
        responsibilities: "Daily cashier closure, invoice verification, expense vouchers, vendor payments, and tax filing reports."
      }
    ],
    configurableModules: [
      "Front Desk Operations & Room Availability Grid",
      "Guest Reservation & Deposit Tracking",
      "Digital Check-in / Checkout & ID Document Archiving",
      "Housekeeping & Room Readiness Mobile Board",
      "Linen & Consumable Inventory Management",
      "Dining / Minibar Charge Consolidation",
      "Folio Management & Split Invoicing",
      "Daily Cashier Shift Handover & Financial Audits"
    ],
    businessBenefits: [
      "Zero double-bookings through unified room calendar synchronization",
      "Reduced check-in wait times creating exceptional first impressions for guests",
      "Housekeeping delays eliminated via instant mobile status notifications",
      "Total transparency over stock consumption, preventing inventory loss",
      "Clear daily revenue reports delivered automatically to property owners"
    ],
    ctaText: "Explore Hotel Management Solutions"
  },
  {
    id: "enterprise-erp",
    slug: "enterprise-erp",
    title: "Connected Enterprise ERP Solution",
    badge: "Operations & Finance",
    heroHeadline: "Unify Your Core Operations with Tailored ERP Systems",
    heroSubheadline:
      "Connect sales, procurement, inventory, manufacturing, human resources, and accounting into a single real-time operational engine.",
    shortDescription:
      "End-to-end ERP implementations and custom module engineering designed to eliminate disconnected spreadsheets and align your entire organization.",
    overview:
      "As businesses scale, departmental silos naturally form: sales teams use CRM spreadsheets, warehouse staff track inventory on paper, and the accounts team struggles to reconcile invoices at the end of the month. IraSoft's Enterprise ERP solution brings every core workflow under one synchronized platform.",
    keyFeatures: [
      {
        title: "Unified Master Data",
        description: "Single customer, vendor, and product master databases shared seamlessly across all company departments."
      },
      {
        title: "Procurement & Vendor Management",
        description: "Automated RFQs, vendor price comparisons, purchase approvals, and automated 3-way invoice matching."
      },
      {
        title: "Multi-Warehouse & Barcode Tracking",
        description: "Trace stock across branches, track batches and serial numbers, and automate reorder thresholds."
      },
      {
        title: "GST-Compliant Financials",
        description: "Real-time general ledger, bank reconciliations, accounts payable/receivable, and compliance statements."
      }
    ],
    rolesSupported: [
      {
        role: "Executive Leadership",
        responsibilities: "Consolidated P&L, departmental KPIs, cash flow forecasts, and high-level approvals."
      },
      {
        role: "Department Heads",
        responsibilities: "Team task allocation, procurement requests, workflow authorizations, and operational reporting."
      },
      {
        role: "Operational Teams",
        responsibilities: "Order processing, inventory movements, dispatch notes, and invoice generation."
      }
    ],
    configurableModules: [
      "Sales & CRM Pipeline",
      "Purchase & Vendor Management",
      "Inventory & Warehouse Operations",
      "Financial Accounting & Invoicing",
      "Employee Directory & Leave Tracking",
      "Custom Workflow Automation"
    ],
    businessBenefits: [
      "Total operational visibility across branches and teams",
      "Elimination of double data entry and human bookkeeping errors",
      "Accelerated invoice-to-cash turnaround",
      "Scalable infrastructure ready for business expansion"
    ],
    ctaText: "Discuss Enterprise ERP"
  },
  {
    id: "ai-workflow-automation",
    slug: "ai-workflow-automation",
    title: "Intelligent AI & Workflow Automation",
    badge: "Process Automation",
    heroHeadline: "Accelerate Daily Operations with Custom AI Agents",
    heroSubheadline:
      "Automate document parsing, customer query routing, and multi-step manual administrative tasks with private, business-aligned AI systems.",
    shortDescription:
      "Tailored AI assistants, document intelligence pipelines, and autonomous workflow bots engineered to reduce operational friction and save hours of manual work.",
    overview:
      "Many business operations still rely on manual data entry: copying details from invoices into accounting software, manually answering repetitive customer inquiries, or searching through lengthy PDF manuals. IraSoft builds custom AI automation pipelines that securely handle these tasks with speed and precision.",
    keyFeatures: [
      {
        title: "Automated Document Extraction",
        description: "Instantly parse invoices, receipts, contracts, and resumes into structured database records."
      },
      {
        title: "Natural Language Knowledge Search",
        description: "Query internal company policies, product specifications, and documentation using plain English questions."
      },
      {
        title: "24/7 Intelligent Client Concierge",
        description: "Context-aware AI assistants that answer customer questions, check order statuses, and collect enquiry leads."
      },
      {
        title: "Multi-Step Process Automation",
        description: "Autonomous task agents that connect email inboxes with internal databases and notification systems."
      }
    ],
    rolesSupported: [
      {
        role: "Business Owners",
        responsibilities: "Review efficiency gains, reduce administrative overhead, and scale operations smoothly."
      },
      {
        role: "Operations & Admin Teams",
        responsibilities: "Save hours spent on repetitive typing and focus on high-impact business tasks."
      },
      {
        role: "Customer Support Teams",
        responsibilities: "Resolve common questions instantly while dedicating human empathy to complex cases."
      }
    ],
    configurableModules: [
      "Document Extraction Pipeline",
      "Private Enterprise Knowledge Base (RAG)",
      "Inbound Enquiry Qualification Bot",
      "Automated Email & CRM Bridge"
    ],
    businessBenefits: [
      "Cut document processing time by up to 80%",
      "Zero customer wait times for common queries",
      "Fewer human transcription errors in accounting and record-keeping",
      "Confidential data kept secure with private API agreements"
    ],
    ctaText: "Explore AI Automation"
  }
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return SOLUTIONS.find((item) => item.slug === slug);
}

