import React from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { PortfolioList } from "@/components/portfolio/PortfolioList";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Project Portfolio & Architecture | IraSoft Technologies",
  description:
    "Explore our solution blueprints and architectures across Odoo ERP, hospitality management, custom software, AI automation, and web platforms.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Portfolio" }]} />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-surface via-white to-white border-b border-slate-100">
        <Container className="text-center">
          <Badge variant="teal">Proven Engineering</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy max-w-3xl mx-auto">
            Ideas We Turn Into Digital Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our technical architectures, implementation frameworks, and digital systems built for business scalability.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <PortfolioList />
        </Container>
      </section>
    </>
  );
}
