import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ARTICLES, getArticleBySlug } from "@/data/insights";
import { constructMetadata } from "@/lib/seo/metadata";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, CheckCircle2, Bookmark } from "lucide-react";
import { COMPANY } from "@/data/company";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return constructMetadata({
    title: `${article.title} | ${COMPANY.name} Insights`,
    description: article.summary,
    path: `/insights/${article.slug}`,
  });
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
      />

      <article className="py-16 sm:py-20 bg-white">
        <Container size="narrow">
          {/* Header */}
          <div className="space-y-4 border-b border-slate-200 pb-8 mb-10">
            <div className="flex items-center gap-2">
              <Badge variant="teal">{article.categoryLabel}</Badge>
              <span className="text-xs text-slate-500 font-medium">
                • {article.statusBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-3.5 h-3.5 text-brand-teal" />
                {article.author.name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 border border-slate-200 mb-10 text-slate-700 leading-relaxed font-medium">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-2">
              Executive Summary
            </span>
            <p>{article.summary}</p>
          </div>

          {/* Table of Contents */}
          {article.tableOfContents && (
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-brand-teal" />
                <span>Table of Contents</span>
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {article.tableOfContents.map((item, index) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-brand-teal font-semibold">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content Sections */}
          <div className="space-y-10 text-base sm:text-lg text-slate-700 leading-relaxed">
            {article.content.map((sec) => (
              <section key={sec.heading} className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-navy pt-2">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 bg-teal-50/60 rounded-2xl p-6 sm:p-8 border border-teal-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-teal-dark mb-4">
              Key Strategic Takeaways
            </h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((takeaway) => (
                <li
                  key={takeaway}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 rounded-xl border border-slate-200 bg-brand-surface flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg">
              IS
            </div>
            <div>
              <div className="font-bold text-sm text-brand-navy">{article.author.name}</div>
              <div className="text-xs text-slate-500">{article.author.role}</div>
            </div>
          </div>

          {/* Back & CTA */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-navy"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>

            <Button href="/contact" variant="teal" size="md">
              <span>Discuss Your Project With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-brand-surface border-t border-slate-200">
          <Container size="narrow">
            <h2 className="text-xl font-bold text-brand-navy mb-6">
              More Insights & Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
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
                      {rel.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors"
                    >
                      Read Guide →
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

