import React from "react";
import { notFound } from "next/navigation";
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
  Cpu,
  Clock,
  Sparkles,
  ShieldCheck,
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
    title: `${project.title} | ${COMPANY.name} Portfolio`,
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="teal">{project.categoryLabel}</Badge>
              <span className="text-xs text-slate-500 font-medium">
                • {project.industry}
              </span>
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Challenges & Solutions */}
            <div className="lg:col-span-8 space-y-10">
              {/* Architecture Mockup Box */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-100 via-brand-surface to-slate-50 border border-slate-200 p-12 text-center flex flex-col items-center justify-center min-h-[300px] shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-brand-teal mb-4">
                  <Layers className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-brand-navy">
                  {project.imagePlaceholderText}
                </h2>
                <p className="text-xs text-slate-500 mt-2 max-w-md">
                  Modular software architecture designed and engineered for {project.industry} operations.
                </p>
              </div>

              {/* Challenge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-base">
                  <AlertCircle className="w-5 h-5" />
                  <span>The Business Challenge</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-rose-50/40 p-5 rounded-xl border border-rose-100">
                  {project.businessChallenge}
                </p>
              </div>

              {/* Proposed Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-teal font-bold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Engineered Solution</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-teal-50/40 p-5 rounded-xl border border-teal-100">
                  {project.proposedSolution}
                </p>
              </div>

              {/* Key Capabilities */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-4">
                  Key Capabilities Delivered
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
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-brand-surface rounded-2xl p-6 border border-slate-200 shadow-subtle space-y-5">
                <h3 className="font-bold text-brand-navy text-sm border-b border-slate-200 pb-3">
                  Project Details
                </h3>

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

                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">
                    Technologies
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

                {project.verifiedOutcome && (
                  <div className="pt-3 border-t border-slate-200">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      Implementation Status
                    </span>
                    <p className="text-xs text-slate-700 mt-1 font-medium">
                      {project.verifiedOutcome}
                    </p>
                  </div>
                )}

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
              Related Project Architectures
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
                      <span>View Blueprint →</span>
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
