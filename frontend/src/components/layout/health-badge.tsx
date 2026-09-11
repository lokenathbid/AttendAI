"use client";

import React, { useEffect, useState } from "react";
import { healthService } from "@/services/health.service";
import { SystemHealth } from "@/types";
import { Activity, Server, Cpu } from "lucide-react";

export function HealthBadge() {
  const [health, setHealth] = useState<SystemHealth | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const check = async () => {
      const data = await healthService.checkHealth();
      if (isMounted) {
        setHealth(data);
        setLoading(false);
      }
    };
    check();
    const interval = setInterval(check, 15000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
        <span className="h-2 w-2 animate-ping rounded-full bg-slate-400" />
        <span>Connecting backend...</span>
      </div>
    );
  }

  const isHealthy = health?.status === "healthy";
  const isDegraded = health?.status === "degraded";

  return (
    <div
      className="group relative flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs backdrop-blur-md cursor-pointer transition-all hover:border-indigo-500/50"
      title={`Backend: ${health?.status} | DB: ${health?.database.status} | AI: ${health?.ai_subsystem.status}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          isHealthy
            ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            : isDegraded
            ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
            : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
        }`}
      />
      <span className="font-medium text-foreground">
        {isHealthy ? "Backend Live" : isDegraded ? "DB Degraded" : "API Offline"}
      </span>
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider hidden sm:inline">
        FastAPI v{health?.version || "1.0"}
      </span>

      {/* Hover tooltip with deep subsystem details */}
      <div className="absolute right-0 top-full mt-2 hidden w-64 rounded-xl border border-border/80 bg-card p-3 shadow-xl backdrop-blur-xl group-hover:block z-50">
        <div className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
          <Activity className="h-3.5 w-3.5 text-indigo-400" />
          Subsystem Diagnostics
        </div>
        <div className="space-y-1.5 text-[11px] text-muted-foreground">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <Server className="h-3 w-3" /> Database ({health?.database.dialect}):
            </span>
            <span className={health?.database.connected ? "text-emerald-400" : "text-amber-400 font-medium"}>
              {health?.database.status}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <Cpu className="h-3 w-3" /> Face Recognition:
            </span>
            <span className="text-emerald-400">
              {health?.ai_subsystem.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
