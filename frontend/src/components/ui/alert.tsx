import * as React from "react";
import { cn } from "@/lib/utils";

export function Alert({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" | "warning" | "success" }) {
  const styles = {
    default: "bg-indigo-500/10 border-indigo-500/30 text-indigo-200",
    destructive: "bg-rose-500/10 border-rose-500/30 text-rose-200",
    warning: "bg-amber-500/10 border-amber-500/30 text-amber-200",
    success: "bg-emerald-500/10 border-emerald-500/30 text-emerald-200",
  };

  return (
    <div
      role="alert"
      className={cn("relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current", styles[variant], className)}
      {...props}
    />
  );
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn("mb-1 font-semibold leading-none tracking-tight", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <div className={cn("text-sm opacity-90", className)} {...props} />;
}
