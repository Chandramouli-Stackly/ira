import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { INDUSTRIES } from "@/data/industries";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  Hotel,
  Factory,
  Store,
  GraduationCap,
  Briefcase,
  Rocket,
  Building2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Layers,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Hotel,
  Factory,
  Store,
  GraduationCap,
  Briefcase,
  Rocket,
  Building2,
};

export const metadata = constructMetadata({
  title: "Industries We Serve | IraSoft Technologies",
  description:
    "Explore how IraSoft Technologies delivers customized software, Odoo ERP, and AI automation tailored to hospitality, manufacturing, retail, education, professional services, and startups.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries" }]} />

      {/* Header */}
      <section className="py-16 sm:py-20 bg-transparent border-b border-slate-200/60">
        <Container className="text-center">
          <Badge variant="teal">Sector-Specific Expertise</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy max-w-3xl mx-auto">
            Technology Solutions Across Industries
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Different sectors face distinct operational hurdles. Discover how our
            custom software, ERP modules, and automation streamline workflows in your industry.
          </p>
        </Container>
      </section>

      {/* Industries Detailed Section */}
      <section className="py-20 bg-white/40">
        <Container>
          <div className="space-y-16">
            {INDUSTRIES.map((ind, index) => {
              const IconComponent = ICON_MAP[ind.iconName] || Building2;

              return (
                <div
                  key={ind.id}
                  id={ind.slug}
                  className="bg-white/95 rounded-2xl border border-slate-200/90 p-8 sm:p-12 shadow-subtle scroll-mt-24"
                >
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 text-brand-teal flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                          Industry Focus
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                          {ind.name}
                        </h2>
                        <p className="text-sm font-semibold text-slate-600 mt-0.5">
                          {ind.tagline}
                        </p>
                      </div>
                    </div>

                    <Button
                      href={`/contact?service=${encodeURIComponent(ind.name)}`}
                      variant="teal"
                      size="sm"
                      className="whitespace-nowrap"
                    >
                      <span>Discuss Your Industry Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="mt-6 text-slate-700 text-sm sm:text-base leading-relaxed">
                    {ind.shortDescription}
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Common Challenges */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-4 text-brand-navy font-bold text-sm">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        <span>Common Industry Challenges</span>
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How Technology Solves It */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-4 text-brand-navy font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                        <span>How Technology Addresses It</span>
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Practical Example Use Cases */}
                  <div className="mt-6 bg-teal-50/50 rounded-xl p-6 border border-teal-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-teal-dark mb-2">
                      Practical Implementation Scenarios
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {ind.exampleUseCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2">
                          <span className="font-bold text-brand-teal">•</span>
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Services */}
                  <div className="mt-6 pt-4 flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-semibold text-slate-500">
                      Recommended Services:
                    </span>
                    {ind.relatedServices.map((rs) => (
                      <Link
                        key={rs.name}
                        href={rs.href}
                        className="bg-white px-3 py-1.5 rounded-md border border-slate-200 text-slate-700 hover:text-brand-teal hover:border-brand-teal font-medium transition-colors"
                      >
                        {rs.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

