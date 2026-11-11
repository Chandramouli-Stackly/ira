import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Map, Palette, Code, Rocket } from "lucide-react";

export function DevelopmentProcess() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      desc: "Understand your business, operational bottlenecks, goals, and existing systems.",
      icon: Search,
    },
    {
      num: "02",
      name: "Plan",
      desc: "Define functional scope, architecture, milestone timelines, and technology stack.",
      icon: Map,
    },
    {
      num: "03",
      name: "Design",
      desc: "Prepare clear user interfaces, workflow diagrams, and database schemas.",
      icon: Palette,
    },
    {
      num: "04",
      name: "Develop",
      desc: "Build, integrate, and thoroughly test the custom modules and applications.",
      icon: Code,
    },
    {
      num: "05",
      name: "Launch & Support",
      desc: "Deploy to production, onboard your team, and provide ongoing technical care.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-brand-surface border-y border-slate-200/70">
      <Container>
        <SectionHeading
          badge="Structured Methodology"
          title="From Business Idea to Working Solution"
          subtitle="Our five-step development lifecycle guarantees clarity, predictability, and reliable project delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.name}
                className="bg-white rounded-xl p-6 border border-slate-200 relative shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] uppercase font-bold tracking-wider text-brand-teal">
                  Step {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
