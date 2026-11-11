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
  ArrowRight
} from "lucide-react";

export function FeaturedSolution() {
  const highlights = [
    {
      title: "Front Desk & Availability Matrix",
      desc: "Visual room calendar with live status updates for walk-ins and bookings.",
      icon: CalendarDays,
    },
    {
      title: "Fast Guest Check-In & Folios",
      desc: "Express check-in with digital ID attachments and unified billing folios.",
      icon: UserCheck,
    },
    {
      title: "Housekeeping & Room Turnover",
      desc: "Mobile room readiness board alerting reception immediately when cleaned.",
      icon: Sparkles,
    },
    {
      title: "Store & Inventory Controls",
      desc: "Track linen, toiletries, and minibar consumables with auto-reorder alerts.",
      icon: PackageSearch,
    },
    {
      title: "Staff & Role-Based Workflows",
      desc: "Secure permissions for Managers, Receptionists, Housekeeping & Accounts.",
      icon: Users2,
    },
    {
      title: "Revenue Reports & Daily Audits",
      desc: "Automated ADR, RevPAR, occupancy rate, and cashier shift reconciliation.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="bg-gradient-to-br from-slate-900 via-brand-navy to-brand-navy-dark rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <Badge variant="teal" className="bg-brand-teal/20 text-teal-300 border-teal-500/40">
              Featured Solution
            </Badge>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Complete Hotel & Resort Management Solutions
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Manage your hospitality business with connected technology. IraSoft helps
              hotels and resorts streamline reservations, guest services, room
              operations, inventory, employees, billing, and business reporting through
              customized management solutions.
            </p>
          </div>

          {/* Grid of Highlighted Capabilities */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
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
              Configurable modules designed to fit your property size and operational workflows.
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
