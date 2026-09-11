"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  ShieldCheck,
  RefreshCw,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Play,
  Pause,
  Scan
} from "lucide-react";

export default function LiveAttendancePage() {
  const [isScanning, setIsScanning] = useState(true);
  const [simulatedCount, setSimulatedCount] = useState(38);

  const recognizedStudents = [
    { roll: "22CS101", name: "Aarav Sharma", confidence: 97.4, liveness: 99.1, status: "VERIFIED", time: "11:42:15 AM" },
    { roll: "22CS103", name: "Kabir Nair", confidence: 95.8, liveness: 98.4, status: "VERIFIED", time: "11:42:18 AM" },
    { roll: "22CS104", name: "Diya Sengupta", confidence: 94.2, liveness: 96.9, status: "VERIFIED", time: "11:42:22 AM" },
    { roll: "22CS112", name: "Vikram Malhotra", confidence: 96.0, liveness: 98.7, status: "VERIFIED", time: "11:42:25 AM" },
    { roll: "22CS115", name: "Neha Joshi", confidence: 98.2, liveness: 99.4, status: "VERIFIED", time: "11:42:30 AM" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Camera className="h-5 w-5 text-indigo-400" />
            Classroom Facial Attendance Scanner
          </h2>
          <p className="text-xs text-muted-foreground">
            Multi-face detection stream with dual-tier anti-spoofing liveness verification
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={isScanning ? "destructive" : "success"}
            size="sm"
            onClick={() => setIsScanning(!isScanning)}
            className="gap-1.5"
          >
            {isScanning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {isScanning ? "Pause Ingestion" : "Resume Camera"}
          </Button>

          <Button variant="outline" size="sm" className="gap-1.5">
            <RefreshCw className="h-3.5 w-3.5" />
            Calibrate Lighting
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Camera HUD */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-border/70 overflow-hidden bg-slate-950">
            <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center border-b border-border/60 overflow-hidden">
              {/* Camera Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

              {/* Scanning Laser Animation */}
              {isScanning && (
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse shadow-[0_0_12px_#34d399]" />
              )}

              {/* Face Detection Bounding Boxes */}
              <div className="absolute top-[22%] left-[18%] w-28 h-32 border-2 border-emerald-400 rounded-lg flex flex-col justify-between p-1.5 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <div className="flex justify-between items-center text-[10px] font-mono bg-black/70 px-1 rounded text-emerald-300">
                  <span>Aarav S.</span>
                  <span>97%</span>
                </div>
                <div className="text-[9px] font-mono text-emerald-400 bg-black/80 px-1 rounded text-center">
                  Liveness: 0.99 (Blink OK)
                </div>
              </div>

              <div className="absolute top-[28%] left-[52%] w-28 h-32 border-2 border-emerald-400 rounded-lg flex flex-col justify-between p-1.5 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <div className="flex justify-between items-center text-[10px] font-mono bg-black/70 px-1 rounded text-emerald-300">
                  <span>Kabir N.</span>
                  <span>95%</span>
                </div>
                <div className="text-[9px] font-mono text-emerald-400 bg-black/80 px-1 rounded text-center">
                  Liveness: 0.98 (Blink OK)
                </div>
              </div>

              {/* Central crosshair */}
              <Scan className="h-16 w-16 text-indigo-500/20" />

              {/* Telemetry Footer */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/70 backdrop-blur-md rounded-lg px-3 py-1.5 text-xs font-mono text-slate-300 border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    28 FPS
                  </span>
                  <span>Resolution: 1920x1080</span>
                  <span className="hidden sm:inline">Engine: FaceNet DNN 512D</span>
                </div>

                <div className="flex items-center gap-2 text-indigo-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Anti-Spoof: PASS</span>
                </div>
              </div>
            </div>

            <CardContent className="p-4 flex items-center justify-between text-xs text-muted-foreground bg-card/60">
              <div className="flex items-center gap-4">
                <span>Active Room: <strong className="text-foreground">Lab 304 - Computer Vision Suite</strong></span>
                <span>Subject: <strong className="text-foreground">CS302 - DBMS</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span>Total Present: <strong className="text-emerald-400 text-sm font-mono">{simulatedCount} / 42</strong></span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-Time Verified Log Sidebar */}
        <div className="space-y-4">
          <Card className="border-border/70">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Live Verification Ingestion
                </CardTitle>
                <Badge variant="success" className="text-[10px]">
                  Real-Time
                </Badge>
              </div>
              <CardDescription className="text-xs">
                Timestamped biometric confirmation logs
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {recognizedStudents.map((item) => (
                <div
                  key={item.roll}
                  className="p-2.5 rounded-lg bg-secondary/30 border border-border/50 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-foreground">{item.name}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">({item.roll})</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      Match: <span className="text-emerald-400 font-mono">{item.confidence}%</span> • Liveness:{" "}
                      <span className="text-indigo-400 font-mono">{item.liveness}%</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="success" className="text-[9px] px-1.5 py-0">
                      Present
                    </Badge>
                    <p className="text-[9px] font-mono text-muted-foreground mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Anti-Proxy Security Metric Card */}
          <Card className="border-emerald-500/20 bg-emerald-500/5">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <Eye className="h-4 w-4 text-emerald-400" />
                Anti-Proxy Biometric Protection
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Optical flow, eye-blink frequency (EAR), and frequency texture algorithms continuously analyze video frames to reject photo prints, phone screens, and pre-recorded video proxies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
