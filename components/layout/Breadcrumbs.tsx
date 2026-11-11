import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-slate-50 border-b border-slate-200/60 py-3 text-xs sm:text-sm">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-500 overflow-x-auto whitespace-nowrap py-0.5">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-brand-navy transition-colors text-slate-500"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.label}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-navy transition-colors text-slate-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-navy font-semibold truncate max-w-xs sm:max-w-md">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
