import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
