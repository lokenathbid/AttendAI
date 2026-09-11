import React from "react";
import Link from "next/link";
import { HealthBadge } from "@/components/layout/health-badge";
import { APP_CONFIG } from "@/lib/constants";
import {
  Camera,
  ShieldCheck,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  Sparkles,
  Users,
  GraduationCap,
  ChevronRight,
  Layers,
  Database,
  CheckCircle2
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-600/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="h-20 border-b border-border/60 bg-background/80 backdrop-blur-xl px-6 md:px-12 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
            A
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-foreground block leading-tight">
              {APP_CONFIG.name}
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              {APP_CONFIG.hackathon} • {APP_CONFIG.problemStatement}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <HealthBadge />

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            Role Sign In
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-xs font-semibold shadow-lg shadow-indigo-500/25 transition-all active:scale-95"
          >
            Open Dashboard
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center max-w-6xl mx-auto relative z-10">
        {/* Hackathon Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 mb-6 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span>Smart India Hackathon 2026 • PS SIH26205 (Smart Education)</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl leading-[1.15] mb-6">
          AI-Powered Smart Attendance &{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Student Engagement System
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
          Transforming higher education classrooms through automated computer vision face recognition,
          anti-proxy liveness protection, subject-wise analytics, and predictive attendance risk forecasting.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 text-sm font-semibold shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-95"
          >
            Launch System Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/live-attendance"
            className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-secondary/60 hover:bg-secondary text-foreground px-6 py-3.5 text-sm font-semibold transition-all hover:border-emerald-500/50"
          >
            <Camera className="h-4 w-4 text-emerald-400" />
            Live Face Scanner Preview
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-foreground px-5 py-3.5 text-sm font-medium transition-all"
          >
            <Users className="h-4 w-4" />
            Switch Role
          </Link>
        </div>

        {/* Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
          <div className="p-5 rounded-2xl border border-border/70 bg-card/50 backdrop-blur-md hover:border-indigo-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
              <Camera className="h-5 w-5 text-indigo-400" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Face Recognition</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Automated multi-face detection from classroom feeds utilizing deep feature embeddings.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-border/70 bg-card/50 backdrop-blur-md hover:border-emerald-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Anti-Proxy Liveness</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Passive and active texture and eye-blink analysis preventing spoofing via photo or video playback.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-border/70 bg-card/50 backdrop-blur-md hover:border-violet-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
              <BrainCircuit className="h-5 w-5 text-violet-400" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Risk Prediction</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Predictive models calculating attendance decay trends to alert faculty before debarment.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-border/70 bg-card/50 backdrop-blur-md hover:border-sky-500/40 transition-all">
            <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3">
              <BarChart3 className="h-5 w-5 text-sky-400" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Institutional Analytics</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Subject-wise percentages, automatic defaulter lists, and exportable academic audit registers.
            </p>
          </div>
        </div>

        {/* Architecture Spec Highlights */}
        <div className="mt-16 w-full p-6 rounded-2xl border border-border/70 bg-secondary/20 backdrop-blur-xl text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-4">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">System Decoupling</span>
              <h4 className="text-base font-bold text-foreground">Clean Dual-Tier Stack Architecture</h4>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Next.js 14 Client</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> FastAPI Python AI</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> PostgreSQL</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All AI computation, OpenCV DNN models, and facial vector indexing are strictly managed by the Python backend. The Next.js client interacts entirely via structured, typed REST API services.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card/30 backdrop-blur-md py-6 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>
          <span>© 2026 {APP_CONFIG.name} • SIH 2026 Problem Statement ID: {APP_CONFIG.problemStatement}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">Overview</Link>
          <Link href="/live-attendance" className="hover:text-foreground transition-colors">Camera HUD</Link>
          <Link href="/predictions" className="hover:text-foreground transition-colors">Risk Index</Link>
          <Link href="/admin" className="hover:text-foreground transition-colors">Diagnostics</Link>
        </div>
      </footer>
    </div>
  );
}
