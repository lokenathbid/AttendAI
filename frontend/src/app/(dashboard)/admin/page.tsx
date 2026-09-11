"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Server, Video, HardDrive, Cpu, Activity } from "lucide-react";
import { HealthBadge } from "@/components/layout/health-badge";

export default function AdminPage() {
  const cameraNodes = [
    { id: "NODE-01", room: "Lab 304 - Vision Suite", ip: "192.168.1.101", fps: 28, status: "ONLINE", stream: "RTSP HD", facesActive: 3 },
    { id: "NODE-02", room: "Auditorium 2", ip: "192.168.1.102", fps: 30, status: "ONLINE", stream: "RTSP 4K", facesActive: 0 },
    { id: "NODE-03", room: "Hall 2", ip: "192.168.1.103", fps: 0, status: "STANDBY", stream: "RTSP HD", facesActive: 0 },
    { id: "NODE-04", room: "Room 101", ip: "192.168.1.104", fps: 25, status: "ONLINE", stream: "RTSP HD", facesActive: 1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-indigo-400" />
            Infrastructure & Camera Nodes
          </h2>
          <p className="text-xs text-muted-foreground">
            Monitor real-time edge vision cameras, backend database connectivity, and security audits
          </p>
        </div>

        <HealthBadge />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border/70">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Server className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground uppercase font-semibold">PostgreSQL Database</span>
              <p className="text-base font-bold text-foreground">PostgreSQL 16</p>
              <span className="text-[10px] text-emerald-400 font-medium">Pool pre-ping active</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground uppercase font-semibold">Vision Camera Nodes</span>
              <p className="text-base font-bold text-foreground">3 / 4 Streaming</p>
              <span className="text-[10px] text-emerald-400 font-medium">Zero packet drops</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground uppercase font-semibold">Inference Latency</span>
              <p className="text-base font-bold text-foreground font-mono">42.8 ms</p>
              <span className="text-[10px] text-violet-300 font-medium">FaceNet DNN 512D</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground uppercase font-semibold">Biometric Vector Store</span>
              <p className="text-base font-bold text-foreground font-mono">120 Vectors</p>
              <span className="text-[10px] text-sky-300 font-medium">Encrypted & Salted</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Active Classroom Camera Nodes</CardTitle>
          <CardDescription className="text-xs">Edge ingestion endpoints streaming video frames for face verification</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border/70 text-muted-foreground uppercase text-[10px] tracking-wider">
                  <th className="pb-3 font-semibold">Node ID</th>
                  <th className="pb-3 font-semibold">Classroom Location</th>
                  <th className="pb-3 font-semibold">Edge IP Address</th>
                  <th className="pb-3 font-semibold">Stream Protocol</th>
                  <th className="pb-3 font-semibold">FPS</th>
                  <th className="pb-3 font-semibold text-right">Node Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {cameraNodes.map((n) => (
                  <tr key={n.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-3 font-mono font-semibold text-foreground">{n.id}</td>
                    <td className="py-3 font-medium text-foreground">{n.room}</td>
                    <td className="py-3 font-mono text-muted-foreground">{n.ip}</td>
                    <td className="py-3 font-mono text-muted-foreground">{n.stream}</td>
                    <td className="py-3 font-mono text-emerald-400 font-bold">{n.fps}</td>
                    <td className="py-3 text-right">
                      <Badge variant={n.status === "ONLINE" ? "success" : "secondary"}>
                        {n.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
