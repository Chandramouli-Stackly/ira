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
    <section id="services" className="py-20 bg-brand-surface border-y border-slate-200/70">
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
        </div>
      </Container>
    </section>
  );
}
