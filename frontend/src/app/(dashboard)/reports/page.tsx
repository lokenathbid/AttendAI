"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, FileSpreadsheet, CheckCircle2 } from "lucide-react";

export default function ReportsPage() {
  const [downloading, setDownloading] = useState(false);

  const handleExport = (format: string) => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Export Complete: Official ${format} Attendance Register generated with digital verification checksum.`);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <FileText className="h-5 w-5 text-indigo-400" />
          Official Academic Attendance Reports
        </h2>
        <p className="text-xs text-muted-foreground">
          Generate tamper-evident, verifiable attendance ledgers for exam eligibility audits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
              Comprehensive Semester Ledger (CSV / Excel)
            </CardTitle>
            <CardDescription className="text-xs">
              Raw lecture-by-lecture attendance records with student roll numbers, timestamps, and biometric match flags.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Department:</span>
                <span className="font-semibold text-foreground">Computer Science & Engineering</span>
              </div>
              <div className="flex justify-between">
                <span>Academic Semester:</span>
                <span className="font-semibold text-foreground">Semester 5 (Fall 2026)</span>
              </div>
              <div className="flex justify-between">
                <span>Total Lectures Audited:</span>
                <span className="font-mono text-foreground">130 sessions</span>
              </div>
            </div>

            <Button
              className="w-full gap-2"
              variant="outline"
              isLoading={downloading}
              onClick={() => handleExport("CSV")}
            >
              <Download className="h-4 w-4" />
              Download CSV Data File
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-indigo-400" />
              Debarment & Eligibility Notice (PDF)
            </CardTitle>
            <CardDescription className="text-xs">
              Official university circular formatted for academic council, detailing students with &lt; 75% attendance.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Eligible Candidates:</span>
                <span className="font-semibold text-emerald-400">112 / 120 (93.3%)</span>
              </div>
              <div className="flex justify-between">
                <span>Critical Shortage (&lt; 75%):</span>
                <span className="font-semibold text-rose-400">8 students</span>
              </div>
              <div className="flex justify-between">
                <span>Digital Signatures:</span>
                <span className="font-semibold text-foreground">HOD & Exam Controller</span>
              </div>
            </div>

            <Button
              className="w-full gap-2"
              isLoading={downloading}
              onClick={() => handleExport("PDF")}
            >
              <Download className="h-4 w-4" />
              Generate Official PDF Notice
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
