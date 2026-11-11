import React from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { COMPANY } from "@/data/company";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Cookie Policy | IraSoft Technologies",
  description:
    "Information about how IraSoft Technologies uses cookies and similar technologies on our website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

      <section className="py-16 sm:py-20 bg-white">
        <Container size="narrow">
          <Badge variant="neutral">Cookies & Storage</Badge>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Cookie Policy
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Last Updated: November 2026
          </p>

          <div className="mt-10 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile device by websites that you visit. They are widely used to make websites work efficiently, remember preferences, and provide analytical data to website operators.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                2. How We Use Cookies
              </h2>
              <p>
                The IraSoft Technologies website uses minimal, necessary cookies to ensure standard web performance:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                <li><strong>Strictly Necessary Cookies:</strong> Required for page routing, session continuity, and anti-spam security during form submissions.</li>
                <li><strong>Analytics (Optional):</strong> If configured with your consent, anonymous metrics to understand aggregate page views and traffic flows.</li>
              </ul>
              <p>
                We do not use intrusive cross-site tracking cookies or advertising profile networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                3. Managing Cookie Preferences
              </h2>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of modern web applications may experience minor layout or navigation delays if session cookies are disabled entirely.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                4. Questions
              </h2>
              <p>
                If you have questions about our cookie usage, please contact us at{" "}
                <a href={`mailto:${COMPANY.emails.enquiry}`} className="text-brand-teal font-semibold">
                  {COMPANY.emails.enquiry}
                </a>.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
