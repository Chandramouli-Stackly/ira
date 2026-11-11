import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { INDUSTRIES } from "@/data/industries";
import {
  Hotel,
  Factory,
  Store,
  GraduationCap,
  Briefcase,
  Rocket,
  Building2,
  ArrowRight,
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

export function IndustriesOverview() {
  return (
    <section className="py-20 bg-brand-surface border-b border-slate-200/70">
      <Container>
        <SectionHeading
          badge="Who We Support"
          title="Technology Solutions Across Industries"
          subtitle="Discover how customized software, ERP, and automation address the real day-to-day challenges of diverse industry sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => {
            const IconComponent = ICON_MAP[industry.iconName] || Building2;

            return (
              <Card
                key={industry.id}
                className="flex flex-col justify-between p-6 border-slate-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy">
                    {industry.name}
                  </h3>

                  <p className="text-xs font-semibold text-brand-teal mt-1">
                    {industry.tagline}
                  </p>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {industry.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/industries#${industry.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors"
                  >
                    <span>Explore Solutions for {industry.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
