"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { GraduationCap, UserPlus, Search, CheckCircle2, AlertCircle, Camera } from "lucide-react";

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    { id: 1, roll: "22CS101", name: "Aarav Sharma", email: "aarav.sharma@attendai.edu", dept: "Computer Science", sem: 5, faceRegistered: true, attendance: 64.2 },
    { id: 2, roll: "22CS102", name: "Priya Patel", email: "priya.patel@attendai.edu", dept: "Computer Science", sem: 5, faceRegistered: true, attendance: 68.5 },
    { id: 3, roll: "22CS103", name: "Kabir Nair", email: "kabir.nair@attendai.edu", dept: "Computer Science", sem: 5, faceRegistered: true, attendance: 94.5 },
    { id: 4, roll: "22CS104", name: "Diya Sengupta", email: "diya.sengupta@attendai.edu", dept: "Computer Science", sem: 5, faceRegistered: false, attendance: 88.2 },
    { id: 5, roll: "22CS105", name: "Rohan Verma", email: "rohan.verma@attendai.edu", dept: "Computer Science", sem: 5, faceRegistered: true, attendance: 72.0 },
    { id: 6, roll: "22CS106", name: "Ananya Iyer", email: "ananya.iyer@attendai.edu", dept: "Computer Science", sem: 5, faceRegistered: true, attendance: 91.4 },
  ];

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-indigo-400" />
            Enrolled Students Directory
          </h2>
          <p className="text-xs text-muted-foreground">
            Student biometric enrollment profiles and real-time attendance standing
          </p>
        </div>

        <Button
          size="sm"
          className="gap-2"
          onClick={() => alert("Student Enrollment Modal: In production, connects to /api/v1/face/register to ingest camera photos and extract 512-dim face embeddings.")}
        >
          <UserPlus className="h-4 w-4" />
          Enroll New Student
        </Button>
      </div>

      <Card className="border-border/70">
        <CardHeader className="pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by student name or roll..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 text-xs"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Showing {filtered.length} students</span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border/70 text-muted-foreground uppercase text-[10px] tracking-wider">
                  <th className="pb-3 font-semibold">Student Name</th>
                  <th className="pb-3 font-semibold">Roll No</th>
                  <th className="pb-3 font-semibold">Department / Sem</th>
                  <th className="pb-3 font-semibold">Biometrics</th>
                  <th className="pb-3 font-semibold">Attendance %</th>
                  <th className="pb-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-3 font-semibold text-foreground">{s.name}</td>
                    <td className="py-3 font-mono text-muted-foreground">{s.roll}</td>
                    <td className="py-3 text-muted-foreground">{s.dept} • Sem {s.sem}</td>
                    <td className="py-3">
                      {s.faceRegistered ? (
                        <Badge variant="success" className="gap-1 text-[10px]">
                          <CheckCircle2 className="h-3 w-3" />
                          Enrolled (512D)
                        </Badge>
                      ) : (
                        <Badge variant="warning" className="gap-1 text-[10px]">
                          <AlertCircle className="h-3 w-3" />
                          Pending Capture
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 font-mono font-bold">
                      <span className={s.attendance < 75 ? "text-rose-400" : "text-emerald-400"}>
                        {s.attendance}%
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <button
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
                        onClick={() => alert(`View details for ${s.name}`)}
                      >
                        <Camera className="h-3 w-3" />
                        View Biometrics
                      </button>
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
