import React from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { COMPANY } from "@/data/company";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Terms & Conditions | IraSoft Technologies",
  description:
    "Review the terms of use for the IraSoft Technologies corporate website and online enquiry services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

      <section className="py-16 sm:py-20 bg-white">
        <Container size="narrow">
          <Badge variant="neutral">Terms of Use</Badge>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Last Updated: November 2026
          </p>

          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 leading-relaxed">
            <strong>Notice:</strong> These Terms and Conditions govern the preliminary use of the IraSoft Technologies website. Formal commercial engagements are governed by separate Master Service Agreements (MSA) and Statements of Work (SOW).
          </div>

          <div className="mt-10 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website ({COMPANY.domain}), you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please discontinue use of this site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                2. Intellectual Property Rights
              </h2>
              <p>
                All brand marks, logos, visual layouts, text, and graphics displayed on this website are the intellectual property of {COMPANY.legalName} or used with proper authorization. You may not reproduce, redistribute, or reverse engineer any materials without explicit written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                3. Informational Nature of Website Content
              </h2>
              <p>
                The information, architectural overviews, and service descriptions presented on this website are for informational purposes. They do not constitute a binding technical warranty or unilateral service-level agreement. Official deliverables, timelines, and payment terms are defined exclusively in signed project proposals and contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                4. User Submissions & Enquiries
              </h2>
              <p>
                When submitting project enquiries via our website, you agree to provide truthful and accurate contact information. You agree not to submit unlawful, defamatory, or malicious code through our contact channels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, IraSoft Technologies shall not be held liable for any direct, indirect, or incidental damages arising from your access to, or inability to access, this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                6. Governing Contact
              </h2>
              <p>
                For any questions regarding these terms, please contact:
              </p>
              <div className="p-4 bg-brand-surface rounded-lg border border-slate-200 text-xs sm:text-sm">
                <p><strong>{COMPANY.legalName}</strong></p>
                <p>Email: <a href={`mailto:${COMPANY.emails.enquiry}`} className="text-brand-teal font-semibold">{COMPANY.emails.enquiry}</a></p>
                <p>Website: <a href={COMPANY.websiteUrl} className="text-brand-teal font-semibold">{COMPANY.websiteUrl}</a></p>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
