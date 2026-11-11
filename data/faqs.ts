export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What services does IraSoft Technologies provide?",
    answer:
      "IraSoft Technologies provides end-to-end technology solutions including Custom Software Development, Odoo ERP Implementation and Customization, Hotel & Resort Management Software, AI & Intelligent Automation, Professional Website Development, Digital Marketing, and ongoing IT Support & Technology Consulting.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "Does IraSoft develop custom software?",
    answer:
      "Yes. We design and build bespoke business applications, internal management portals, workflow automation engines, and custom APIs from scratch, tailored precisely to your company's unique operational requirements and data models.",
    category: "software"
  },
  {
    id: "faq-3",
    question: "Can IraSoft customize Odoo ERP?",
    answer:
      "Yes, we specialize in both Odoo Community and Enterprise editions. Our team handles standard module setup, custom Python module development, automated approval workflows, third-party API integrations, and database migrations for sales, inventory, accounting, CRM, and HR.",
    category: "erp"
  },
  {
    id: "faq-4",
    question: "Do you provide hotel and resort management software?",
    answer:
      "Yes. We offer connected hotel and resort management solutions covering front desk operations, real-time room availability, reservations, guest check-in/check-out, housekeeping boards, inventory tracking, guest folios, and management revenue dashboards.",
    category: "hospitality"
  },
  {
    id: "faq-5",
    question: "Can you develop AI-powered business applications?",
    answer:
      "Yes. We engineer practical AI solutions including automated document extraction (parsing invoices and contracts), private enterprise knowledge search (RAG), conversational client assistants, and autonomous workflow bots, all with strict data confidentiality.",
    category: "ai"
  },
  {
    id: "faq-6",
    question: "Do you develop websites for startups and established businesses?",
    answer:
      "Yes. We build high-performance corporate websites, small business platforms, portfolio portals, e-commerce stores, and high-converting landing pages using modern Next.js and React technology optimized for mobile responsiveness and Google search ranking.",
    category: "web"
  },
  {
    id: "faq-7",
    question: "Can you integrate software with existing business systems?",
    answer:
      "Yes. We develop secure REST and GraphQL API connectors to integrate your software with payment gateways, SMS/WhatsApp notification services, courier tracking systems, legacy accounting packages, and external databases.",
    category: "integration"
  },
  {
    id: "faq-8",
    question: "Do you provide ongoing maintenance and technical support?",
    answer:
      "Yes. We provide continuous technical support, server monitoring, bug fixes, security updates, and performance tuning to ensure your applications and websites remain secure and operate without downtime.",
    category: "support"
  },
  {
    id: "faq-9",
    question: "How can I request a project quotation?",
    answer:
      "You can submit your project requirements through our online enquiry form on the Contact page, email us directly at enquiry@irasofttech.in, or reach our team via WhatsApp at +91 82470 30301. We review your requirements and provide a structured scope and proposal.",
    category: "pricing"
  },
  {
    id: "faq-10",
    question: "How does the project development process work?",
    answer:
      "We follow a transparent 5-step process: Discover (understanding your requirements and business goals), Plan (defining scope, milestones, and architecture), Design (preparing intuitive wireframes and schemas), Develop (iterative engineering and testing), and Launch & Support (deployment, staff onboarding, and ongoing maintenance).",
    category: "process"
  }
];

