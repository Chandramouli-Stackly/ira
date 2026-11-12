import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CareersBoard } from "@/components/careers/CareersBoard";
import { getOpenJobs } from "@/data/careers";
import { constructMetadata } from "@/lib/seo/metadata";
import { Code2, Cpu, Layers, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Careers at IraSoft Technologies | Join Our Engineering & Digital Team",
  description:
    "Explore open roles at IraSoft Technologies across Odoo ERP development, Next.js full-stack engineering, AI workflow automation, and digital marketing. Apply directly on our website.",
  path: "/careers",
  keywords: [
    "IraSoft Technologies Careers",
    "IraSoft Jobs",
    "Odoo Developer Jobs India",
    "Next.js Developer Jobs",
    "AI Automation Engineer Jobs",
  ],
});

export default function CareersPage() {
  const openJobs = getOpenJobs();

  const culturePillars = [
    {
      title: "Real Production Systems",
      desc: "Work on live enterprise ERPs, luxury resort PMS platforms, and automated AI workflows used daily by businesses.",
      icon: Layers,
    },
    {
      title: "Modern Tech Stack",
      desc: "Build with Next.js App Router, TypeScript, Tailwind CSS, Python, Odoo ORM, PostgreSQL, and foundation LLM APIs.",
      icon: Code2,
    },
    {
      title: "Direct Ownership",
      desc: "Small, focused engineering teams where your architecture decisions and craft directly impact client outcomes.",
      icon: Cpu,
    },
    {
      title: "Transparent Culture",
      desc: "Practical engineering standards, direct mentoring, and clear communication without unnecessary bureaucracy.",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Careers" }]} />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-transparent border-b border-slate-200/60">
        <Container className="text-center">
          <Badge variant="teal">Join IraSoft Technologies</Badge>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy max-w-3xl mx-auto">
            Build Practical Technology That Moves Businesses Forward
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are looking for thoughtful developers, Odoo specialists, AI builders, and digital growth professionals who enjoy solving real-world operational challenges.
          </p>

          {/* Culture Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {culturePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white/95 rounded-xl p-5 border border-slate-200/90 shadow-subtle"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 text-brand-teal flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-bold text-brand-navy">
                    {pillar.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Roles + Built-in Application Form */}
      <section className="py-16 sm:py-20 bg-white/40">
        <Container>
          <CareersBoard openJobs={openJobs} />
        </Container>
      </section>
    </>
  );
}

