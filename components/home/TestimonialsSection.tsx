import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_VALUE_PROPOSITIONS, APPROVED_TESTIMONIALS } from "@/data/testimonials";
import { Target, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Target,
  MessageSquare,
  ShieldCheck,
  Sparkles,
};

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-surface border-y border-slate-200/70">
      <Container>
        <SectionHeading
          badge="Partnership & Trust"
          title="What Our Clients Say"
          subtitle="Building technology partnerships through clear communication, practical solutions, and a commitment to business goals."
        />

        {APPROVED_TESTIMONIALS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROVED_TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <p className="text-sm text-slate-700 italic leading-relaxed">"{t.feedback}"</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-brand-navy">{t.clientName}</div>
                  <div className="text-xs text-slate-500">{t.designation}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Transparent Trust & Engineering Commitment Banner */
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORE_VALUE_PROPOSITIONS.map((prop) => {
                const Icon = ICON_MAP[prop.iconName] || CheckCircle2;
                return (
                  <div
                    key={prop.title}
                    className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-brand-navy text-base">
                        {prop.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-slate-500 italic">
                We believe in transparent, verified client relationships. As new client case studies and testimonials are officially authorized, they are published directly here.
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
