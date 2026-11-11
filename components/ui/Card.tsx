import { cn } from "@/lib/utils";
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white/95 rounded-xl border border-slate-200/85 shadow-subtle p-6 transition-all duration-300",
        hover && "hover:bg-white hover:shadow-card-hover hover:border-teal-200/90 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

