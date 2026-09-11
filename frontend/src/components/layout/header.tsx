"use client";

import React from "react";
import { HealthBadge } from "./health-badge";
import { Bell, Search, UserCheck } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({ title = "Dashboard Overview", subtitle = "Real-time attendance & student engagement intelligence" }: HeaderProps) {
  return (
    <header className="h-16 border-b border-border/70 bg-card/30 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-20">
      <div>
        <h1 className="text-base font-semibold text-foreground tracking-tight">{title}</h1>
        <p className="text-xs text-muted-foreground hidden sm:block">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Backend Live Health Indicator */}
        <HealthBadge />

        {/* Global Search Bar Stub */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search student, roll no..."
            className="h-9 w-56 rounded-full border border-border/70 bg-secondary/40 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Alerts Icon */}
        <button
          className="relative h-9 w-9 rounded-full border border-border/70 bg-secondary/40 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          title="2 Defaulter Risk Alerts"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500" />
        </button>

        {/* Role Portal Shortcut */}
        <Link
          href="/login"
          className="flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs text-foreground hover:bg-secondary/80 transition-all"
        >
          <div className="h-5 w-5 rounded-full bg-indigo-600/30 text-indigo-300 flex items-center justify-center font-bold text-[10px]">
            <UserCheck className="h-3 w-3" />
          </div>
          <span className="font-medium hidden sm:inline">Role Switcher</span>
        </Link>
      </div>
    </header>
  );
}
