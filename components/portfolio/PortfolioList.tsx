"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS, PORTFOLIO_CATEGORIES } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Layers, ExternalLink, ShieldCheck, Clock } from "lucide-react";
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
            className="flex flex-col justify-between p-6 border-slate-200"
          >
            <div>
              {/* Architecture Mockup Box */}
              <div className="rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 p-8 mb-5 flex flex-col items-center justify-center text-center aspect-[16/10] relative overflow-hidden group/box">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-teal mb-3">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-brand-navy">
                  {project.imagePlaceholderText}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 font-medium">
                  {project.industry}
                </span>

                {project.isPlaceholder && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 text-[10px] bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                      <Clock className="w-3 h-3 text-slate-500" />
                      Blueprint
                    </span>
                  </div>
                )}
              </div>

              {/* Category & Status */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  {project.categoryLabel}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {project.industry}
                </span>
              </div>

              <h3 className="text-lg font-bold text-brand-navy">
                {project.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors"
              >
                <span>View Solution Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
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

      {/* Authentic Portfolio Notice Banner */}
      <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2 text-brand-navy font-semibold text-sm">
          <ShieldCheck className="w-5 h-5 text-brand-teal" />
          <span>Commitment to Authenticity</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          At IraSoft Technologies, we present verified architectural blueprints and frameworks. We do not fabricate clients or performance numbers. As proprietary client case studies are formally authorized, their implementation outcomes are published here.
        </p>
      </div>
    </div>
  );
}
