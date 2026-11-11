import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SOLUTIONS } from "@/data/solutions";
import { constructMetadata } from "@/lib/seo/metadata";
import { ArrowRight, Check, Sparkles, Building, Layers, Zap } from "lucide-react";

export const metadata = constructMetadata({
  title: "Enterprise Technology Solutions | IraSoft Technologies",
  description:
    "Connected business solutions including our Complete Hotel & Resort Management Suite, Enterprise ERP systems, and AI-powered workflow automation.",
  path: "/solutions",
});

const ICON_MAP: Record<string, React.ElementType> = {
  "hotel-management-system": Building,
  "enterprise-erp": Layers,
  "ai-workflow-automation": Zap,
};

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions" }]} />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-surface via-white to-white border-b border-slate-100">
        <Container className="text-center">
          <Badge variant="teal">Integrated Systems</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy max-w-3xl mx-auto">
            Engineered Business Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connected platforms that bring disparate operations, departments, and workflows under a unified, reliable digital ecosystem.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-12">
            {SOLUTIONS.map((solution) => {
              const Icon = ICON_MAP[solution.id] || Layers;

              return (
                <div
                  key={solution.id}
                  id={solution.slug}
                  className="bg-brand-surface rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-subtle hover:shadow-card transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <Badge variant="teal" size="sm">
                            {solution.badge}
                          </Badge>
                          <h2 className="text-2xl font-bold text-brand-navy">
                            {solution.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-slate-600 text-base leading-relaxed">
                        {solution.overview}
                      </p>

                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Key Capabilities
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {solution.keyFeatures.slice(0, 4).map((f) => (
                            <div
                              key={f.title}
                              className="bg-white p-3 rounded-lg border border-slate-200/70"
                            >
                              <div className="font-semibold text-xs text-brand-navy">
                                {f.title}
                              </div>
                              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                                {f.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                      <div>
                        <h4 className="font-bold text-brand-navy text-sm mb-3">
                          Business Impact
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {solution.businessBenefits.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 pt-4 border-t border-slate-100">
                        <Button
                          href={`/solutions/${solution.slug}`}
                          variant="teal"
                          size="md"
                          className="w-full"
                        >
                          <span>{solution.ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
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

