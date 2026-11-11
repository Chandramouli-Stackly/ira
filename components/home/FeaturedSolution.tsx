import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  CalendarDays,
  UserCheck,
  Sparkles,
  ClipboardList,
  Receipt,
  BarChart3,
  Users2,
  PackageSearch,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function FeaturedSolution() {
  const highlights = [
    {
      title: "Front Desk & Availability Matrix",
      desc: "Visual 30-day room calendar with live status updates (Vacant, Occupied, Reserved, Due Out, Dirty).",
      icon: CalendarDays,
    },
    {
      title: "Fast Guest Check-In & Folios",
      desc: "Express check-in, digital guest ID attachments, and unified multi-charge guest billing folios.",
      icon: UserCheck,
    },
    {
      title: "Housekeeping & Room Turnover",
      desc: "Morning room status sheets alerting reception immediately when rooms are clean and inspected.",
      icon: Sparkles,
    },
    {
      title: "Executive Daily Flash Reports",
      desc: "Live morning operational briefing across Occupancy %, ADR (₹2,750), RevPAR, and multi-outlet revenue.",
      icon: BarChart3,
    },
    {
      title: "Statutory Police & Form C Compliance",
      desc: "Paperless guest police intimations, foreign national Form C registers, and FIR case tracker.",
      icon: ShieldCheck,
    },
    {
      title: "Role-Based Staff Workflows",
      desc: "Dedicated interfaces for General Managers, Front Desk, Housekeeping, Storekeepers & Accounts.",
      icon: Users2,
    },
  ];

  return (
    <section className="py-20 bg-white/40 border-b border-slate-200/60">
      <Container>
        <div className="bg-gradient-to-br from-slate-900 via-brand-navy to-brand-navy-dark rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 mb-12">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="teal" className="bg-brand-teal/20 text-teal-300 border-teal-500/40">
                Flagship Hospitality Solution
              </Badge>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-tight">
                Complete Hotel & Resort Management Solutions
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Engineered and actively deployed for luxury properties (such as <strong>Mouli Hotels & Resorts</strong> and <strong>RB Resorts</strong>). Manage reservations, front desk operations, room turnover, inventory, employees, billing, and business reporting through connected technology.
              </p>
            </div>

            <div className="lg:col-span-6">
              {/* Actual Live Screenshot Mockup */}
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/40">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/projects/hotel-calendar-matrix.jpg"
                    alt="Mouli Hotels & Resorts Management Suite by IraSoft Technologies"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-3 bg-black/70 backdrop-blur-sm text-[11px] text-teal-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Live Mouli Hotels & Resorts Suite
                  </span>
                  <span className="text-slate-400">Deployed by IraSoft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Highlighted Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-teal-400/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Area */}
          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <p className="text-xs text-slate-400 max-w-lg">
              Configurable modules designed to fit independent hotels, beachfront resorts, and boutique luxury properties.
            </p>

            <Button
              href="/solutions/hotel-management-system"
              variant="teal"
              size="lg"
              className="group whitespace-nowrap"
            >
              <span>Explore Hotel Management Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
