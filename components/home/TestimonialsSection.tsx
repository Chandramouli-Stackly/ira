import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_VALUE_PROPOSITIONS, APPROVED_TESTIMONIALS } from "@/data/testimonials";
import { Target, MessageSquare, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Target,
  MessageSquare,
  ShieldCheck,
  Sparkles,
};

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-transparent border-b border-slate-200/60">
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
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORE_VALUE_PROPOSITIONS.map((prop) => {
                const Icon = ICON_MAP[prop.iconName] || CheckCircle2;
                return (
                  <div
                    key={prop.title}
                    className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-brand-teal/60 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors flex items-center justify-center mb-4">
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

            <div className="mt-8 bg-white rounded-xl px-6 py-4 border border-slate-200/90 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  Verified live systems operating across hospitality &amp; enterprise clients including{" "}
                  <strong className="text-brand-navy">Mouli Hotels &amp; Resorts</strong> and{" "}
                  <strong className="text-brand-navy">RB Resorts</strong>.
                </span>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:text-brand-teal-dark whitespace-nowrap"
              >
                <span>Inspect Live Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
