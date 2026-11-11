"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, PORTFOLIO_CATEGORIES } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function PortfolioList() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {PORTFOLIO_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 focus:outline-none",
              activeCategory === cat.id
                ? "bg-brand-navy text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-brand-navy"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col justify-between p-0 overflow-hidden border-slate-200 group"
          >
            <div>
              {/* Real Project Screenshot Image */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-slate-200/80">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {!project.isPlaceholder && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-600 text-white font-semibold px-2.5 py-1 rounded-md shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Live Implementation
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-medium bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                    {project.clientName || project.industry}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <span className="text-[11px] font-medium text-slate-500">
                {project.galleryImages?.length || 1} Screenshots Available
              </span>
              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors"
              >
                <span>View Full Showcase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-brand-surface rounded-2xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-600">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Trust Notice */}
      <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2 text-brand-navy font-semibold text-sm">
          <ShieldCheck className="w-5 h-5 text-brand-teal" />
          <span>Verified Deployments from IraSoft Technologies</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          The projects above reflect genuine software deployments, ERP modules, and hospitality management suites engineered by IraSoft Technologies for operating businesses, including Mouli Hotels & Resorts, RB Resorts Chirala, and corporate enterprises.
        </p>
      </div>
    </div>
  );
}
