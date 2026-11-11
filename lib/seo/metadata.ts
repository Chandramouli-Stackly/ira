import { Metadata } from "next";
import { COMPANY } from "@/data/company";

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}

export function constructMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = "/images/brand/irasoft-logo.jpg",
}: PageSeoProps): Metadata {
  const url = `${COMPANY.websiteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = title.includes(COMPANY.name) ? title : `${title} | ${COMPANY.name}`;

  const brandKeywords = [
    "IraSoft Technologies",
    "IraSoft Tech",
    "Ira Soft Technologies",
    "Ira Soft Tech",
    "IraSoft",
    "Ira Soft",
    "irasofttech.in",
    "irasofttech",
  ];

  const serviceKeywords = [
    "Odoo ERP Development Company",
    "Odoo ERP Customization India",
    "Odoo Implementation Partner",
    "Custom Odoo Module Development",
    "Hotel Management Software Company",
    "Resort Management Software India",
    "Hotel PMS Software Solutions",
    "Hospitality Management System",
    "Custom Software Development Company",
    "Enterprise Software Solutions",
    "AI Automation Services",
    "Intelligent Document Processing",
    "AI Business Automation",
    "Website Development Company",
    "Corporate Website Design",
    "Next.js Development Company",
    "Digital Marketing Services India",
    "Meta Ads Management",
    "IT Support & Technology Consulting",
    "Software Company in Andhra Pradesh",
    "Top Software Company India",
  ];

  const allKeywords = Array.from(new Set([...keywords, ...brandKeywords, ...serviceKeywords]));

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    metadataBase: new URL(COMPANY.websiteUrl),
    alternates: {
      canonical: url,
    },
    applicationName: "IraSoft Technologies",
    category: "technology",
    authors: [{ name: "IraSoft Technologies", url: COMPANY.websiteUrl }],
    creator: "IraSoft Technologies",
    publisher: "IraSoft Technologies",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "IraSoft Technologies",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} - ${COMPANY.tagline}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@irasofttech",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
