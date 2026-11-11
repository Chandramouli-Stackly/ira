import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Compass,
  Cpu,
  Layers,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Sparkles,
} from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Business-Focused Solutions",
      description: "We focus on solving your operational bottlenecks and improving workflow efficiency, not building unnecessary features.",
      icon: Compass,
    },
    {
      title: "Customized Development",
      description: "Every module, dashboard, and database schema is crafted around the specific way your company conducts business.",
      icon: Workflow,
    },
    {
      title: "Practical Technology Expertise",
      description: "Hands-on engineering across Next.js, Odoo ERP, Python, AI APIs, and PostgreSQL that delivers reliable performance.",
      icon: Cpu,
    },
    {
      title: "Scalable Architecture",
      description: "Clean code and modular foundations designed to support increasing transactions, users, and branches smoothly.",
      icon: Layers,
    },
    {
      title: "Clear Communication",
      description: "Direct discussions with technical specialists, regular milestone progress, and straightforward project roadmaps.",
      icon: MessageSquare,
    },
    {
      title: "End-to-End Project Support",
      description: "Comprehensive guidance from initial business analysis through design, deployment, training, and maintenance.",
      icon: ShieldCheck,
    },
    {
      title: "Focus on Long-Term Value",
      description: "Cost-effective solutions that protect your margins, reduce reliance on fragile spreadsheets, and build lasting capability.",
      icon: TrendingUp,
    },
    {
      title: "Solutions Aligned with Requirements",
      description: "No cookie-cutter templates. We adapt technology to your team's workflow rather than forcing you to change your business.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          badge="Why IraSoft"
          title="Your Technology Partner for Practical Business Growth"
          subtitle="We bridge the gap between complex software engineering and practical business execution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-brand-surface rounded-xl p-6 border border-slate-200/80 hover:border-brand-teal/60 hover:shadow-subtle transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-navy text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
