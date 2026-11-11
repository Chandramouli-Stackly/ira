import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { constructMetadata } from "@/lib/seo/metadata";
import { getServiceSchema } from "@/lib/seo/schema";
import {
  Boxes,
  Hotel,
  Code2,
  Cpu,
  Globe,
  TrendingUp,
  Headphones,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { COMPANY } from "@/data/company";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const SERVICE_SCREENSHOTS: Record<
  string,
  { src: string; caption: string; objectPosition?: string }
> = {
  "hotel-management": {
    src: "/images/projects/hotel-calendar-matrix.jpg",
    caption: "Live Room Availability Grid & Housekeeping Status (Mouli Hotels & Resorts)",
    objectPosition: "object-top",
  },
  "odoo-erp": {
    src: "/images/projects/odoo-erp-app-suite.jpg",
    caption: "Connected 25+ Odoo ERP Application Suite configured by IraSoft",
    objectPosition: "object-top",
  },
  "custom-software": {
    src: "/images/brand/social-launch-laptop.jpg",
    caption: "Bespoke Business Application Architecture & Tailored Portal Systems",
    objectPosition: "object-center",
  },
  "ai-automation": {
    src: "/images/brand/social-launch-globe.jpg",
    caption: "AI Process Automation, Intelligent Document Processing & Cognitive Agents",
    objectPosition: "object-center",
  },
  "web-development": {
    src: "/images/projects/resort-booking-portal.jpg",
    caption: "Beachfront Luxury Resort Booking Portal (RB Resorts Chirala)",
    objectPosition: "object-top",
  },
  "digital-marketing": {
    src: "/images/hero/hero-banner-innovating.jpg",
    caption: "Performance-Driven Meta Ads Strategy, Search Engine Optimization & Growth Analytics",
    objectPosition: "object-center",
  },
  "it-support": {
    src: "/images/hero/hero-banner-mountain.jpg",
    caption: "Reliable Cloud Infrastructure, 24/7 Server Monitoring & Technical Advisory",
    objectPosition: "object-center",
  },
};

const SERVICE_GALLERIES: Record<string, { src: string; caption: string }[]> = {
  "hotel-management": [
    {
      src: "/images/projects/hotel-calendar-matrix.jpg",
      caption: "Interactive 30-Day Room Availability Calendar & Cleaning Status Grid",
    },
    {
      src: "/images/projects/hotel-reservations-kanban.jpg",
      caption: "Real-Time Reservation Pipeline & Booking Channel Management",
    },
    {
      src: "/images/projects/hotel-executive-flash-report.jpg",
      caption: "Executive Daily Flash Report: Occupancy, ADR, RevPAR & Net Revenue",
    },
    {
      src: "/images/projects/hotel-police-compliance-kanban.png",
      caption: "Guest Verification Registry & Police Station Compliance Board",
    },
    {
      src: "/images/projects/hotel-frontdesk-menu.png",
      caption: "Front Desk Rapid Dispatch: Arrivals, In-House Guests, & Shift Cashiering",
    },
    {
      src: "/images/projects/hotel-housekeeping-menu.png",
      caption: "Housekeeping Operations & Morning Room Turnover Sheet",
    },
  ],
  "odoo-erp": [
    {
      src: "/images/projects/odoo-erp-app-suite.jpg",
      caption: "Unified 25+ Odoo ERP Enterprise Business Modules Suite",
    },
    {
      src: "/images/projects/odoo-payroll-employee-slips.jpg",
      caption: "Multi-Department Employee Payroll Batches & Salary Computation",
    },
    {
      src: "/images/projects/odoo-salary-computation-slip.jpg",
      caption: "Automated Salary Rule Calculation Engine & Tax Deduction Breakdowns",
    },
    {
      src: "/images/projects/odoo-payslip-batches.png",
      caption: "Batch Payslip Generation, Verification & PDF Slip Distribution",
    },
  ],
  "custom-software": [
    {
      src: "/images/brand/social-launch-laptop.jpg",
      caption: "Bespoke Business Application Architecture & Tailored Portal Systems",
    },
    {
      src: "/images/projects/hotel-police-compliance-kanban.png",
      caption: "Custom Web Application: Law Enforcement Regulatory Registry & Verification",
    },
    {
      src: "/images/projects/odoo-salary-computation-slip.jpg",
      caption: "Custom Rule Engine: Dynamic Multi-Parameter Calculations & Invoicing Logic",
    },
    {
      src: "/images/projects/odoo-payslip-batches.png",
      caption: "Workflow Automation: Automated Status Transitions & Batch Processing",
    },
  ],
  "ai-automation": [
    {
      src: "/images/brand/social-launch-globe.jpg",
      caption: "Intelligent AI Process Automation, Cognitive Agents & Knowledge Retrieval",
    },
    {
      src: "/images/hero/hero-banner-innovating.jpg",
      caption: "AI Neural Processing, Smart Document Pipelines & Cloud Architecture",
    },
    {
      src: "/images/brand/social-launch-laptop.jpg",
      caption: "Enterprise AI Integration: Natural Language Interfaces for Business Teams",
    },
  ],
  "web-development": [
    {
      src: "/images/projects/resort-booking-portal.jpg",
      caption: "Luxury Beachfront Resort Booking Portal & Direct Reservation Engine",
    },
    {
      src: "/images/projects/hotel-calendar-matrix.jpg",
      caption: "High-Performance Next.js Frontend Synchronized with Live Backend Availability",
    },
    {
      src: "/images/brand/social-launch-laptop.jpg",
      caption: "Responsive Corporate Digital Platforms Built for Sub-Second Speed & Conversions",
    },
  ],
  "digital-marketing": [
    {
      src: "/images/hero/hero-banner-innovating.jpg",
      caption: "Performance-Driven Meta Ads Strategy & Data-Driven Growth Marketing",
    },
    {
      src: "/images/hero/hero-banner-skyline.jpg",
      caption: "Modern Digital Visibility, B2B Audience Targeting & Lead Generation",
    },
    {
      src: "/images/brand/social-launch-globe.jpg",
      caption: "Integrated Digital Campaigns Across Web, Meta, and Organic Search",
    },
  ],
  "it-support": [
    {
      src: "/images/hero/hero-banner-mountain.jpg",
      caption: "Reliable Cloud Infrastructure, IT Consulting & 24/7 Monitoring",
    },
    {
      src: "/images/brand/social-launch-laptop.jpg",
      caption: "Comprehensive Technical Consulting & Secure Application Maintenance",
    },
    {
      src: "/images/hero/hero-banner-innovating.jpg",
      caption: "Scalable Cloud Hosting, Server Patching & Disaster Recovery Protocols",
    },
  ],
};

const ICON_MAP: Record<string, React.ElementType> = {
  Boxes,
  Hotel,
  Code2,
  Cpu,
  Globe,
  TrendingUp,
  Headphones,
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const seoData: Record<
    string,
    { title: string; description: string; keywords: string[] }
  > = {
    "odoo-erp": {
      title: "Odoo ERP Development & Customization Company | IraSoft Technologies",
      description:
        "Expert Odoo ERP implementation, custom module development, accounting, multi-warehouse inventory, and workflow automation by IraSoft Technologies.",
      keywords: [
        "Odoo ERP Development Company",
        "Odoo ERP Customization India",
        "Odoo Implementation Partner",
        "Custom Odoo Module Development",
        "Odoo Warehouse and Inventory Management",
        "Odoo ERP Consulting Services",
      ],
    },
    "hotel-management": {
      title: "Hotel & Resort Management Software Solutions (PMS) | IraSoft Technologies",
      description:
        "Comprehensive hotel and resort property management system (PMS) covering room availability calendar, front desk check-in, housekeeping boards, guest folios, and daily revenue flash reports.",
      keywords: [
        "Hotel Management Software Company",
        "Resort Management Software India",
        "Hotel PMS System Solutions",
        "Front Desk Hotel Reservation Software",
        "Housekeeping Room Turnover Software",
        "Hotel Management Suite India",
      ],
    },
    "custom-software": {
      title: "Custom Software Development Company | IraSoft Technologies",
      description:
        "Bespoke business applications, web portals, workflow engines, and enterprise database software engineered for your unique business workflows.",
      keywords: [
        "Custom Software Development Company",
        "Bespoke Software Development India",
        "Enterprise Web Application Development",
        "Business Portal Development",
        "Custom Software Engineering Services",
      ],
    },
    "ai-automation": {
      title: "AI Automation & Intelligent Document Processing Solutions | IraSoft Technologies",
      description:
        "Transform business workflows with custom AI assistants, automated invoice extraction, private enterprise knowledge search (RAG), and autonomous task agents.",
      keywords: [
        "AI Automation Services India",
        "Intelligent Document Processing",
        "AI Invoice Extraction",
        "Enterprise AI Solutions",
        "AI Process Automation Company",
      ],
    },
    "web-development": {
      title: "Corporate Website Development Company | Next.js & React | IraSoft Technologies",
      description:
        "High-performance Jamstack corporate websites, e-commerce portals, and web applications engineered for sub-second speed, Google search ranking, and lead conversion.",
      keywords: [
        "Corporate Website Development Company",
        "Next.js Development Company",
        "Professional Website Design India",
        "Custom Web Application Development",
        "High Speed Corporate Websites",
      ],
    },
    "digital-marketing": {
      title: "Digital Marketing & Meta Ads Management Services | IraSoft Technologies",
      description:
        "Targeted Meta (Facebook & Instagram) ad campaigns, search engine optimization (SEO), brand storytelling, and high-converting lead generation funnels.",
      keywords: [
        "Digital Marketing Services India",
        "Meta Ads Management",
        "B2B Lead Generation Company",
        "SEO Services for Businesses",
        "Social Media Marketing Strategy",
      ],
    },
    "it-support": {
      title: "IT Support & Technology Consulting Services | IraSoft Technologies",
      description:
        "Dependable technical consulting, server maintenance, cloud deployments, software troubleshooting, and ongoing application support for growing businesses.",
      keywords: [
        "IT Support Company",
        "Technology Consulting Services",
        "Cloud Deployment Support",
        "Software Maintenance Services",
        "Server Troubleshooting Support",
      ],
    },
  };

  const currentSeo = seoData[service.slug] || {
    title: `${service.title} | ${COMPANY.name}`,
    description: service.shortDescription,
    keywords: [],
  };

  return constructMetadata({
    title: currentSeo.title,
    description: currentSeo.description,
    keywords: currentSeo.keywords,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = ICON_MAP[service.iconName] || Code2;
  const serviceScreenshot = SERVICE_SCREENSHOTS[service.slug];
  const serviceGallery = SERVICE_GALLERIES[service.slug];
  const serviceSchema = getServiceSchema({
    name: service.title,
    description: service.shortDescription,
    serviceType: service.badge,
    url: `/services/${service.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-surface via-white to-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className={serviceScreenshot ? "lg:col-span-7" : "lg:col-span-12 max-w-3xl"}>
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge variant="teal">{service.badge}</Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.heroSubheadline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="teal"
                  size="lg"
                  className="group"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  href="#capabilities"
                  variant="outline"
                  size="lg"
                >
                  <span>Explore Capabilities</span>
                </Button>
              </div>
            </div>

            {serviceScreenshot && (
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group">
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={serviceScreenshot.src}
                      alt={service.title}
                      fill
                      priority
                      className={`object-cover ${serviceScreenshot.objectPosition || "object-center"} group-hover:scale-[1.02] transition-transform duration-300`}
                    />
                  </div>
                  <div className="p-3 bg-brand-navy text-[11px] text-teal-300 border-t border-slate-800 flex items-center justify-between">
                    <span className="font-semibold line-clamp-1">{serviceScreenshot.caption}</span>
                    <span className="text-[10px] bg-teal-950/80 text-teal-300 border border-teal-800/60 px-2 py-0.5 rounded font-mono uppercase tracking-wider ml-2 flex-shrink-0">
                      Live Preview
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Overview & Problems Solved */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: What is this & Overview */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                Service Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                What We Build & Why It Matters
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {service.overview}
              </p>

              {/* Key Benefits */}
              <div className="pt-4">
                <h3 className="text-sm font-bold text-brand-navy mb-3">
                  Key Strategic Benefits:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.keyBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-2.5 bg-brand-surface p-3.5 rounded-lg border border-slate-200/60"
                    >
                      <Sparkles className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Business Problems Solved */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-brand-navy font-bold text-lg">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Business Challenges Solved</span>
              </div>
              <ul className="space-y-3">
                {service.businessProblemsSolved.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-brand-surface border-y border-slate-200/70">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Detailed Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mt-2">
              Capabilities & Specialized Modules
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every business has nuanced requirements. Here is a breakdown of what we can engineer and configure for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle hover:border-brand-teal/70 hover:shadow-card transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Live Interface & Implementation Showcase */}
      {serviceGallery && serviceGallery.length > 0 && (
        <section className="py-20 bg-white border-b border-slate-200/70">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                Real Implementations
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-2">
                Live Interfaces & Implementation Previews
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Click any implementation preview below to inspect actual interfaces, dashboards, and operational architectures configured by IraSoft.
              </p>
            </div>

            <ImageLightbox images={serviceGallery} />
          </Container>
        </section>
      )}

      {/* Engagement Workflow Process */}
      <section className="py-20 bg-brand-surface/40">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Engagement Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-2">
              How We Deliver Your Project
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Our structured step-by-step engagement process ensures predictable outcomes and seamless delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.workflowProcess.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle flex flex-col justify-start h-full"
              >
                <span className="text-xs font-mono font-bold text-brand-teal bg-teal-50 px-2.5 py-1 rounded w-fit">
                  Phase {step.step}
                </span>
                <h3 className="mt-3 font-bold text-brand-navy text-base">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service-Specific FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-20 bg-brand-surface border-t border-slate-200/70">
          <Container size="narrow">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                Common Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-2">
                Frequently Asked Questions About {service.shortTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle"
                >
                  <h3 className="font-bold text-brand-navy text-base flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Conversion Banner */}
      <section className="py-16 bg-brand-navy text-white">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to Discuss Your {service.shortTitle} Project?
            </h2>
            <p className="text-slate-300 text-sm">
              Contact our engineering team to review your requirements and receive a structured consultation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="teal"
                size="lg"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href={COMPANY.phone.whatsappUrl}
                variant="outline"
                size="lg"
                isExternal
                className="bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                Discuss on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

