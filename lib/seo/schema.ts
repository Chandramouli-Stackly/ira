import { COMPANY } from "@/data/company";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${COMPANY.websiteUrl}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    alternateName: [
      "IraSoft Tech",
      "Ira Soft Technologies",
      "Ira Soft Tech",
      "IraSoft",
      "IraSoftTech",
      "IraSoft Technologies India",
    ],
    url: COMPANY.websiteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${COMPANY.websiteUrl}/#logo`,
      url: `${COMPANY.websiteUrl}/images/brand/irasoft-logo.jpg`,
      caption: `${COMPANY.name} - ${COMPANY.tagline}`,
      width: 512,
      height: 512,
    },
    image: `${COMPANY.websiteUrl}/images/brand/irasoft-logo.jpg`,
    slogan: COMPANY.tagline,
    description:
      "IraSoft Technologies (IraSoft Tech) is a premier technology solutions and custom software development company specializing in Odoo ERP development, hotel & resort management systems, AI-powered automation, and high-performance web platforms.",
    email: COMPANY.emails.enquiry,
    telephone: COMPANY.phone.raw,
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Andhra Pradesh",
      },
      {
        "@type": "AdministrativeArea",
        name: "Telangana",
      },
    ],
    knowsAbout: [
      "Custom Software Development",
      "Odoo ERP Implementation & Customization",
      "Hotel & Resort Management Software (PMS)",
      "Hospitality Front Desk & Reservation Systems",
      "AI & Intelligent Workflow Automation",
      "Document Extraction & Natural Language Processing",
      "Corporate Website Development (Next.js & React)",
      "Digital Marketing & Meta Ads",
      "Enterprise IT Support & Technology Consulting",
    ],
    sameAs: [
      COMPANY.social.linkedin,
      COMPANY.social.instagram,
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phone.raw,
        contactType: "customer service",
        email: COMPANY.emails.enquiry,
        availableLanguage: ["English", "Hindi", "Telugu"],
        contactOption: "TollFree",
      },
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY.websiteUrl}/#website`,
    name: "IraSoft Technologies",
    alternateName: [
      "IraSoft Tech",
      "Ira Soft Technologies",
      "IraSoft",
      "irasofttech.in",
    ],
    url: COMPANY.websiteUrl,
    description: COMPANY.tagline,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${COMPANY.websiteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${COMPANY.websiteUrl}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getServiceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${COMPANY.websiteUrl}${url}#service`,
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      "@id": `${COMPANY.websiteUrl}/#organization`,
      name: COMPANY.name,
      url: COMPANY.websiteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Offerings`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        },
      ],
    },
    url: `${COMPANY.websiteUrl}${url}`,
  };
}

export function getFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.websiteUrl}${item.url}`,
    })),
  };
}
