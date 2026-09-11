import React from "react";
import Link from "next/link";
import { Camera, UserPlus, FileSpreadsheet, Sparkles } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      title: "Start Live Session",
      desc: "Open camera face recognition HUD",
      icon: <Camera className="h-5 w-5 text-indigo-400" />,
      href: "/live-attendance",
      bg: "hover:border-indigo-500/50 hover:bg-indigo-500/5",
    },
    {
      title: "Enroll Biometrics",
      desc: "Register new student facial vector",
      icon: <UserPlus className="h-5 w-5 text-emerald-400" />,
      href: "/students",
      bg: "hover:border-emerald-500/50 hover:bg-emerald-500/5",
    },
    {
      title: "Export Ledger",
      desc: "Download verified PDF/CSV logs",
      icon: <FileSpreadsheet className="h-5 w-5 text-sky-400" />,
      href: "/reports",
      bg: "hover:border-sky-500/50 hover:bg-sky-500/5",
    },
    {
      title: "Run Risk Forecast",
      desc: "Execute AI debarment heuristics",
      icon: <Sparkles className="h-5 w-5 text-violet-400" />,
      href: "/predictions",
      bg: "hover:border-violet-500/50 hover:bg-violet-500/5",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {actions.map((act) => (
        <Link
          key={act.title}
          href={act.href}
          className={`p-4 rounded-xl border border-border/70 bg-card/60 backdrop-blur-md transition-all duration-200 ${act.bg} group`}
        >
          <div className="h-10 w-10 rounded-lg bg-secondary/80 border border-border/50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            {act.icon}
          </div>
          <h4 className="text-sm font-semibold text-foreground">{act.title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{act.desc}</p>
        </Link>
      ))}
    </div>
  );
}
