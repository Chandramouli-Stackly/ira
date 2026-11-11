import React from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { COMPANY } from "@/data/company";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy | IraSoft Technologies",
  description:
    "Learn how IraSoft Technologies collects, uses, and protects personal information submitted through our corporate website and enquiry forms.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <section className="py-16 sm:py-20 bg-white">
        <Container size="narrow">
          <Badge variant="neutral">Legal & Privacy</Badge>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Last Updated: November 2026
          </p>

          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 leading-relaxed">
            <strong>Notice:</strong> This Privacy Policy is an initial informational draft outlining IraSoft Technologies&apos; current data handling practices for business enquiries. It does not constitute formal legal counsel.
          </div>

          <div className="mt-10 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                1. Information We Collect
              </h2>
              <p>
                When you visit our website or submit an enquiry through our contact form, we collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                <li>Personal identification details: Full Name, Email Address, and Contact Phone Number.</li>
                <li>Business details: Company / Organization Name and Country of operation.</li>
                <li>Project requirements: Service requested, project type, estimated budget, timeline, and description.</li>
                <li>Technical logs: Standard server logs including IP address, browser type, and submission timestamps.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                2. How We Use Your Information
              </h2>
              <p>
                The information you provide is used strictly for legitimate business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                <li>Evaluating your project scope and preparing technical consultations or quotations.</li>
                <li>Communicating with you regarding your enquiry via Email, Phone, or WhatsApp as selected.</li>
                <li>Preventing malicious bot submissions and securing our website infrastructure.</li>
              </ul>
              <p>
                We do not sell, rent, trade, or monetize your contact information to third-party marketing companies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                3. Third-Party Services
              </h2>
              <p>
                We may use trusted service providers to operate our website functionality:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                <li><strong>Transactional Email:</strong> Resend or equivalent email delivery platforms to route your enquiry to our sales and technical team.</li>
                <li><strong>Hosting Infrastructure:</strong> Cloud hosting providers (e.g. Vercel, AWS) that process server requests securely.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                4. Data Security & Retention
              </h2>
              <p>
                We employ appropriate technical security measures to protect the information you transmit. We retain enquiry records only for the period necessary to conduct business discussions or fulfill contractual and administrative requirements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                5. Contact Us Regarding Your Privacy
              </h2>
              <p>
                If you have questions about this privacy statement, or wish to request the deletion or correction of your submitted enquiry details, please contact us at:
              </p>
              <div className="p-4 bg-brand-surface rounded-lg border border-slate-200 text-xs sm:text-sm">
                <p><strong>{COMPANY.legalName}</strong></p>
                <p>Email: <a href={`mailto:${COMPANY.emails.enquiry}`} className="text-brand-teal font-semibold">{COMPANY.emails.enquiry}</a></p>
                <p>Phone: <a href={`tel:${COMPANY.phone.raw}`} className="text-brand-teal font-semibold">{COMPANY.phone.display}</a></p>
                <p>Website: <a href={COMPANY.websiteUrl} className="text-brand-teal font-semibold">{COMPANY.websiteUrl}</a></p>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
