import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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

  const titles: Record<string, string> = {
    "odoo-erp": "Odoo ERP Development & Customization Services",
    "hotel-management": "Hotel & Resort Management Software Solutions",
    "custom-software": "Custom Software Development Services",
    "ai-automation": "AI Automation & Intelligent Business Solutions",
    "web-development": "Professional Website Development Services",
    "digital-marketing": "Digital Marketing Services for Growing Businesses",
    "it-support": "IT Support & Technology Consulting",
  };

  return constructMetadata({
    title: titles[service.slug] || `${service.title} | ${COMPANY.name}`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = ICON_MAP[service.iconName] || Code2;
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
          <div className="max-w-3xl">
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
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle hover:border-brand-teal/70 hover:shadow-card transition-all"
              >
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
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement Workflow Process */}
      <section className="py-20 bg-white">
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
                className="bg-brand-surface rounded-xl p-6 border border-slate-200"
              >
                <span className="text-xs font-mono font-bold text-brand-teal bg-teal-50 px-2.5 py-1 rounded">
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
