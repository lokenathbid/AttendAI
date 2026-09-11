"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV_ITEMS, APP_CONFIG } from "@/lib/constants";
import {
  LayoutDashboard,
  Camera,
  GraduationCap,
  Users,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  BrainCircuit,
  FileText,
  ShieldCheck,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="h-4 w-4" />,
  Camera: <Camera className="h-4 w-4" />,
  GraduationCap: <GraduationCap className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  BookOpen: <BookOpen className="h-4 w-4" />,
  ClipboardCheck: <ClipboardCheck className="h-4 w-4" />,
  BarChart3: <BarChart3 className="h-4 w-4" />,
  BrainCircuit: <BrainCircuit className="h-4 w-4" />,
  FileText: <FileText className="h-4 w-4" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4" />,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border/70 bg-card/40 backdrop-blur-xl flex flex-col h-screen sticky top-0 z-30 transition-all">
      {/* Brand & Problem Statement Banner */}
      <div className="p-5 border-b border-border/60">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25">
            A
          </div>
          <div>
            <div className="font-bold text-base tracking-tight text-foreground flex items-center gap-1.5">
              {APP_CONFIG.name}
              <span className="inline-block rounded bg-indigo-500/20 px-1 py-0.2 text-[9px] font-semibold text-indigo-400 border border-indigo-500/30">
                PRO
              </span>
            </div>
            <div className="text-[10px] text-muted-foreground font-mono">
              SIH 2026 • {APP_CONFIG.problemStatement}
            </div>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Core Modules
        </div>

        {MAIN_NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 font-semibold"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(isActive ? "text-indigo-400" : "text-muted-foreground group-hover:text-foreground")}>
                  {ICON_MAP[item.icon] || <LayoutDashboard className="h-4 w-4" />}
                </span>
                <span>{item.title}</span>
              </div>

              {item.badge ? (
                <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-medium text-indigo-300 border border-indigo-500/30">
                  {item.badge}
                </span>
              ) : isActive ? (
                <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              ) : null}
            </Link>
          );
        })}
      </div>

      {/* Hackathon Info Card in Footer */}
      <div className="p-3 m-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300 mb-1">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          Smart Education PS
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Automated face recognition, liveness anti-spoofing & predictive attendance analytics.
        </p>
      </div>
    </aside>
  );
}
