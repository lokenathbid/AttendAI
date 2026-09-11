import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: React.ReactNode;
  description?: string;
  variant?: "default" | "warning" | "destructive" | "success";
}

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon,
  description,
  variant = "default",
}: StatCardProps) {
  const borderVariants = {
    default: "border-border/70 hover:border-indigo-500/40",
    warning: "border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5",
    destructive: "border-rose-500/30 hover:border-rose-500/60 bg-rose-500/5",
    success: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5",
  };

  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5", borderVariants[variant])}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
          <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-foreground">
            {icon}
          </div>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground">{value}</span>
          {change && (
            <span
              className={cn(
                "inline-flex items-center text-xs font-semibold",
                isPositive ? "text-emerald-400" : "text-rose-400"
              )}
            >
              {isPositive ? <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" /> : <ArrowDownRight className="h-3.5 w-3.5 mr-0.5" />}
              {change}
            </span>
          )}
        </div>

        {description && (
          <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
