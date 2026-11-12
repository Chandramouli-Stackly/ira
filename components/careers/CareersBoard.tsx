"use client";

import React, { useState } from "react";
import { CAREER_DEPARTMENTS, JobOpening } from "@/data/careers";
import { JobApplicationForm } from "./JobApplicationForm";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";

interface CareersBoardProps {
  openJobs: JobOpening[];
}

export function CareersBoard({ openJobs }: CareersBoardProps) {
  const [activeDepartment, setActiveDepartment] = useState<string>("All");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(
    openJobs[0]?.id || null
  );
  const [selectedRole, setSelectedRole] = useState<string>(
    openJobs[0]?.title || "General Application / Future Opportunities"
  );

  const filteredJobs =
    activeDepartment === "All"
      ? openJobs
      : openJobs.filter((job) => job.department === activeDepartment);

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-16">
      {/* Open Positions */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <Badge variant="teal">Current Openings</Badge>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-navy">
              Open Positions at IraSoft Technologies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Explore our active roles across software engineering, Odoo ERP, AI automation, and digital growth. Apply directly below—no external portals required.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CAREER_DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveDepartment(dept)}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-xs font-semibold transition-all focus:outline-none",
                  activeDepartment === dept
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-white/95 text-slate-600 border border-slate-200 hover:bg-white hover:text-brand-navy"
                )}
              >
                {dept === "All" ? `All (${openJobs.length})` : dept}
              </button>
            ))}
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="bg-white/95 rounded-2xl border border-slate-200 p-8 text-center shadow-subtle">
            <p className="text-base font-semibold text-brand-navy">
              No active openings currently listed under {activeDepartment}.
            </p>
            <p className="text-sm text-slate-600 mt-1">
              You can still submit a General Application below so our team can reach out when a matching role opens.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className={cn(
                    "bg-white/95 rounded-2xl border transition-all duration-200 overflow-hidden shadow-subtle",
                    isExpanded
                      ? "border-brand-teal/70 shadow-card"
                      : "border-slate-200/90 hover:border-slate-300"
                  )}
                >
                  {/* Job Summary Row */}
                  <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    <div className="space-y-2.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="teal" size="sm">
                          {job.department}
                        </Badge>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-medium">
                          <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-medium">
                          <Briefcase className="w-3.5 h-3.5 text-brand-navy" />
                          {job.employmentType}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md font-medium">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          {job.experience}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                        {job.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {job.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold bg-brand-teal-light/70 text-brand-teal-dark px-2.5 py-0.5 rounded border border-teal-200/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedJobId(isExpanded ? null : job.id)
                        }
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-brand-navy transition-colors"
                      >
                        <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleApplyClick(job.title)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal hover:bg-brand-teal-dark text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors group"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Responsibilities & Requirements */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-6 border-t border-slate-100 bg-brand-surface/50 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {job.responsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-3">
                          What We Look For
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {job.requirements.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Sparkles className="w-4 h-4 text-brand-navy flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Application Form Section */}
      <div id="apply" className="scroll-mt-28">
        <JobApplicationForm
          openJobs={openJobs}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />
      </div>
    </div>
  );
}

