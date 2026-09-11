import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "border-transparent bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    secondary: "border-transparent bg-secondary text-secondary-foreground border border-border/60",
    success: "border-transparent bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    warning: "border-transparent bg-amber-500/20 text-amber-300 border border-amber-500/30",
    destructive: "border-transparent bg-rose-500/20 text-rose-300 border border-rose-500/30",
    outline: "text-foreground border border-border/80",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
