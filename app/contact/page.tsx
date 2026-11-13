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
      <section className="py-16 sm:py-20 bg-transparent border-b border-slate-200/60">
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
      <section className="py-16 sm:py-20 bg-white/40">
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
                <div className="bg-white/95 rounded-2xl p-6 border border-slate-200/90 shadow-subtle">
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
                <div className="bg-white/95 rounded-2xl p-6 border border-slate-200/90 shadow-subtle space-y-4">
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
                <div className="bg-white/95 rounded-2xl p-6 border border-slate-200/90 shadow-subtle">
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

                {/* Official Social Media */}
                <div className="bg-white/95 rounded-2xl p-6 border border-slate-200/90 shadow-subtle">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                    Official Social Channels
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={COMPANY.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#0A66C2] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0A66C2] text-xs font-semibold transition-all shadow-subtle group"
                    >
                      <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22a1.62 1.62 0 0 0-1.62 1.62c0 .9.72 1.63 1.62 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z" />
                      </svg>
                      <span>LinkedIn Profile</span>
                      <span className="text-slate-400 group-hover:text-white">→</span>
                    </a>

                    <a
                      href={COMPANY.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-700 hover:text-white border border-slate-200 hover:border-transparent text-xs font-semibold transition-all shadow-subtle group"
                    >
                      <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span>Instagram Page</span>
                      <span className="text-slate-400 group-hover:text-white">→</span>
                    </a>
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
            <div className="lg:col-span-7 bg-white/95 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
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

