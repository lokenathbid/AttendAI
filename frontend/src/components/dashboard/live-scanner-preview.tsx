"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, ShieldCheck, CheckCircle2, UserCheck, RefreshCw } from "lucide-react";
import Link from "next/link";

export function LiveScannerPreview() {
  const [isLive, setIsLive] = useState(true);

  return (
    <Card className="border-border/70 overflow-hidden flex flex-col justify-between">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base flex items-center gap-2">
              <Camera className="h-4 w-4 text-emerald-400" />
              Live Face Recognition HUD
            </CardTitle>
            <CardDescription className="text-xs">
              Room 301 • CS302 Database Systems Lecture
            </CardDescription>
          </div>
          <Badge variant="success" className="gap-1 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Active Feed
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Simulated Camera Feed Viewport */}
        <div className="relative aspect-video w-full rounded-lg bg-slate-950 border border-border/80 overflow-hidden flex items-center justify-center">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />

          {/* Face Detection Bounding Boxes */}
          <div className="absolute top-[20%] left-[15%] w-24 h-28 border-2 border-emerald-400/80 rounded-md flex flex-col justify-between p-1 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-mono bg-emerald-950/80 text-emerald-300 px-1 rounded border border-emerald-500/40">
                Aarav S.
              </span>
              <span className="text-[9px] font-mono text-emerald-300">97%</span>
            </div>
            <div className="text-[8px] text-emerald-400 font-mono bg-black/60 px-0.5 rounded text-center">
              LIVE (0.99)
            </div>
          </div>

          <div className="absolute top-[25%] left-[55%] w-24 h-28 border-2 border-emerald-400/80 rounded-md flex flex-col justify-between p-1 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-mono bg-emerald-950/80 text-emerald-300 px-1 rounded border border-emerald-500/40">
                Kabir N.
              </span>
              <span className="text-[9px] font-mono text-emerald-300">95%</span>
            </div>
            <div className="text-[8px] text-emerald-400 font-mono bg-black/60 px-0.5 rounded text-center">
              LIVE (0.98)
            </div>
          </div>

          {/* Camera Telemetry Bar */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/60 backdrop-blur-md rounded-md px-2.5 py-1 text-[10px] font-mono text-slate-300 border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">● 28 FPS</span>
              <span>1080p @ 30Hz</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-300">
              <ShieldCheck className="h-3 w-3" />
              <span>Anti-Proxy Active</span>
            </div>
          </div>
        </div>

        {/* Real-time Recognition Mini-feed */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
            <span>Recent Face Verifications</span>
            <span className="text-emerald-400 font-medium">3 verified this minute</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/40 border border-border/50 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-[10px]">
                AS
              </div>
              <div>
                <p className="font-semibold text-foreground leading-tight">Aarav Sharma (22CS101)</p>
                <p className="text-[10px] text-muted-foreground">Match: 97.4% • Blink confirmed</p>
              </div>
            </div>
            <Badge variant="success" className="text-[10px] px-2 py-0">
              Present
            </Badge>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/live-attendance"
            className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/30 text-indigo-300 text-xs font-semibold py-2 transition-all gap-1.5"
          >
            <UserCheck className="h-3.5 w-3.5" />
            Open Full Attendance Scanner
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
