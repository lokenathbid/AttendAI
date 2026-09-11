"use client";

import React, { useEffect, useState } from "react";
import { analyticsService } from "@/services/analytics.service";
import { AnalyticsOverview, DefaulterStudent } from "@/types";
import { StatCard } from "@/components/dashboard/stat-card";
import { AttendanceChart } from "@/components/dashboard/attendance-chart";
import { LiveScannerPreview } from "@/components/dashboard/live-scanner-preview";
import { DefaulterAlertCard } from "@/components/dashboard/defaulter-alert-card";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  Radio,
  BookOpen,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

// Fallback seed in case backend is temporarily unreachable
const FALLBACK_OVERVIEW: AnalyticsOverview = {
  overall_attendance_pct: 89.6,
  total_enrolled_students: 120,
  active_sessions_today: 4,
  defaulters_count: 4,
  attendance_trends: [
    { date: "2026-09-02", attendance_pct: 92.4, total_students: 120, present_count: 111 },
    { date: "2026-09-03", attendance_pct: 88.5, total_students: 120, present_count: 106 },
    { date: "2026-09-04", attendance_pct: 94.1, total_students: 120, present_count: 113 },
    { date: "2026-09-05", attendance_pct: 87.2, total_students: 120, present_count: 105 },
    { date: "2026-09-06", attendance_pct: 91.0, total_students: 120, present_count: 109 },
    { date: "2026-09-07", attendance_pct: 89.6, total_students: 120, present_count: 108 },
    { date: "2026-09-08", attendance_pct: 93.8, total_students: 120, present_count: 112 },
  ],
  subject_stats: [
    { subject_code: "CS301", subject_name: "Data Structures & Algorithms", total_classes: 28, avg_attendance_pct: 91.2 },
    { subject_code: "CS302", subject_name: "Database Management Systems", total_classes: 24, avg_attendance_pct: 88.4 },
    { subject_code: "CS303", subject_name: "Computer Networks", total_classes: 26, avg_attendance_pct: 79.8 },
    { subject_code: "CS304", subject_name: "Theory of Computation", total_classes: 22, avg_attendance_pct: 74.5 },
    { subject_code: "AI305", subject_name: "Artificial Intelligence & ML", total_classes: 30, avg_attendance_pct: 95.0 },
  ],
};

const FALLBACK_DEFAULTERS: DefaulterStudent[] = [
  {
    id: 1,
    student_name: "Aarav Sharma",
    roll_number: "22CS101",
    department: "Computer Science",
    semester: 5,
    attendance_pct: 64.2,
    classes_held: 84,
    classes_attended: 54,
    shortage_classes: 9,
    risk_level: "CRITICAL",
  },
  {
    id: 2,
    student_name: "Priya Patel",
    roll_number: "22CS102",
    department: "Computer Science",
    semester: 5,
    attendance_pct: 68.5,
    classes_held: 84,
    classes_attended: 57,
    shortage_classes: 6,
    risk_level: "CRITICAL",
  },
  {
    id: 3,
    student_name: "Rohan Verma",
    roll_number: "22CS142",
    department: "Computer Science",
    semester: 5,
    attendance_pct: 72.0,
    classes_held: 84,
    classes_attended: 60,
    shortage_classes: 3,
    risk_level: "MODERATE",
  },
];

export default function DashboardPage() {
  const [overview, setOverview] = useState<AnalyticsOverview>(FALLBACK_OVERVIEW);
  const [defaulters, setDefaulters] = useState<DefaulterStudent[]>(FALLBACK_DEFAULTERS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const [ovData, defData] = await Promise.all([
          analyticsService.getOverview(),
          analyticsService.getDefaulters(75.0),
        ]);
        if (isMounted) {
          setOverview(ovData);
          setDefaulters(defData);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome & Context Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-border/70 bg-gradient-to-r from-card/80 via-indigo-950/20 to-card/80 backdrop-blur-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Classroom Intelligence Overview
            </h2>
            <Badge variant="default" className="gap-1">
              <Sparkles className="h-3 w-3 text-indigo-400" />
              SIH 2026 PS SIH26205
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Academic Session 2026–2027 • Computer Science & Engineering Department
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/live-attendance"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 text-xs font-semibold shadow-md shadow-emerald-500/20 transition-all active:scale-95"
          >
            <Radio className="h-3.5 w-3.5 animate-pulse" />
            Launch Live Feed
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Overall Attendance"
          value={`${overview.overall_attendance_pct}%`}
          change="+2.4% vs last week"
          isPositive={true}
          description="Average institutional presence across all departments"
          icon={<CheckCircle2 className="h-5 w-5 text-emerald-400" />}
          variant="success"
        />

        <StatCard
          title="Total Enrolled"
          value={String(overview.total_enrolled_students)}
          change="100% face enrolled"
          isPositive={true}
          description="Biometric vectors active in database"
          icon={<Users className="h-5 w-5 text-indigo-400" />}
        />

        <StatCard
          title="Active Sessions"
          value={String(overview.active_sessions_today)}
          change="4 camera streams"
          isPositive={true}
          description="Real-time multi-face ingestion running"
          icon={<Radio className="h-5 w-5 text-sky-400" />}
        />

        <StatCard
          title="Defaulters (< 75%)"
          value={String(overview.defaulters_count)}
          change="Immediate action"
          isPositive={false}
          description="Students subject to exam debarment"
          icon={<AlertTriangle className="h-5 w-5 text-rose-400" />}
          variant="destructive"
        />
      </div>

      {/* Quick Action Shortcuts */}
      <QuickActions />

      {/* Analytics Chart & Face Recognition HUD Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AttendanceChart data={overview.attendance_trends} />
        <LiveScannerPreview />
      </div>

      {/* Defaulter Alert & Subject-wise Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DefaulterAlertCard defaulters={defaulters} />

        {/* Subject-Wise Performance Breakdown */}
        <Card className="border-border/70">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-sky-400" />
                Subject-Wise Attendance Distribution
              </CardTitle>
              <CardDescription className="text-xs">
                Semester 5 Core & Elective lecture attendance rates
              </CardDescription>
            </div>
            <Link
              href="/subjects"
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
            >
              All Courses <ArrowUpRight className="h-3 w-3" />
            </Link>
          </CardHeader>

          <CardContent className="space-y-3">
            {overview.subject_stats.map((sub) => {
              const isBelowThreshold = sub.avg_attendance_pct < 75.0;
              return (
                <div key={sub.subject_code} className="space-y-1.5 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-foreground">
                      {sub.subject_code}: {sub.subject_name}
                    </span>
                    <span
                      className={`font-mono font-bold ${
                        isBelowThreshold ? "text-rose-400" : "text-foreground"
                      }`}
                    >
                      {sub.avg_attendance_pct}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 w-full rounded-full bg-secondary/80 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isBelowThreshold
                          ? "bg-rose-500"
                          : sub.avg_attendance_pct > 90
                          ? "bg-emerald-500"
                          : "bg-indigo-500"
                      }`}
                      style={{ width: `${sub.avg_attendance_pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>{sub.total_classes} total lectures recorded</span>
                    {isBelowThreshold && (
                      <span className="text-rose-400 font-medium">Below 75% regulatory cutoff</span>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
