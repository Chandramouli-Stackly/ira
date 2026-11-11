import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SERVICES } from "@/data/services";
import { constructMetadata } from "@/lib/seo/metadata";
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

export const metadata = constructMetadata({
  title: "Technology Services | IraSoft Technologies",
  description:
    "Explore our complete range of technology services: Odoo ERP development, hotel management software, custom software, AI automation, website engineering, digital marketing, and IT consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-surface via-white to-white border-b border-slate-100">
        <Container className="text-center">
          <Badge variant="teal">Comprehensive Engineering</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy max-w-3xl mx-auto">
            Our Technology Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Complete digital and software solutions designed to help businesses
            operate smarter, eliminate bottlenecks, and achieve sustainable growth.
          </p>
        </Container>
      </section>

      {/* Services Listing */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const IconComponent = ICON_MAP[service.iconName] || Code2;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-brand-surface rounded-2xl border border-slate-200/90 p-8 sm:p-12 shadow-subtle hover:shadow-card transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Service Details */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-brand-teal">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <Badge variant="teal" size="sm">
                            {service.badge}
                          </Badge>
                          <h2 className="text-2xl font-bold text-brand-navy">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-slate-600 text-base leading-relaxed">
                        {service.overview}
                      </p>

                      {/* Capabilities Grid */}
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Key Capabilities & Solutions
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.capabilities.slice(0, 6).map((cap) => (
                            <div
                              key={cap.title}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/60"
                            >
                              <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                              <span className="font-medium">{cap.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Quick Action Card */}
                    <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                      <div>
                        <h4 className="font-bold text-brand-navy text-sm mb-2">
                          Why Businesses Choose This Service
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {service.keyBenefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                        <Button
                          href={`/services/${service.slug}`}
                          variant="teal"
                          size="md"
                          className="w-full"
                        >
                          <span>Explore Full Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          variant="outline"
                          size="sm"
                          className="w-full text-xs"
                        >
                          Request Consultation
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
