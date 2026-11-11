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

  const defaultKeywords = [
    "IraSoft Technologies",
    "Software Development Company",
    "Custom Software Development",
    "Odoo ERP Development",
    "Hotel Management Software",
    "AI Automation Services",
    "Website Development Company",
    "Business Automation Solutions",
    "IT Support & Technology Consulting"
  ];

  return {
    title: fullTitle,
    description,
    keywords: Array.from(new Set([...keywords, ...defaultKeywords])),
    metadataBase: new URL(COMPANY.websiteUrl),
    alternates: {
      canonical: url,
    },
    authors: [{ name: COMPANY.name }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
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
