import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { COMPANY } from "@/data/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white pt-10 sm:pt-16 pb-16 lg:pb-24 border-b border-slate-100">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 -z-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="teal" size="md">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>{COMPANY.tagline}</span>
              </Badge>
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-brand-navy leading-[1.15]">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-teal to-teal-500">
                Smart, Scalable Technology.
              </span>
            </h1>

            {/* Supporting Content */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              IraSoft Technologies helps businesses simplify operations, improve
              productivity, and accelerate growth through custom software
              development, Odoo ERP solutions, hotel management systems, AI-powered
              automation, and digital experiences.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button href="/contact" variant="teal" size="lg" className="group">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                <span>Explore Our Services</span>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Customized Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Practical Business Value</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>End-to-End Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Graphic Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-brand-navy">
                <div className="relative aspect-[24/13] sm:aspect-[24/13] w-full">
                  <Image
                    src="/images/hero/1.jpg"
                    alt="Innovating Today, Transforming Tomorrow - IraSoft Technologies"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Overlaid Capability Badges Strip */}
                <div className="p-4 bg-brand-navy-dark border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                    <span>Odoo ERP Customization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    <span>Hotel Operations Suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Custom Web Applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>AI Process Automation</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Accent */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-slate-200/80 p-3.5 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-brand-teal font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy">Reliable Architecture</div>
                  <div className="text-[11px] text-slate-500">Built for business longevity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

