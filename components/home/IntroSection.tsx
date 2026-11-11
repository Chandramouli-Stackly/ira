import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual Banner from uploaded social post */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/brand/social-launch-laptop.jpg"
                  alt="IraSoft Technologies - Digital Transformation Partner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Badge variant="teal">Our Philosophy</Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-navy">
              Technology That Works for Your Business
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Every business has different challenges. At IraSoft Technologies, we
                understand your requirements and develop technology solutions that
                fit your workflows, goals, and growth plans.
              </p>
              <p>
                From business management systems and custom applications to
                AI-powered automation and digital platforms, we help transform
                ideas into practical technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Customized around your operational workflows
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Practical technology without bloated costs
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Transparent milestones & clear communication
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Long-term maintenance and technical support
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="primary" size="md" className="group">
                <span>Learn More About IraSoft</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
