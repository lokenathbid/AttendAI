"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, BookOpen, Clock } from "lucide-react";

export default function TeachersPage() {
  const teachers = [
    {
      id: 1,
      code: "EMP-CS-001",
      name: "Dr. Rajesh Raman",
      email: "rajesh.raman@attendai.edu",
      department: "Computer Science & Engineering",
      designation: "Professor & HOD",
      activeCourses: ["CS301 - Data Structures", "AI305 - Artificial Intelligence"],
      sessionsConducted: 48,
    },
    {
      id: 2,
      code: "EMP-CS-002",
      name: "Prof. Sunita Sharma",
      email: "sunita.sharma@attendai.edu",
      department: "Computer Science & Engineering",
      designation: "Associate Professor",
      activeCourses: ["CS302 - Database Systems", "CS304 - Automata"],
      sessionsConducted: 42,
    },
    {
      id: 3,
      code: "EMP-CS-003",
      name: "Prof. Manish Verma",
      email: "manish.verma@attendai.edu",
      department: "Computer Science & Engineering",
      designation: "Assistant Professor",
      activeCourses: ["CS303 - Computer Networks"],
      sessionsConducted: 36,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Users className="h-5 w-5 text-indigo-400" />
          Faculty & Instructor Management
        </h2>
        <p className="text-xs text-muted-foreground">
          Teaching staff with authorized access to classroom face recognition cameras
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <Card key={t.id} className="border-border/70">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-300 text-sm">
                  {t.name.split(" ").slice(-1)[0][0]}
                </div>
                <Badge variant="secondary" className="font-mono text-[10px]">
                  {t.code}
                </Badge>
              </div>
              <CardTitle className="text-base mt-2">{t.name}</CardTitle>
              <CardDescription className="text-xs">{t.designation} • {t.department}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                <span>{t.email}</span>
              </div>

              <div className="space-y-1 pt-1 border-t border-border/50">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                  Assigned Lecture Courses:
                </span>
                <div className="flex flex-wrap gap-1">
                  {t.activeCourses.map((c) => (
                    <Badge key={c} variant="outline" className="text-[10px]">
                      <BookOpen className="h-3 w-3 mr-1 text-sky-400" />
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-[11px] text-muted-foreground pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-emerald-400" />
                  {t.sessionsConducted} lectures recorded
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
