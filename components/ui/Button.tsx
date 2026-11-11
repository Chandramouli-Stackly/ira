import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "teal";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

    const variantStyles = {
      primary:
        "bg-brand-navy text-white hover:bg-brand-navy-light focus:ring-brand-navy shadow-sm hover:shadow active:scale-[0.99]",
      teal: "bg-brand-teal text-white hover:bg-brand-teal-dark focus:ring-brand-teal shadow-sm hover:shadow active:scale-[0.99]",
      secondary:
        "bg-brand-teal-light text-brand-teal-dark hover:bg-teal-100 focus:ring-brand-teal",
      outline:
        "border border-slate-300 text-brand-navy hover:bg-slate-50 hover:border-slate-400 focus:ring-brand-navy bg-white",
      ghost:
        "text-slate-700 hover:bg-slate-100 hover:text-brand-navy focus:ring-brand-navy",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
