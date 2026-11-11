import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { COMPANY } from "@/data/company";
import { constructMetadata } from "@/lib/seo/metadata";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: `${COMPANY.name} | Custom Software, Odoo ERP & AI Solutions`,
  description:
    "IraSoft Technologies delivers custom software development, Odoo ERP customization, hotel management software, AI automation, website development, and digital solutions for growing businesses.",
  path: "/",
});

export const viewport: Viewport = {
  themeColor: "#142B4A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/brand/irasoft-logo.jpg" />
        <link rel="apple-touch-icon" href="/images/brand/irasoft-logo.jpg" />
        {/* Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-brand-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

