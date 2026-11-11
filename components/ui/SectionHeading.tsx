import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  badgeVariant?: "teal" | "primary" | "amber" | "neutral";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  badgeVariant = "teal",
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <div className={cn("mb-3", align === "center" ? "flex justify-center" : "flex")}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

