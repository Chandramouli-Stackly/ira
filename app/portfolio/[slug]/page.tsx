import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PROJECTS, getProjectBySlug } from "@/data/portfolio";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  Layers,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
  Check,
} from "lucide-react";
import { COMPANY } from "@/data/company";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} | ${COMPANY.name} Project Showcase`,
    description: project.shortDescription,
    path: `/portfolio/${project.slug}`,
  });
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
      />

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-surface via-white to-white border-b border-slate-100">
        <Container>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="teal">{project.categoryLabel}</Badge>
              {project.clientName && (
                <span className="text-xs bg-blue-50 text-brand-navy font-semibold px-2.5 py-1 rounded-md border border-blue-200/60">
                  Client: {project.clientName}
                </span>
              )}
              {!project.isPlaceholder && (
                <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Production Deployment
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content & Real Screenshots Showcase */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Real Screenshots & Case Study Breakdown */}
            <div className="lg:col-span-8 space-y-12">
              {/* Primary Feature Showcase */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <div className="relative aspect-[16/10] w-full bg-slate-950">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4 bg-brand-navy text-xs text-slate-300 border-t border-slate-800 flex items-center justify-between">
                  <span className="font-semibold text-teal-300">
                    Live System Interface — {project.title}
                  </span>
                  <span className="text-slate-400">Deployed by IraSoft Technologies</span>
                </div>
              </div>

              {/* Challenge Box */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-base">
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>The Operational Challenge</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-rose-50/40 p-6 rounded-xl border border-rose-100">
                  {project.businessChallenge}
                </p>
              </div>

              {/* Proposed & Delivered Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-teal font-bold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Delivered Engineering Solution</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-teal-50/40 p-6 rounded-xl border border-teal-100">
                  {project.proposedSolution}
                </p>
              </div>

              {/* Full Gallery of Real Screenshots */}
              {project.galleryImages && project.galleryImages.length > 1 && (
                <div className="space-y-6 pt-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h2 className="text-2xl font-bold text-brand-navy">
                      System Screenshots & Module Walkthrough
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Direct captures from the deployed software environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {project.galleryImages.slice(1).map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-slate-200 shadow-card bg-white"
                      >
                        <div className="relative aspect-[16/10] w-full bg-slate-100">
                          <Image
                            src={item.src}
                            alt={item.caption}
                            fill
                            className="object-cover object-top hover:scale-[1.01] transition-transform duration-200"
                          />
                        </div>
                        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-700 font-medium flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>{item.caption}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Capabilities */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-4">
                  Delivered Core Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyCapabilities.map((cap) => (
                    <div
                      key={cap}
                      className="bg-brand-surface p-4 rounded-xl border border-slate-200/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                    >
                      <Sparkles className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Project Meta Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-brand-surface rounded-2xl p-6 border border-slate-200 shadow-subtle space-y-5">
                <h3 className="font-bold text-brand-navy text-sm border-b border-slate-200 pb-3 flex items-center justify-between">
                  <span>Project Overview</span>
                  {!project.isPlaceholder && (
                    <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-bold uppercase">
                      Active
                    </span>
                  )}
                </h3>

                {project.clientName && (
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      Client / Deployment
                    </span>
                    <span className="text-sm font-semibold text-brand-navy mt-1 block">
                      {project.clientName}
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    Industry
                  </span>
                  <span className="text-sm font-semibold text-brand-navy mt-1 block">
                    {project.industry}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    Category
                  </span>
                  <span className="text-sm font-semibold text-brand-navy mt-1 block">
                    {project.categoryLabel}
                  </span>
                </div>

                {project.operationalModules && (
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">
                      Operational Modules
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {project.operationalModules.map((m) => (
                        <li key={m} className="flex items-center gap-1.5 font-medium">
                          <Check className="w-3.5 h-3.5 text-brand-teal" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    Deployment Outcome
                  </span>
                  <p className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 mt-1 font-medium">
                    {project.verifiedOutcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Button
                    href={`/contact?service=${encodeURIComponent(project.title)}`}
                    variant="teal"
                    size="md"
                    className="w-full"
                  >
                    Discuss Similar Solution
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Solutions */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-brand-surface border-t border-slate-200/70">
          <Container>
            <h2 className="text-xl font-bold text-brand-navy mb-6">
              More Enterprise Project Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-brand-teal font-bold uppercase tracking-wider">
                      {rel.categoryLabel}
                    </span>
                    <h3 className="font-bold text-brand-navy text-base mt-1">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href={`/portfolio/${rel.slug}`}
                      className="text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Showcase →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
