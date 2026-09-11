"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, PieChart, AlertTriangle } from "lucide-react";
import { AttendanceChart } from "@/components/dashboard/attendance-chart";

export default function AnalyticsPage() {
  const trends = [
    { date: "2026-09-02", attendance_pct: 92.4, total_students: 120, present_count: 111 },
    { date: "2026-09-03", attendance_pct: 88.5, total_students: 120, present_count: 106 },
    { date: "2026-09-04", attendance_pct: 94.1, total_students: 120, present_count: 113 },
    { date: "2026-09-05", attendance_pct: 87.2, total_students: 120, present_count: 105 },
    { date: "2026-09-06", attendance_pct: 91.0, total_students: 120, present_count: 109 },
    { date: "2026-09-07", attendance_pct: 89.6, total_students: 120, present_count: 108 },
    { date: "2026-09-08", attendance_pct: 93.8, total_students: 120, present_count: 112 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-indigo-400" />
          Institutional Attendance Analytics
        </h2>
        <p className="text-xs text-muted-foreground">
          Longitudinal presence trends, department benchmarks, and student retention analytics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AttendanceChart data={trends} />

        <Card className="border-border/70">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <PieChart className="h-4 w-4 text-emerald-400" />
              Attendance Tier Distribution
            </CardTitle>
            <CardDescription className="text-xs">
              Students categorized by regulatory thresholds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-emerald-400 font-semibold">&gt; 85% (Distinction Standing)</span>
                <span className="font-mono text-foreground">78 students (65%)</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[65%]" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-indigo-400 font-semibold">75% - 85% (Eligible Range)</span>
                <span className="font-mono text-foreground">34 students (28%)</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full w-[28%]" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-rose-400 font-semibold">&lt; 75% (Critical Defaulters)</span>
                <span className="font-mono text-rose-400 font-bold">8 students (7%)</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full w-[7%]" />
              </div>
            </div>

            <div className="pt-3 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">
              Overall student retention remains at 93.3% with peak absence rates observed on Friday afternoon lab periods.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
