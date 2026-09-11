"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Send, BellRing, ArrowRight } from "lucide-react";
import { DefaulterStudent } from "@/types";
import Link from "next/link";

interface DefaulterAlertCardProps {
  defaulters: DefaulterStudent[];
}

export function DefaulterAlertCard({ defaulters }: DefaulterAlertCardProps) {
  return (
    <Card className="border-amber-500/30 bg-amber-500/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base flex items-center gap-2 text-amber-300">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              Low-Attendance Risk Register (&lt; 75%)
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Students facing regulatory exam debarment without immediate intervention
            </CardDescription>
          </div>
          <Badge variant="destructive" className="font-semibold">
            {defaulters.length} Critical
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-2.5">
        {defaulters.slice(0, 3).map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between p-3 rounded-xl bg-card/80 border border-border/80 text-xs transition-all hover:border-amber-500/40"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{student.student_name}</span>
                <span className="font-mono text-[10px] text-muted-foreground">({student.roll_number})</span>
                <Badge
                  variant={student.risk_level === "CRITICAL" ? "destructive" : "warning"}
                  className="text-[9px] px-1.5 py-0"
                >
                  {student.risk_level}
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Attended: {student.classes_attended}/{student.classes_held} classes •{" "}
                <span className="text-amber-400 font-medium">Short by {student.shortage_classes} classes</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-base font-bold text-rose-400 font-mono">
                  {student.attendance_pct}%
                </span>
                <p className="text-[9px] text-muted-foreground">Min Req: 75%</p>
              </div>

              <button
                className="h-7 px-2.5 rounded-md bg-secondary hover:bg-secondary/80 border border-border/70 text-[11px] text-foreground inline-flex items-center gap-1 transition-all"
                title="Send notification to guardian"
                onClick={() => alert(`Advisory alert dispatched to guardian of ${student.student_name}`)}
              >
                <Send className="h-3 w-3 text-indigo-400" />
                Alert
              </button>
            </div>
          </div>
        ))}

        <div className="pt-1 flex justify-between items-center text-xs">
          <span className="text-muted-foreground">Threshold enforced by UGC/AICTE norms</span>
          <Link
            href="/predictions"
            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
          >
            View AI Risk Forecast
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
