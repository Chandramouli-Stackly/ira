import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/data/services";
import {
  Boxes,
  Hotel,
  Code2,
  Cpu,
  Globe,
  TrendingUp,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Boxes,
  Hotel,
  Code2,
  Cpu,
  Globe,
  TrendingUp,
  Headphones,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-transparent border-b border-slate-200/60">
      <Container>
        <SectionHeading
          badge="What We Do"
          title="Our Technology Services"
          subtitle="Complete digital and software solutions designed to help businesses operate smarter and grow faster."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Code2;
            const isFeatured = service.id === "hotel-management" || service.id === "odoo-erp";

            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between relative group overflow-hidden border-slate-200"
              >
                {/* Top Colored Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold text-brand-teal bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100/80">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key Capabilities Bullet Points */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {service.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap.title} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-teal transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}

          {/* Closing Consultation Callout filling remaining grid space */}
          <div className="md:col-span-1 lg:col-span-2 rounded-xl bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light p-8 text-white shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern-dark pointer-events-none" />
            <div className="relative z-10 max-w-xl space-y-3">
              <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest text-teal-300 bg-teal-500/15 border border-teal-400/30 px-2.5 py-1 rounded-full">
                Tailored Engagement
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Not Sure Which Technology Fits Your Operations Best?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need Odoo ERP workflows, a property management suite,
                custom business portals, or AI process automation, our engineering
                team evaluates your workflow and recommends the most practical path.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm group"
              >
                <span>Schedule a Technical Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="text-xs font-semibold text-teal-300 hover:text-white transition-colors"
              >
                Compare All 7 Services →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

