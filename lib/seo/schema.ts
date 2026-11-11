import { COMPANY } from "@/data/company";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.websiteUrl,
    logo: `${COMPANY.websiteUrl}/images/brand/irasoft-logo.jpg`,
    slogan: COMPANY.tagline,
    email: COMPANY.emails.enquiry,
    telephone: COMPANY.phone.raw,
    sameAs: [
      COMPANY.social.linkedin,
      COMPANY.social.instagram,
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phone.raw,
        contactType: "customer support",
        email: COMPANY.emails.enquiry,
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.websiteUrl,
    description: COMPANY.tagline,
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
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
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.websiteUrl,
    },
    url: `${COMPANY.websiteUrl}${url}`,
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

