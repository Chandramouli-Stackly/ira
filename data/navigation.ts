export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
  children?: {
    name: string;
    href: string;
    description: string;
    iconName?: string;
    badge?: string;
  }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Odoo ERP Development",
        href: "/services/odoo-erp",
        description: "ERP implementation, custom modules, accounting, inventory, and sales automation.",
        iconName: "Boxes"
      },
      {
        name: "Hotel & Resort Software",
        href: "/services/hotel-management",
        description: "Connected front desk, room reservations, housekeeping, and guest billing.",
        iconName: "Hotel",
        badge: "Featured"
      },
      {
        name: "Custom Software",
        href: "/services/custom-software",
        description: "Tailor-made web applications, internal company portals, and workflow engines.",
        iconName: "Code2"
      },
      {
        name: "AI & Automation",
        href: "/services/ai-automation",
        description: "Intelligent document processing, AI assistants, and automated workflows.",
        iconName: "Cpu"
      },
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "High-performance corporate websites, platforms, and landing pages.",
        iconName: "Globe"
      },
      {
        name: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Targeted Meta Ads, SEO optimization, brand presence, and lead acquisition.",
        iconName: "TrendingUp"
      },
      {
        name: "IT Support & Consulting",
        href: "/services/it-support",
        description: "Technical consulting, software maintenance, bug fixing, and cloud deployment.",
        iconName: "Headphones"
      }
    ]
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      {
        name: "Hotel & Resort System",
        href: "/solutions/hotel-management-system",
        description: "Comprehensive hospitality operational platform for modern properties.",
        iconName: "Building",
        badge: "Flagship"
      },
      {
        name: "Enterprise ERP System",
        href: "/solutions/enterprise-erp",
        description: "Unified master data, procurement, multi-warehouse, and accounts.",
        iconName: "Layers"
      },
      {
        name: "AI Workflow Automation",
        href: "/solutions/ai-workflow-automation",
        description: "Automate manual document entry and routine business tasks.",
        iconName: "Zap"
      }
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" }
];

export const FOOTER_LINKS = {
  services: [
    { name: "Odoo ERP Development", href: "/services/odoo-erp" },
    { name: "Hotel & Resort Software", href: "/services/hotel-management" },
    { name: "Custom Software Development", href: "/services/custom-software" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Website Development", href: "/services/web-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "IT Support & Consulting", href: "/services/it-support" }
  ],
  solutions: [
    { name: "Hotel Operations Platform", href: "/solutions/hotel-management-system" },
    { name: "Enterprise ERP Solutions", href: "/solutions/enterprise-erp" },
    { name: "AI Document Processing", href: "/solutions/ai-workflow-automation" },
    { name: "Multi-Warehouse Management", href: "/services/odoo-erp" }
  ],
  company: [
    { name: "About IraSoft", href: "/about" },
    { name: "Industries We Serve", href: "/industries" },
    { name: "Project Portfolio", href: "/portfolio" },
    { name: "Technology Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Our Team", href: "/contact" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" }
  ]
};

