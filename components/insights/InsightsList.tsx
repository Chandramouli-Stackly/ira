"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ARTICLES, INSIGHT_CATEGORIES } from "@/data/insights";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, Clock, Calendar, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function InsightsList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES[0];

  return (
    <div>
      {/* Featured Article Card (shown when no search filter active) */}
      {!searchQuery && activeCategory === "all" && featuredArticle && (
        <div className="mb-14 bg-brand-surface rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-subtle hover:shadow-card transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="teal">{featuredArticle.statusBadge}</Badge>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Featured Insight
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="hover:text-brand-teal transition-colors"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {featuredArticle.summary}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-brand-teal" />
                  {featuredArticle.author.name}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {featuredArticle.publishedDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {featuredArticle.readingTime}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters Bar */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {INSIGHT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none",
                activeCategory === cat.id
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-white"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Card
            key={article.id}
            className="flex flex-col justify-between p-6 border-slate-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  {article.categoryLabel}
                </span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {article.readingTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-brand-navy hover:text-brand-teal transition-colors">
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {article.publishedDate}
              </span>
              <Link
                href={`/insights/${article.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 bg-brand-surface rounded-2xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-600">
            No articles found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
