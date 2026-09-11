"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrainCircuit, AlertTriangle, Sparkles, TrendingDown, ArrowRight, Bell } from "lucide-react";

export default function RiskPredictionsPage() {
  const predictions = [
    {
      student_id: 1,
      name: "Aarav Sharma",
      roll: "22CS101",
      current_pct: 64.2,
      predicted_pct: 58.4,
      risk_level: "CRITICAL",
      score: 0.89,
      action: "Immediate HOD & Guardian notification; requires 100% attendance in next 10 lectures",
      factors: ["3 consecutive absences in Labs", "Downward 14-day trend", "Missing afternoon lectures"],
    },
    {
      student_id: 2,
      name: "Priya Patel",
      roll: "22CS102",
      current_pct: 68.5,
      predicted_pct: 69.8,
      risk_level: "CRITICAL",
      score: 0.74,
      action: "Faculty mentor counseling; issue formal warning letter",
      factors: ["Missed 4 Math lectures", "Irregular Monday attendance"],
    },
    {
      student_id: 5,
      name: "Rohan Verma",
      roll: "22CS105",
      current_pct: 72.0,
      predicted_pct: 74.1,
      risk_level: "MODERATE",
      score: 0.48,
      action: "Automated SMS/Email notification to student",
      factors: ["Slight attendance drift in elective subjects"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-violet-400" />
            AI Attendance Risk Modeling & Early Warning
          </h2>
          <p className="text-xs text-muted-foreground">
            Machine learning projections identifying students at risk of regulatory debarment before semester exams
          </p>
        </div>

        <Badge variant="default" className="gap-1 text-xs">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          Predictive Heuristics Active
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-rose-500/30 bg-rose-500/5">
          <CardContent className="p-5">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Critical Risk</span>
            <div className="text-2xl font-bold text-rose-400 mt-1 font-mono">2 Students</div>
            <p className="text-xs text-muted-foreground mt-1">Projected &lt; 65% end-semester attendance</p>
          </CardContent>
        </Card>

        <Card className="border-amber-500/30 bg-amber-500/5">
          <CardContent className="p-5">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Moderate Risk</span>
            <div className="text-2xl font-bold text-amber-400 mt-1 font-mono">6 Students</div>
            <p className="text-xs text-muted-foreground mt-1">Projected 65% - 74.9% (Borderline)</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-500/30 bg-emerald-500/5">
          <CardContent className="p-5">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Safe Standing</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1 font-mono">112 Students</div>
            <p className="text-xs text-muted-foreground mt-1">Projected &gt; 75% regulatory compliance</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Flagged High-Risk Profiles</h3>
        {predictions.map((p) => (
          <Card key={p.student_id} className="border-border/70 hover:border-violet-500/40 transition-all">
            <CardContent className="p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center font-bold text-violet-300">
                    {p.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                      {p.name}
                      <span className="font-mono text-xs text-muted-foreground font-normal">({p.roll})</span>
                    </h4>
                    <p className="text-xs text-muted-foreground">Department of Computer Science • Sem 5</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">Current vs Projected</span>
                    <span className="font-mono text-sm font-bold text-rose-400">
                      {p.current_pct}% &rarr; {p.predicted_pct}%
                    </span>
                  </div>
                  <Badge variant={p.risk_level === "CRITICAL" ? "destructive" : "warning"}>
                    {p.risk_level} (Score: {p.score})
                  </Badge>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-muted-foreground font-semibold">AI Risk Drivers:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.factors.map((f) => (
                      <span key={f} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground border border-border/60">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                  <span className="text-foreground">
                    <strong>Recommended Action:</strong> {p.action}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1 text-xs shrink-0"
                    onClick={() => alert(`Escalation dispatch initiated for ${p.name}`)}
                  >
                    <Bell className="h-3.5 w-3.5 text-indigo-400" />
                    Trigger Intervention
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
