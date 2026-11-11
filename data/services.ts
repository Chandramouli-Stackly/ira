export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  shortDescription: string;
  iconName: string;
  badge: string;
  overview: string;
  businessProblemsSolved: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  workflowProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  targetAudiences: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "odoo-erp",
    slug: "odoo-erp",
    title: "Odoo ERP Development & Customization",
    shortTitle: "Odoo ERP Solutions",
    badge: "Enterprise Resource Planning",
    heroHeadline: "Odoo ERP Solutions Designed Around Your Business",
    heroSubheadline:
      "Unify your operations, automate routine processes, and gain total business clarity with customized Odoo ERP implementation and module engineering.",
    shortDescription:
      "Custom Odoo implementation, tailored module development, workflow automation, and seamless integration for accounting, inventory, CRM, HR, and sales.",
    iconName: "Boxes",
    overview:
      "Odoo ERP is one of the world's most versatile open-source business management suites. However, off-the-shelf ERP configurations rarely match how your business actually runs. At IraSoft Technologies, we configure, customize, and extend Odoo so that every department—from warehouse and sales to accounting and HR—collaborates smoothly without disjointed spreadsheets or double data entry.",
    businessProblemsSolved: [
      "Eliminates disconnected software tools and fragmented spreadsheets across departments.",
      "Reduces manual data entry errors and streamlines approval workflows.",
      "Provides real-time visibility into stock levels, multi-warehouse movements, and reordering.",
      "Centralizes customer communication, quotations, invoices, and accounting compliance.",
      "Offers scalable architecture that grows as your transaction volume and branch network expand."
    ],
    capabilities: [
      {
        title: "End-to-End ERP Implementation",
        description: "Full deployment of Odoo Community or Enterprise editions configured specifically for your industry standards and accounting practices."
      },
      {
        title: "Custom Module Development",
        description: "Custom Python and XML modules engineered to support proprietary business rules, specialized forms, and custom reporting logic."
      },
      {
        title: "Business Workflow Automation",
        description: "Automated trigger actions, multi-level approval hierarchies, automated invoice dispatch, and status transition workflows."
      },
      {
        title: "Inventory, Purchasing & Multi-Warehouse",
        description: "Automated replenishment rules, batch and serial tracking, barcode integration, landed costs, and vendor management."
      },
      {
        title: "Accounting & Financial Management",
        description: "Chart of accounts setup, multi-currency support, automated bank reconciliations, GST compliance, and detailed P&L reporting."
      },
      {
        title: "HR, Attendance & Payroll Workflows",
        description: "Employee records, leave management, biometric attendance integration, salary rule computation, and payslip generation."
      },
      {
        title: "Website, E-Commerce & Portal Integration",
        description: "Connect your front-end customer portal or e-commerce shop directly with backend inventory, invoicing, and fulfillment."
      },
      {
        title: "API & Third-Party Integrations",
        description: "RESTful API connections to external payment gateways, courier shipping providers, CRM tools, and legacy corporate databases."
      },
      {
        title: "ERP Migration, Support & Upgrades",
        description: "Safe database migration from legacy platforms or previous Odoo versions, performance tuning, and continuous technical support."
      }
    ],
    keyBenefits: [
      "Single source of truth for all business operations",
      "Faster order-to-cash cycles and streamlined invoicing",
      "Clear visibility over profitability and expenditure",
      "No vendor lock-in with customizable architecture"
    ],
    workflowProcess: [
      {
        step: "01",
        title: "Requirement Analysis",
        description: "Deep dive into your existing business workflows, pain points, departments, and specific reporting requirements."
      },
      {
        step: "02",
        title: "Workflow Mapping",
        description: "Architecting the exact digital process flows, user roles, permission matrices, and data schemas before configuration."
      },
      {
        step: "03",
        title: "Configuration & Setup",
        description: "Base Odoo setup, chart of accounts initialization, master data structuring, and access right configurations."
      },
      {
        step: "04",
        title: "Custom Development",
        description: "Developing specialized modules, automated triggers, custom report templates, and external API connectors."
      },
      {
        step: "05",
        title: "Testing & Validation",
        description: "Rigorous functional testing, user acceptance testing (UAT), and data integrity verification in a staging environment."
      },
      {
        step: "06",
        title: "Deployment & Training",
        description: "Smooth production cutover, employee role-specific training sessions, and continuous post-launch support."
      }
    ],
    targetAudiences: [
      "Manufacturing companies needing production planning and bill of materials management",
      "Wholesale and distribution businesses managing high-volume inventories and multiple warehouses",
      "Retail chains needing unified POS and back-office accounting",
      "Service and project-based agencies tracking billable hours and milestones"
    ],
    faqs: [
      {
        question: "Can IraSoft customize existing Odoo modules or only build new ones?",
        answer: "We do both. We can modify standard Odoo modules (Sales, Accounting, Inventory, CRM, etc.) with custom fields and rules, as well as build completely new standalone modules tailored to your operations."
      },
      {
        question: "Do you support both Odoo Community and Odoo Enterprise?",
        answer: "Yes, we work with both Odoo Community (open-source) and Odoo Enterprise editions, advising you on the most cost-effective approach for your business."
      },
      {
        question: "How long does a typical Odoo implementation take?",
        answer: "A standard setup can take 3 to 6 weeks, while extensive enterprise customizations with legacy data migrations typically span 8 to 14 weeks depending on scope."
      }
    ],
    ctaText: "Request an Odoo ERP Consultation"
  },
  {
    id: "hotel-management",
    slug: "hotel-management",
    title: "Hotel & Resort Management Software",
    shortTitle: "Hotel & Resort Systems",
    badge: "Hospitality Technology",
    heroHeadline: "Simplify Hotel Operations with Smart Management Software",
    heroSubheadline:
      "Manage reservations, front desk check-ins, room cleaning, inventory, staff, and financial reporting through an intuitive, connected platform.",
    shortDescription:
      "Hotel operations management, room bookings, guest check-in/out, housekeeping, inventory, billing, multi-role staff access, and management dashboards.",
    iconName: "Hotel",
    overview:
      "Managing a hotel, resort, or boutique accommodation requires juggling reservations, front desk workflows, room turnover, dining orders, stock consumption, and revenue auditing. IraSoft Technologies designs configurable hotel management solutions that replace chaotic register books and disconnected spreadsheets with an organized, role-based system.",
    businessProblemsSolved: [
      "Eliminates double bookings and confusion over real-time room availability.",
      "Speeds up front desk check-in and check-out to delight incoming guests.",
      "Connects housekeeping room readiness directly to reception staff in real-time.",
      "Tracks inventory usage for linen, amenities, toiletries, and food & beverage.",
      "Generates clear daily revenue reports, occupancy rates, and cashier shift summaries."
    ],
    capabilities: [
      {
        title: "Front Desk & Reception Operations",
        description: "Visual calendar matrix displaying room status (Occupied, Reserved, Cleaning, Maintenance, Available) for rapid desk management."
      },
      {
        title: "Reservations & Booking Workflows",
        description: "Direct walk-in bookings, phone reservation tracking, advance deposit records, and flexible rate tier assignments."
      },
      {
        title: "Fast Guest Check-In & Check-Out",
        description: "Digital guest registration, identity document attachments, automated room key assignment, and express checkout settlement."
      },
      {
        title: "Housekeeping & Room Turnover",
        description: "Mobile-friendly room cleaning status updates (Clean, Dirty, Inspected, Out of Service) to prevent front desk delays."
      },
      {
        title: "Guest Profiles & History",
        description: "Record guest preferences, past stay history, special requests, and contact details to deliver personalized hospitality."
      },
      {
        title: "Inventory & Purchasing Management",
        description: "Monitor linen, housekeeping consumables, toiletries, and minibar stock with reorder threshold alerts."
      },
      {
        title: "Staff & Role-Based Access Controls",
        description: "Distinct permission levels for Administrator, General Manager, Receptionist, Housekeeper, and Accounts Staff."
      },
      {
        title: "Billing, Folios & Invoicing",
        description: "Multi-item guest folios combining room tariffs, laundry, food, and miscellaneous charges into a clean, itemized invoice."
      },
      {
        title: "Executive Reports & Dashboards",
        description: "Daily revenue audits, Average Daily Rate (ADR), RevPAR, occupancy percentages, and expense tracking for owners and managers."
      }
    ],
    keyBenefits: [
      "Instant room status visibility across all front desk workstations",
      "Faster check-in times minimizing guest lobby wait times",
      "Stops inventory shrinkage and stock stockouts",
      "Clear financial accountability and shift closing reports"
    ],
    workflowProcess: [
      {
        step: "01",
        title: "Property Assessment",
        description: "We review your property layout, room types, tariff structures, seasonal rates, and operational pain points."
      },
      {
        step: "02",
        title: "Role & Workflow Definition",
        description: "Mapping your front desk, housekeeping, storekeeper, and accounting approval paths and access permissions."
      },
      {
        step: "03",
        title: "System Configuration",
        description: "Setting up room inventories, taxes, payment methods, invoice templates, and user accounts."
      },
      {
        step: "04",
        title: "Staff Onboarding & Training",
        description: "Hands-on walkthroughs for receptionists, managers, and staff to ensure confident daily operation."
      },
      {
        step: "05",
        title: "Go-Live & Support",
        description: "Assisting during your live transition shift with continuous support for inquiries and optimizations."
      }
    ],
    targetAudiences: [
      "Independent hotels and boutique properties seeking modern digital operations",
      "Resorts and eco-lodges managing varied accommodation categories and amenities",
      "Serviced apartments and guest houses needing streamlined reservation tracking",
      "Hospitality management groups overseeing multiple properties"
    ],
    faqs: [
      {
        question: "Can our reception and housekeeping staff use it on tablets or mobile phones?",
        answer: "Yes, our systems are built with fully responsive web technology, allowing staff to update room statuses or check details from smartphones, tablets, or desktop computers."
      },
      {
        question: "Can we configure different rates for seasons or corporate clients?",
        answer: "Absolutely. The software supports flexible rate plans, weekend tariffs, seasonal pricing, and corporate discount tiers."
      },
      {
        question: "Does the system handle guest billing with multiple charges?",
        answer: "Yes. Every guest stay has an active folio where room charges, laundry, food, extra beds, and taxes can be consolidated onto a single final bill or split as needed."
      }
    ],
    ctaText: "Request a Hotel Software Demo"
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    badge: "Tailored Engineering",
    heroHeadline: "Custom Software Built Around the Way Your Business Works",
    heroSubheadline:
      "When commercial off-the-shelf software falls short, we engineer tailored business applications, web portals, and automation engines built precisely for your unique workflows.",
    shortDescription:
      "Tailor-made web applications, internal company portals, workflow automation tools, database systems, and secure REST APIs built for business efficiency.",
    iconName: "Code2",
    overview:
      "Every business possesses unique competitive advantages, operational nuances, and workflows that generic SaaS tools cannot accommodate without painful compromises. IraSoft Technologies designs and builds custom software from the ground up, giving you full ownership, scalability, and an exact fit for your organizational goals.",
    businessProblemsSolved: [
      "Eliminates subscription fatigue and per-user licensing fees of generic SaaS software.",
      "Bridges gaps between incompatible legacy systems with modern API integrations.",
      "Automates repetitive manual spreadsheets and high-friction multi-step workflows.",
      "Provides proprietary competitive advantage with custom features your rivals cannot buy.",
      "Ensures full control over data security, access permissions, and hosting environments."
    ],
    capabilities: [
      {
        title: "Tailored Business Applications",
        description: "Web and desktop-grade business tools designed to manage proprietary operations, approvals, and domain-specific records."
      },
      {
        title: "Internal Portals & Admin Dashboards",
        description: "Secure, role-protected dashboards for employees, managers, field agents, and executive decision-makers."
      },
      {
        title: "Workflow Automation & Task Engines",
        description: "Custom rule engines that automatically route tasks, send notifications, and handle status transitions."
      },
      {
        title: "Database Architecture & Optimization",
        description: "Clean relational and document data modeling, query optimization, indexing, and automated backups."
      },
      {
        title: "REST & GraphQL API Development",
        description: "Documented, secure API endpoints connecting internal systems with mobile apps, client portals, and external partners."
      },
      {
        title: "Software Modernization",
        description: "Refactoring legacy, slow, or unsupported applications into clean, maintainable, modern cloud-native architectures."
      }
    ],
    keyBenefits: [
      "Built specifically to match your exact business rules",
      "You own the software with zero recurring per-user software royalties",
      "Scales seamlessly as your transaction volume and customer base multiply",
      "High security and strict role-based access controls"
    ],
    workflowProcess: [
      {
        step: "01",
        title: "Discovery & Blueprint",
        description: "We document user personas, core business rules, edge cases, and architectural foundations."
      },
      {
        step: "02",
        title: "Architecture & Wireframes",
        description: "Interactive UI wireframes and database schema design validated before writing production code."
      },
      {
        step: "03",
        title: "Iterative Development",
        description: "Agile sprint cycles where working functional modules are demonstrated and refined regularly."
      },
      {
        step: "04",
        title: "Security & QA",
        description: "Cross-browser testing, vulnerability scanning, role verification, and performance profiling."
      },
      {
        step: "05",
        title: "Deployment & Evolution",
        description: "Production launch with continuous monitoring, documentation handoff, and ongoing feature enhancements."
      }
    ],
    targetAudiences: [
      "Growing companies that have outgrown Excel and basic SaaS tools",
      "Enterprises needing custom internal portals and workflow automations",
      "Startups needing scalable MVPs and robust web application foundations",
      "Logistics, healthcare, manufacturing, and education providers with custom compliance needs"
    ],
    faqs: [
      {
        question: "Do we own the source code after development?",
        answer: "Yes, once the project is completed and handed over, you hold full intellectual property rights to your custom software."
      },
      {
        question: "What technology stack do you use?",
        answer: "We select modern, battle-tested technologies including React, Next.js, Node.js, Python, PostgreSQL, MySQL, and cloud providers like AWS, Vercel, and DigitalOcean."
      },
      {
        question: "Can custom software integrate with our existing accounting or CRM system?",
        answer: "Yes, we build secure API connectors to integrate your custom application with tools like Tally, Odoo, Salesforce, payment gateways, and WhatsApp."
      }
    ],
    ctaText: "Discuss Your Software Idea"
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    shortTitle: "AI & Automation",
    badge: "Next-Gen Intelligence",
    heroHeadline: "Make Business Processes Smarter with AI and Automation",
    heroSubheadline:
      "Harness the power of AI agents, intelligent document processing, and automated workflows to eliminate manual bottlenecks and accelerate business velocity.",
    shortDescription:
      "AI-powered business assistants, autonomous workflow agents, LLM integrations, document extraction, customer support automation, and intelligent processes.",
    iconName: "Cpu",
    overview:
      "Artificial Intelligence is no longer just a futuristic concept; it is a practical operational tool that solves genuine business problems today. At IraSoft Technologies, we build custom AI assistants, automated document parsers, and intelligent agents tailored to your specific internal data and workflows, allowing your team to focus on high-value business decisions.",
    businessProblemsSolved: [
      "Eliminates hours spent manually reading, summarizing, and transcribing PDF invoices, receipts, and forms.",
      "Provides 24/7 instant client enquiry resolution with AI assistants trained on your product guidelines.",
      "Reduces human error in data validation, categorization, and routing.",
      "Allows employees to query internal company knowledge bases in natural everyday language.",
      "Automates multi-step processes between emails, spreadsheets, CRM, and ERP systems."
    ],
    capabilities: [
      {
        title: "AI-Powered Business Assistants",
        description: "Custom conversational assistants integrated into your website, customer portal, or internal team chat to answer complex queries."
      },
      {
        title: "Intelligent Document Extraction",
        description: "Automated extraction of key fields, totals, and line items from invoices, bills, contracts, and resumes with zero manual typing."
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description: "Secure enterprise AI search that queries your internal PDF documentation, SOPs, and knowledge repositories without data leakage."
      },
      {
        title: "Autonomous Workflow Agents",
        description: "Task agents that trigger multi-step operations: parsing an inbound email, validating client details, updating CRM, and notifying managers."
      },
      {
        title: "Customer Support Automation",
        description: "First-line customer support ticketing bots that categorize tickets, provide immediate resolutions, or escalate to human specialists."
      },
      {
        title: "Foundation Model & API Integrations",
        description: "Safe, compliant integrations with OpenAI, Anthropic, Gemini, or open-source models hosted in your private environment."
      }
    ],
    keyBenefits: [
      "Dramatic reduction in document processing turnaround time",
      "24/7 availability for customer inquiries and lead capture",
      "Frees human team members from repetitive cognitive tasks",
      "Strict data privacy controls ensuring your business data remains confidential"
    ],
    workflowProcess: [
      {
        step: "01",
        title: "Use-Case Evaluation",
        description: "Identifying repetitive, high-friction tasks where AI automation delivers immediate ROI and measurable efficiency gains."
      },
      {
        step: "02",
        title: "Data Audit & Feasibility",
        description: "Examining your source documents, API endpoints, knowledge bases, and data security boundaries."
      },
      {
        step: "03",
        title: "Model & Agent Engineering",
        description: "Prompt tuning, custom agent tool definitions, RAG vector indexing, and pipeline development."
      },
      {
        step: "04",
        title: "Guardrails & Verification",
        description: "Implementing strict hallucination guardrails, human-in-the-loop fallback rules, and accuracy evaluations."
      },
      {
        step: "05",
        title: "Deployment & Monitoring",
        description: "Integrating into your daily software stack with observability on token costs, latency, and output quality."
      }
    ],
    targetAudiences: [
      "Companies handling hundreds of invoices, contracts, or compliance documents monthly",
      "E-commerce, real estate, and hospitality businesses with high customer inquiry volumes",
      "Organizations with extensive technical SOPs and internal knowledge bases",
      "Businesses seeking smart process automation to scale without inflating headcount"
    ],
    faqs: [
      {
        question: "Is our proprietary business data used to train public AI models?",
        answer: "No. We utilize enterprise API agreements and private deployments with strict zero-data-retention and non-training guarantees, ensuring your confidential data remains 100% private."
      },
      {
        question: "What happens if the AI encounters an ambiguous or complex document?",
        answer: "We engineer 'Human-in-the-Loop' safeguards. If the system's confidence score falls below a defined threshold, it automatically routes the item to a human reviewer with highlighted fields."
      },
      {
        question: "Can an AI agent interact with our existing CRM or ERP database?",
        answer: "Yes, through secure API tool calling, our AI agents can look up customer statuses, verify inventory, or create draft entries in your CRM or ERP automatically."
      }
    ],
    ctaText: "Explore AI Solutions"
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Professional Website Development",
    shortTitle: "Website Development",
    badge: "Digital Experience",
    heroHeadline: "Professional Websites That Turn Visitors Into Customers",
    heroSubheadline:
      "Modern, fast, mobile-responsive corporate and business websites engineered for credibility, search engine visibility, and maximum enquiry conversion.",
    shortDescription:
      "Corporate websites, business platforms, portfolio portals, e-commerce stores, and high-converting landing pages built with modern Next.js and React technology.",
    iconName: "Globe",
    overview:
      "Your website is the digital storefront of your business. Before clients book a meeting or award a contract, they evaluate your credibility through your online presence. IraSoft Technologies builds lightning-fast, beautifully designed, and conversion-focused corporate websites that clearly communicate your value and compel decision-makers to reach out.",
    businessProblemsSolved: [
      "Transforms outdated, slow-loading websites into fast, modern digital experiences.",
      "Ensures flawless presentation across mobile phones, tablets, laptops, and wide screens.",
      "Implements proper technical SEO architecture so prospective clients discover your services on Google.",
      "Removes confusing layouts and friction points to increase inbound quotation enquiries.",
      "Eliminates dependency on fragile, slow WordPress templates vulnerable to plugin conflicts."
    ],
    capabilities: [
      {
        title: "Corporate & Enterprise Websites",
        description: "Authoritative corporate websites designed to establish trust, showcase executive leadership, and present services clearly."
      },
      {
        title: "Modern Jamstack & Next.js Platforms",
        description: "Built on modern frameworks for instantaneous page loads, zero downtime, and exceptional Core Web Vitals scores."
      },
      {
        title: "High-Converting Landing Pages",
        description: "Targeted landing pages crafted for marketing campaigns, product launches, and high-intent lead generation."
      },
      {
        title: "E-Commerce & Online Catalogs",
        description: "Product showcases with secure checkout, inventory sync, multi-currency support, and smooth customer journeys."
      },
      {
        title: "Technical SEO & Schema Optimization",
        description: "Built-in structured data, OpenGraph tags, semantic HTML hierarchy, fast mobile performance, and XML sitemaps."
      },
      {
        title: "Website Redesign & Migration",
        description: "Upgrading legacy websites to modern responsive frameworks while preserving search rankings and domain equity."
      }
    ],
    keyBenefits: [
      "Sub-second load times that keep visitors engaged",
      "Seamless responsive performance on any screen resolution",
      "Built-in conversion points that capture qualified project enquiries",
      "Clean, scalable codebase that is easy to extend as your offerings grow"
    ],
    workflowProcess: [
      {
        step: "01",
        title: "Brand & Audience Discovery",
        description: "Understanding your target clientele, unique value proposition, and primary conversion objectives."
      },
      {
        step: "02",
        title: "Information Architecture & Wireframes",
        description: "Structuring page hierarchies, conversion pathways, content sections, and navigation flows."
      },
      {
        step: "03",
        title: "Visual UI/UX Design",
        description: "Crafting a clean, light, trustworthy corporate visual aesthetic aligned with your brand identity."
      },
      {
        step: "04",
        title: "Front-End Engineering",
        description: "Developing semantic, responsive, accessible components with Next.js, TypeScript, and Tailwind CSS."
      },
      {
        step: "05",
        title: "SEO, Performance & Launch",
        description: "Comprehensive audits for mobile responsiveness, Core Web Vitals, form delivery, and domain cutover."
      }
    ],
    targetAudiences: [
      "B2B service providers and tech companies seeking established corporate credibility",
      "Hotels, resorts, and tourism businesses wanting compelling visual presentation",
      "Manufacturing and industrial firms modernizing their digital footprint",
      "Growing startups needing professional digital platforms to attract investors and clients"
    ],
    faqs: [
      {
        question: "Is the website optimized for mobile phones and tablets?",
        answer: "Yes, every website we build is thoroughly tested across mobile screens (360px, 390px), tablets (768px), and desktops (1024px, 1440px+) to guarantee zero layout breakage."
      },
      {
        question: "Will our website be SEO-friendly?",
        answer: "Yes. We implement technical on-page SEO including semantic headings, meta tags, OpenGraph sharing cards, canonical URLs, XML sitemaps, and Organization structured data."
      },
      {
        question: "Can we easily update our blog posts and content?",
        answer: "Yes, we structure content cleanly so that blog posts, services, and company announcements can be updated effortlessly."
      }
    ],
    ctaText: "Request a Website Proposal"
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortTitle: "Digital Marketing",
    badge: "Brand Visibility",
    heroHeadline: "Build a Stronger Digital Presence for Your Business",
    heroSubheadline:
      "Strategic digital marketing, targeted Meta Ads campaigns, search visibility, and brand storytelling designed to connect your business with qualified prospects.",
    shortDescription:
      "Digital marketing strategy, Meta Ads management, organic search visibility (SEO), social media creative campaigns, and content planning.",
    iconName: "TrendingUp",
    overview:
      "A great product or service still needs to be seen by the right decision-makers. IraSoft Technologies provides practical, transparent digital marketing strategies focused on building brand authority, attracting relevant visitors, and generating qualified business enquiries without relying on inflated claims or wasted ad budgets.",
    businessProblemsSolved: [
      "Stops ad budget waste on generic, untargeted audiences that never convert.",
      "Builds steady organic visibility on search engines for high-intent business keywords.",
      "Establishes a consistent, professional brand presence across LinkedIn, Instagram, and social channels.",
      "Creates clear attribution and tracking so you know where your enquiries originate.",
      "Aligns creative content with the exact business problems your prospective clients face."
    ],
    capabilities: [
      {
        title: "Targeted Meta Ads Campaigns",
        description: "Structured campaigns on Facebook and Instagram targeted at business owners, local markets, and specific demographics."
      },
      {
        title: "Search Engine Optimization (SEO)",
        description: "On-page optimization, keyword architecture, Google Business Profile enhancement, and internal linking structures."
      },
      {
        title: "Social Media Strategy & Creatives",
        description: "Professional brand graphics, milestone announcements, service explainers, and consistent social calendars."
      },
      {
        title: "Content Planning & Thought Leadership",
        description: "Business-focused articles and case study narratives highlighting practical technology implementations."
      },
      {
        title: "Lead Generation & Funnel Optimization",
        description: "Optimizing the path from ad click to website landing page to submitted enquiry form."
      },
      {
        title: "Analytics & Campaign Reporting",
        description: "Clear monthly reports focusing on cost per lead, click-through rates, and inbound conversion volume."
      }
    ],
    keyBenefits: [
      "Transparent campaigns with honest performance reporting",
      "Targeted reach focused on genuine decision-makers",
      "Consistent, high-quality brand visuals across all touchpoints",
      "Integrated coordination with your website and conversion forms"
    ],
    workflowProcess: [
      {
        step: "01",
        title: "Audience & Competitor Audit",
        description: "Analyzing your target customer profile, geographical markets, and industry landscape."
      },
      {
        step: "02",
        title: "Channel & Funnel Strategy",
        description: "Defining the right marketing channels (Meta Ads, SEO, LinkedIn) and setting realistic budgets."
      },
      {
        step: "03",
        title: "Creative & Copy Production",
        description: "Designing professional ad visual assets and drafting benefit-driven messaging."
      },
      {
        step: "04",
        title: "Campaign Execution & A/B Testing",
        description: "Deploying targeted ads, testing different angles, and optimizing bids for maximum efficiency."
      },
      {
        step: "05",
        title: "Review & Continuous Iteration",
        description: "Analyzing lead quality, refining audience parameters, and scaling high-performing creatives."
      }
    ],
    targetAudiences: [
      "Hotels and resorts wanting to drive direct room bookings and corporate event enquiries",
      "Local service businesses looking to attract inquiries from their regional area",
      "B2B service providers building credibility and inbound leads",
      "Growing companies launching new products or software solutions"
    ],
    faqs: [
      {
        question: "Do you guarantee first-page Google rankings or overnight leads?",
        answer: "We do not make unrealistic or fabricated guarantees. Digital marketing requires consistent execution, proper audience targeting, and authentic value. We provide transparent strategies that build sustainable, measurable visibility."
      },
      {
        question: "What platforms do you run advertising on?",
        answer: "We primarily run campaigns across Meta (Facebook & Instagram) and search platforms, tailored to where your prospective customers spend their attention."
      },
      {
        question: "How do we track the results of our campaigns?",
        answer: "We set up conversion tracking pixels and analytics events so you can see exactly how many people viewed, clicked, and submitted enquiry forms."
      }
    ],
    ctaText: "Discuss Your Marketing Goals"
  },
  {
    id: "it-support",
    slug: "it-support",
    title: "IT Support & Technology Consulting",
    shortTitle: "IT Support & Consulting",
    badge: "Operational Reliability",
    heroHeadline: "Reliable Technology Support for Your Business",
    heroSubheadline:
      "Dependable technical guidance, proactive software maintenance, infrastructure assistance, and troubleshooting to keep your business running smoothly.",
    shortDescription:
      "Technical consultation, software maintenance, bug fixing, cloud deployment assistance, server monitoring, and IT infrastructure advisory.",
    iconName: "Headphones",
    overview:
      "Technology should empower your business, not introduce daily stress. When systems slow down, databases crash, or cloud deployments fail, your team loses valuable time. IraSoft Technologies serves as your dependable technical partner, providing proactive maintenance, architectural guidance, and rapid troubleshooting whenever technical issues arise.",
    businessProblemsSolved: [
      "Provides expert technical help without the cost of hiring a full-time in-house IT department.",
      "Prevents costly unexpected server downtime through proactive monitoring and updates.",
      "Solves critical bugs, slow response times, and database bottlenecks rapidly.",
      "Assists non-technical business owners in choosing the right software tools and cloud hosting.",
      "Ensures business data is safely backed up and recovery procedures are documented."
    ],
    capabilities: [
      {
        title: "Strategic Technology Consulting",
        description: "Objective advice on software architecture, tool selection, vendor assessments, and technical roadmaps."
      },
      {
        title: "Software Maintenance & Bug Resolution",
        description: "Investigating errors, fixing broken workflows, and optimizing database queries in existing applications."
      },
      {
        title: "Cloud & Deployment Support",
        description: "Configuring VPS servers, Vercel, AWS, domain DNS records, SSL certificates, and transactional email deliverability."
      },
      {
        title: "Data Backup & Recovery Planning",
        description: "Automated database backups, disaster recovery protocols, and routine snapshot verifications."
      },
      {
        title: "Third-Party Integration Troubleshooting",
        description: "Diagnosing failed webhooks, broken payment gateway connections, and API schema discrepancies."
      },
      {
        title: "Performance & Security Audits",
        description: "Reviewing server load, memory usage, unpatched dependencies, and firewall configurations."
      }
    ],
    keyBenefits: [
      "Peace of mind knowing experienced developers are on call",
      "Reduced system downtime and faster resolution of technical glitches",
      "Cost-effective alternative to maintaining full-time infrastructure staff",
      "Unbiased, business-first recommendations tailored to your budget"
    ],
    workflowProcess: [
      {
        step: "01",
        title: "Technical Discovery & Audit",
        description: "Reviewing your current infrastructure, code repositories, hosting accounts, and critical dependencies."
      },
      {
        step: "02",
        title: "Issue Prioritization",
        description: "Categorizing urgent fixes, security vulnerabilities, and long-term stability improvements."
      },
      {
        step: "03",
        title: "Remediation & Patching",
        description: "Resolving immediate bugs, applying security patches, and optimizing configuration files."
      },
      {
        step: "04",
        title: "Monitoring & Documentation",
        description: "Setting up uptime monitors, error tracking, and documenting critical operational procedures."
      },
      {
        step: "05",
        title: "Ongoing Advisory",
        description: "Periodic health checks, performance reviews, and consultation on upcoming technical investments."
      }
    ],
    targetAudiences: [
      "Small and medium enterprises needing dependable on-demand technical support",
      "Companies with existing software requiring ongoing maintenance and feature tweaks",
      "Business owners planning to migrate servers or implement new digital systems",
      "Startups needing cloud architecture and deployment assistance"
    ],
    faqs: [
      {
        question: "Can IraSoft maintain software that was originally built by another vendor?",
        answer: "Yes, we frequently audit and assume maintenance of existing applications. We first conduct a code review and architecture inspection to document its structure."
      },
      {
        question: "Do you assist with domain configuration, DNS, and corporate emails?",
        answer: "Yes, we handle domain connections, DNS records (SPF, DKIM, DMARC for email deliverability), SSL certificates, and hosting setup."
      },
      {
        question: "How do we report urgent technical issues?",
        answer: "You can reach our team directly via email or our priority WhatsApp support channel for immediate assistance."
      }
    ],
    ctaText: "Talk to Our Technical Team"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
