import React from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { InsightsList } from "@/components/insights/InsightsList";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Technology Insights & Guides | IraSoft Technologies",
  description:
    "Practical guides and business analyses on Odoo ERP, hotel management systems, custom software development, AI automation, and web design.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Insights" }]} />

      <section className="py-16 sm:py-20 bg-transparent border-b border-slate-200/60">
        <Container className="text-center">
          <Badge variant="teal">Knowledge & Practical Advice</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy max-w-3xl mx-auto">
            Technology Insights for Business Growth
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Straightforward guides and strategic perspectives to help business leaders make confident technology decisions.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white/40">
        <Container>
          <InsightsList />
        </Container>
      </section>
    </>
  );
}

