import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SOLUTIONS, getSolutionBySlug } from "@/data/solutions";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  ArrowRight,
  CheckCircle2,
  Users2,
  Sliders,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/data/company";

interface SolutionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SOLUTIONS.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};

  const seoData: Record<string, { title: string; description: string; keywords: string[] }> = {
    "hotel-management-system": {
      title: "Hotel & Resort Management Solutions (Mouli PMS Suite) | IraSoft Technologies",
      description:
        "Complete hotel & resort management software suite with real-time room availability matrix, front desk check-in, housekeeping boards, and daily revenue reporting.",
      keywords: [
        "Hotel Management System",
        "Resort Management Software",
        "Hospitality PMS Software",
        "Mouli Hotels Management Suite",
        "Front Desk Hotel System",
      ],
    },
    "enterprise-erp": {
      title: "Connected Enterprise ERP Solutions & Payroll Suite | IraSoft Technologies",
      description:
        "Unify master data, multi-warehouse inventory, procurement, and automated employee payroll under a scalable enterprise ERP system.",
      keywords: [
        "Enterprise ERP System",
        "Odoo ERP Solutions",
        "Automated Employee Payroll Software",
        "Multi-Warehouse Management ERP",
        "Business ERP India",
      ],
    },
    "ai-workflow-automation": {
      title: "Intelligent AI Workflow Automation & Document Intelligence | IraSoft Technologies",
      description:
        "Eliminate manual operational bottlenecks with private business AI agents, automated document extraction, and workflow bots.",
      keywords: [
        "AI Workflow Automation",
        "Intelligent Document Processing",
        "Business AI Agents",
        "Enterprise Automation Solutions",
      ],
    },
  };

  const currentSeo = seoData[solution.slug] || {
    title: `${solution.title} | ${COMPANY.name}`,
    description: solution.shortDescription,
    keywords: [],
  };

  return constructMetadata({
    title: currentSeo.title,
    description: currentSeo.description,
    keywords: currentSeo.keywords,
    path: `/solutions/${solution.slug}`,
  });
}

const SOLUTION_SCREENSHOTS: Record<
  string,
  {
    src: string;
    caption: string;
    aspectClass?: string;
    textColSpan?: string;
    imageColSpan?: string;
    fitClass?: string;
    objectPosition?: string;
  }
> = {
  "hotel-management-system": {
    src: "/images/projects/hotel-calendar-matrix.jpg",
    caption: "Live 30-Day Room Availability Grid & Reservation Status Matrix (Mouli Hotels & Resorts PMS)",
    aspectClass: "aspect-[16/10]",
    textColSpan: "lg:col-span-6",
    imageColSpan: "lg:col-span-6",
    objectPosition: "object-top",
  },
  "enterprise-erp": {
    src: "/images/projects/odoo-erp-app-suite.jpg",
    caption: "Connected 25+ App Enterprise Odoo ERP Suite with Invoicing, CRM, and Multi-Warehouse Inventory",
    aspectClass: "aspect-[16/10]",
    textColSpan: "lg:col-span-6",
    imageColSpan: "lg:col-span-6",
    objectPosition: "object-top",
  },
  "ai-workflow-automation": {
    src: "/images/projects/hotel-executive-flash-report.jpg",
    caption: "Automated Executive Flash Reporting with Dynamic Revenue & Occupancy Analytics",
    aspectClass: "aspect-[4/3]",
    textColSpan: "lg:col-span-6",
    imageColSpan: "lg:col-span-6",
    fitClass: "object-contain",
    objectPosition: "object-center",
  },
};

export default function SolutionDetailPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  const screenshot = SOLUTION_SCREENSHOTS[solution.id];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-transparent border-b border-slate-200/60">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className={screenshot ? (screenshot.textColSpan || "lg:col-span-6") : "lg:col-span-12 max-w-3xl"}>
              <Badge variant="teal">{solution.badge}</Badge>

              <h1 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
                {solution.heroHeadline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                {solution.heroSubheadline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={`/contact?service=${encodeURIComponent(solution.title)}`}
                  variant="teal"
                  size="lg"
                  className="group"
                >
                  <span>Request Solution Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="#roles" variant="outline" size="lg">
                  <span>View User Roles & Modules</span>
                </Button>
              </div>
            </div>

            {screenshot && (
              <div className={screenshot.imageColSpan || "lg:col-span-6"}>
                <div className="rounded-2xl overflow-hidden border border-slate-200/90 ring-1 ring-slate-900/5 shadow-2xl bg-white">
                  <div className={`relative ${screenshot.aspectClass || "aspect-[16/10]"} w-full bg-slate-50`}>
                    <Image
                      src={screenshot.src}
                      alt={solution.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`${screenshot.fitClass || "object-cover"} ${screenshot.objectPosition || "object-top"}`}
                    />
                  </div>
                  <div className="px-4 py-3 bg-brand-navy text-[11px] text-teal-300 border-t border-slate-200/20 flex items-center justify-between gap-2">
                    <span className="font-semibold line-clamp-1">{screenshot.caption}</span>
                    <span className="text-[10px] bg-teal-950/80 text-teal-300 border border-teal-700/60 px-2 py-0.5 rounded font-mono uppercase tracking-wider flex-shrink-0">
                      Live Suite
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white/45 border-b border-slate-200/60">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Connected Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-2">
              How the Solution Works
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              {solution.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.keyFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-white/95 rounded-xl p-6 border border-slate-200/90 shadow-subtle"
              >
                <div className="flex items-center gap-2 mb-2 font-bold text-base text-brand-navy">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* User Roles Supported */}
      <section id="roles" className="py-20 bg-transparent border-b border-slate-200/60">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="teal">Operational Roles</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mt-2">
              Tailored Access for Every Team Member
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Distinct role-based views and permissions ensure staff see only the information necessary for their daily duties while management retains complete oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.rolesSupported.map((r) => (
              <div
                key={r.role}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-subtle"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-3">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-navy text-base">
                  {r.role}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {r.responsibilities}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Configurable Modules */}
      <section className="py-20 bg-white/45">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="teal">Modular Configuration</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Configurable Modules to Match Your Workflow
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We understand that no two businesses operate identically. Our systems are built with modular components that can be activated, customized, or expanded based on your specific requirements.
              </p>

              <div className="space-y-2 pt-2">
                {solution.configurableModules.map((mod) => (
                  <div
                    key={mod}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <Sliders className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
                Verified Value
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Expected Business Benefits
              </h3>
              <ul className="mt-6 space-y-4">
                {solution.businessBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Button
                  href={`/contact?service=${encodeURIComponent(solution.title)}`}
                  variant="teal"
                  size="md"
                  className="w-full"
                >
                  Schedule Solution Demo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

