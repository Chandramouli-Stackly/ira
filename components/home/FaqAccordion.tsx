"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "@/data/faqs";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/data/company";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white/45">
      <Container size="narrow">
        <SectionHeading
          badge="Answers & Guidance"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with IraSoft Technologies, our services, and our development approach."
        />

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "border rounded-xl transition-colors duration-200 overflow-hidden",
                  isOpen
                    ? "border-brand-teal/60 bg-teal-50/20"
                    : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-brand-navy font-semibold text-sm sm:text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-brand-teal flex-shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 text-center p-6 bg-brand-surface rounded-2xl border border-slate-200">
          <p className="text-sm font-semibold text-brand-navy">
            Have a question not listed here?
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Our technical team is ready to discuss your specific requirements.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
            >
              <span>Submit a Project Inquiry →</span>
            </Link>
            <span className="text-slate-300">|</span>
            <a
              href={COMPANY.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

