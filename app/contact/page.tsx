import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/data/company";
import { constructMetadata } from "@/lib/seo/metadata";
import { Mail, Phone, Globe, MessageSquare, ShieldCheck, Clock } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact IraSoft Technologies | Discuss Your Project",
  description:
    "Get in touch with IraSoft Technologies. Request a consultation for custom software development, Odoo ERP implementation, hotel management systems, or AI automation.",
  path: "/contact",
});

interface ContactPageProps {
  searchParams?: {
    service?: string;
  };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const initialService = searchParams?.service || "";

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-surface via-white to-white border-b border-slate-100">
        <Container className="text-center">
          <Badge variant="teal">Direct Consultation</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy max-w-3xl mx-auto">
            Let&apos;s Discuss Your Next Project
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you need a business website, custom software, Odoo ERP
            implementation, hotel management system, or AI-powered automation, tell
            us about your requirements. We&apos;ll help you explore the right solution.
          </p>
        </Container>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">
                  Get in Direct Touch
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Have an enquiry or want to discuss technical feasibility? You can reach our team through our official communication channels:
                </p>
              </div>

              {/* Official Contact Cards */}
              <div className="space-y-4">
                {/* Official Phone / WhatsApp */}
                <div className="bg-brand-surface rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                        Official Phone
                      </span>
                      <a
                        href={`tel:${COMPANY.phone.raw}`}
                        className="text-base font-bold text-brand-navy hover:text-brand-teal transition-colors"
                      >
                        {COMPANY.phone.display}
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Available for phone inquiries and technical discussion.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <a
                      href={COMPANY.phone.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat Directly on WhatsApp →</span>
                    </a>
                  </div>
                </div>

                {/* Official Emails */}
                <div className="bg-brand-surface rounded-2xl p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-navy flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                        Official Emails
                      </span>
                      <span className="text-xs text-slate-500">
                        Reviewed daily by our consulting desk
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm pt-1">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Project Enquiries:</span>
                      <a
                        href={`mailto:${COMPANY.emails.enquiry}`}
                        className="text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors"
                      >
                        {COMPANY.emails.enquiry}
                      </a>
                    </div>

                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Executive Office:</span>
                      <a
                        href={`mailto:${COMPANY.emails.ceo}`}
                        className="text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors"
                      >
                        {COMPANY.emails.ceo}
                      </a>
                    </div>

                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Alternate Inquiries:</span>
                      <a
                        href={`mailto:${COMPANY.emails.gmail}`}
                        className="text-sm font-medium text-slate-600 hover:text-brand-teal transition-colors"
                      >
                        {COMPANY.emails.gmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Website */}
                <div className="bg-brand-surface rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                        Official Domain
                      </span>
                      <a
                        href={COMPANY.websiteUrl}
                        className="text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors"
                      >
                        {COMPANY.websiteUrl}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="p-5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-teal-dark">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Response Commitment</span>
                </div>
                <p>
                  We treat all project briefs with strict confidentiality. A technical consultant will review your scope and respond within 1 business day.
                </p>
              </div>
            </div>

            {/* Right Column: Project Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-brand-navy">
                  Send Project Enquiry
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Fill out the form below with your project details and timeline.
                </p>
              </div>

              <ContactForm initialService={initialService} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
