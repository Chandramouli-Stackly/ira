import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  Compass,
  Target,
  Sparkles,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About IraSoft Technologies | Technology Solutions Partner",
  description:
    "Learn about IraSoft Technologies: our mission, vision, engineering capabilities, and commitment to delivering practical business software, ERP, and AI solutions.",
  path: "/about",
});

export default function AboutPage() {
  const capabilities = [
    {
      title: "Odoo ERP Engineering",
      desc: "Full implementation, custom Python modules, inventory optimization, and finance automation.",
    },
    {
      title: "Hospitality Technology",
      desc: "Comprehensive hotel and resort management software designed for seamless operations.",
    },
    {
      title: "Custom Software Solutions",
      desc: "Bespoke web applications, internal company portals, and secure API architectures.",
    },
    {
      title: "AI & Process Automation",
      desc: "Document extraction, private enterprise knowledge search, and conversational bots.",
    },
    {
      title: "Modern Web Platforms",
      desc: "High-performance Jamstack websites engineered for search visibility and conversion.",
    },
    {
      title: "IT Support & Advisory",
      desc: "System troubleshooting, cloud deployment assistance, and continuous technical maintenance.",
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-transparent border-b border-slate-200/60">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="teal">About IraSoft Technologies</Badge>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
                Building Technology That Moves Businesses Forward
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  IraSoft Technologies is a technology solutions company focused on
                  helping businesses solve operational challenges and build
                  stronger digital capabilities.
                </p>
                <p>
                  We work across software development, ERP solutions, business
                  automation, AI-powered applications, and digital platforms. Our
                  approach combines technical implementation with an understanding
                  of practical business needs.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="teal" size="md">
                  Discuss Your Requirements
                </Button>
                <Button href="/services" variant="outline" size="md">
                  Explore Capabilities
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 ring-1 ring-slate-900/5 bg-white">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/brand/about1.png"
                    alt="Dream. Innovate. Grow. - IraSoft Technologies"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-3 bg-brand-navy text-[11px] text-teal-300 border-t border-slate-200/20 flex items-center justify-between gap-2">
                  <span className="font-semibold">
                    Engineering Technology for Business Growth
                  </span>
                  <span className="text-[10px] bg-teal-950/80 text-teal-300 border border-teal-700/60 px-2 py-0.5 rounded font-mono uppercase tracking-wider flex-shrink-0">
                    IraSoft Vision
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white/45 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white/95 rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-subtle relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
                Our Vision
              </span>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy">
                Empowering Business Potential
              </h2>
              <blockquote className="mt-4 text-base sm:text-lg font-medium text-slate-700 italic leading-relaxed border-l-4 border-brand-teal pl-4">
                &ldquo;To help businesses grow through accessible, reliable, and innovative technology.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                We envision a business landscape where modern software, ERP intelligence,
                and automation are not privileges reserved for massive conglomerates,
                but practical catalysts accessible to growing companies everywhere.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white/95 rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-subtle relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-navy flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">
                Our Mission
              </span>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy">
                Engineering Practical Solutions
              </h2>
              <blockquote className="mt-4 text-base sm:text-lg font-medium text-slate-700 italic leading-relaxed border-l-4 border-brand-navy pl-4">
                &ldquo;To deliver practical digital solutions that simplify operations, improve efficiency, and support sustainable business growth.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Every project we undertake is driven by measurable utility: reducing
                manual bottlenecks, eliminating spreadsheet friction, connecting
                teams, and engineering platforms that stand the test of time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-transparent border-b border-slate-200/60">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="teal">Our Approach</Badge>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">
              How We Think About Technology
            </h2>
            <p className="mt-4 text-slate-600">
              We believe technology is only as valuable as the real business problem it solves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-subtle">
              <div className="w-12 h-12 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-5">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">
                1. Understand Before Building
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We spend time analyzing your real-world workflows, user roles, and
                operational friction points before drafting a single line of code or
                configuring software.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-subtle">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-brand-navy flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">
                2. Modular & Scalable Foundations
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We architect clean, modular systems that can scale smoothly as
                your transaction volumes, user base, and branch locations multiply.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-subtle">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">
                3. Partnership Over Transactions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We don&apos;t just deliver software and walk away. We provide staff
                training, system onboarding, and ongoing technical support to ensure
                lasting operational success.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white/45">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="teal">Capabilities</Badge>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">
              What We Bring to Your Business
            </h2>
            <p className="mt-4 text-slate-600">
              End-to-end technology capabilities spanning enterprise systems, custom applications, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-xl border border-slate-200 hover:border-brand-teal transition-colors bg-white shadow-subtle"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <h3 className="font-bold text-brand-navy text-base">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-card">
            <div className="absolute inset-0 bg-dot-pattern-dark pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white">Have a Project in Mind?</h3>
              <p className="text-slate-300 text-sm mt-1">
                Let&apos;s discuss how IraSoft Technologies can engineer the right solution for your business.
              </p>
            </div>
            <Button href="/contact" variant="teal" size="lg" className="relative z-10 whitespace-nowrap">
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

