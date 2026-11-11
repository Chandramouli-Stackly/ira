import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/data/portfolio";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export function PortfolioPreview() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="py-20 bg-white/45 border-b border-slate-200/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Verified Deliverables"
            title="Real Systems Engineered by IraSoft"
            subtitle="Explore our live software deployments and enterprise systems built for real-world business operations."
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
              className="flex flex-col justify-between p-0 overflow-hidden border-slate-200 group"
            >
              <div>
                {/* Real Project Screenshot Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-slate-200/80">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {!project.isPlaceholder && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-600 text-white font-semibold px-2 py-0.5 rounded shadow-sm">
                        <CheckCircle2 className="w-3 h-3" />
                        Live Implementation
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {project.clientName || project.industry}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
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
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-teal transition-colors"
                >
                  <span>View Project Showcase</span>
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
