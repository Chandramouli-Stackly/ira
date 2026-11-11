import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "teal" | "amber" | "neutral" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "teal",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    teal: "bg-brand-teal-light text-brand-teal-dark border border-teal-200/60",
    primary: "bg-blue-50 text-brand-navy border border-blue-200/60",
    amber: "bg-amber-50 text-amber-800 border border-amber-200",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    outline: "border border-slate-300 text-slate-600 bg-white",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-medium rounded",
    md: "text-xs px-2.5 py-1 font-semibold rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 uppercase tracking-wider",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
