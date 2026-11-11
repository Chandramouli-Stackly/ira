import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/data/portfolio";
import { ArrowRight, Layers, ExternalLink } from "lucide-react";

export function PortfolioPreview() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Project Architecture"
            title="Ideas We Can Turn Into Digital Solutions"
            subtitle="Explore our solution frameworks and technical architectures designed for real-world enterprise operations."
            align="left"
            className="mb-0"
          />

          <Button href="/portfolio" variant="outline" size="md" className="self-start md:self-end whitespace-nowrap">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between p-6 border-slate-200"
            >
              <div>
                {/* Visual Placeholder Header */}
                <div className="rounded-lg bg-slate-100 border border-slate-200 p-6 mb-5 flex flex-col items-center justify-center text-center aspect-[16/10]">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-teal mb-2">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">
                    {project.industry}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal">
                    {project.categoryLabel}
                  </span>
                  {project.isPlaceholder && (
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      Architecture
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-brand-navy">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
