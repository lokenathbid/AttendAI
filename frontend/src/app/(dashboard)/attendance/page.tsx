"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Filter, Search, Camera, CheckCircle2, XCircle, Clock } from "lucide-react";

export default function AttendanceLogsPage() {
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const records = [
    { id: 1, session: "CS302 - DBMS", student: "Aarav Sharma", roll: "22CS101", date: "2026-09-08 11:30", status: "PRESENT", method: "FACE_RECOGNITION", confidence: "97.4%", liveness: "Verified (0.99)" },
    { id: 2, session: "CS302 - DBMS", student: "Kabir Nair", roll: "22CS103", date: "2026-09-08 11:30", status: "PRESENT", method: "FACE_RECOGNITION", confidence: "95.8%", liveness: "Verified (0.98)" },
    { id: 3, session: "CS302 - DBMS", student: "Priya Patel", roll: "22CS102", date: "2026-09-08 11:30", status: "ABSENT", method: "MANUAL_TEACHER", confidence: "-", liveness: "-" },
    { id: 4, session: "CS301 - DSA", student: "Diya Sengupta", roll: "22CS104", date: "2026-09-08 10:15", status: "PRESENT", method: "FACE_RECOGNITION", confidence: "94.2%", liveness: "Verified (0.96)" },
    { id: 5, session: "CS301 - DSA", student: "Rohan Verma", roll: "22CS105", date: "2026-09-08 10:15", status: "LATE", method: "MANUAL_TEACHER", confidence: "-", liveness: "-" },
  ];

  const filtered = filterStatus === "ALL" ? records : records.filter((r) => r.status === filterStatus);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-indigo-400" />
            Classroom Attendance Audit Logs
          </h2>
          <p className="text-xs text-muted-foreground">
            Timestamped verification records with facial recognition confidence scores
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setFilterStatus("ALL")}>
            All
          </Button>
          <Button variant="outline" size="sm" onClick={() => setFilterStatus("PRESENT")} className="text-emerald-400">
            Present
          </Button>
          <Button variant="outline" size="sm" onClick={() => setFilterStatus("ABSENT")} className="text-rose-400">
            Absent
          </Button>
        </div>
      </div>

      <Card className="border-border/70">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Attendance Transactions</CardTitle>
          <CardDescription className="text-xs">
            Showing {filtered.length} audited records for today
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border/70 text-muted-foreground uppercase text-[10px] tracking-wider">
                  <th className="pb-3 font-semibold">Session</th>
                  <th className="pb-3 font-semibold">Student Name</th>
                  <th className="pb-3 font-semibold">Roll No</th>
                  <th className="pb-3 font-semibold">Marked Time</th>
                  <th className="pb-3 font-semibold">Verification Channel</th>
                  <th className="pb-3 font-semibold">AI Confidence</th>
                  <th className="pb-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-3 font-semibold text-foreground">{r.session}</td>
                    <td className="py-3 text-foreground">{r.student}</td>
                    <td className="py-3 font-mono text-muted-foreground">{r.roll}</td>
                    <td className="py-3 font-mono text-muted-foreground">{r.date}</td>
                    <td className="py-3">
                      {r.method === "FACE_RECOGNITION" ? (
                        <Badge variant="default" className="gap-1 text-[10px]">
                          <Camera className="h-3 w-3" />
                          OpenCV DNN Face
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-[10px]">
                          Manual Override
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 font-mono text-muted-foreground">
                      {r.confidence !== "-" ? (
                        <span className="text-emerald-400">{r.confidence} • {r.liveness}</span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="py-3 text-right">
                      {r.status === "PRESENT" ? (
                        <Badge variant="success" className="gap-1 text-[10px]">
                          <CheckCircle2 className="h-3 w-3" />
                          Present
                        </Badge>
                      ) : r.status === "ABSENT" ? (
                        <Badge variant="destructive" className="gap-1 text-[10px]">
                          <XCircle className="h-3 w-3" />
                          Absent
                        </Badge>
                      ) : (
                        <Badge variant="warning" className="gap-1 text-[10px]">
                          <Clock className="h-3 w-3" />
                          Late
                        </Badge>
                      )}
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
