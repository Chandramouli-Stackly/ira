import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { COMPANY } from "@/data/company";
import { constructMetadata } from "@/lib/seo/metadata";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "IraSoft Technologies | Custom Software, Odoo ERP & Hotel Management Software",
    description:
      "IraSoft Technologies (IraSoft Tech) is a premier technology partner delivering custom software development, Odoo ERP customization, hotel & resort management systems (PMS), AI automation, and modern web platforms for growing businesses.",
    path: "/",
    keywords: [
      "IraSoft Technologies",
      "IraSoft Tech",
      "Ira Soft Technologies",
      "Ira Soft Tech",
      "IraSoft",
      "irasofttech.in",
      "Odoo ERP Development Company",
      "Hotel Management Software Company",
      "Resort Management Software India",
      "Custom Software Development India",
      "AI Automation Services",
    ],
  }),
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
};

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="apple-mobile-web-app-title" content="IraSoft Technologies" />
        {/* Google Site Name & Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite JSON-LD Schema with SearchAction */}
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
