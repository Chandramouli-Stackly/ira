import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/company";

export function CtaBanner() {
  return (
    <section className="py-20 bg-brand-navy-dark text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-teal">
            Engineering Technology for Business Growth
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Have a Business Challenge or a Project Idea? Let&apos;s Build It Together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell us what you want to achieve. Our team will understand your requirements
            and help identify the right technology solution.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="teal" size="lg" className="w-full sm:w-auto group">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:text-white">
              <span>Contact Our Team</span>
            </Button>
          </div>

          <div className="pt-6">
            <p className="text-xs text-slate-400">
              Prefer quick messaging? Reach us directly on WhatsApp at{" "}
              <a
                href={COMPANY.phone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline font-semibold"
              >
                {COMPANY.phone.display}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
