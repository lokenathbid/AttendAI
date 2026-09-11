"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Radio, Clock, MapPin, Play } from "lucide-react";
import Link from "next/link";

export default function SubjectsPage() {
  const subjects = [
    { code: "CS301", name: "Data Structures & Algorithms", credits: 4, sem: 5, dept: "CSE", teacher: "Dr. Rajesh Raman", attendance: 91.2, isLive: false, room: "Hall 2" },
    { code: "CS302", name: "Database Management Systems", credits: 3, sem: 5, dept: "CSE", teacher: "Prof. Sunita Sharma", attendance: 88.4, isLive: true, room: "Lab 304 - Vision Suite" },
    { code: "CS303", name: "Computer Networks", credits: 3, sem: 5, dept: "CSE", teacher: "Prof. Manish Verma", attendance: 79.8, isLive: false, room: "Room 205" },
    { code: "CS304", name: "Theory of Computation", credits: 3, sem: 5, dept: "CSE", teacher: "Prof. Sunita Sharma", attendance: 74.5, isLive: false, room: "Room 101" },
    { code: "AI305", name: "Artificial Intelligence & ML", credits: 4, sem: 5, dept: "CSE", teacher: "Dr. Rajesh Raman", attendance: 95.0, isLive: true, room: "Auditorium 2" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-400" />
            Curriculum Courses & Active Lecture Sessions
          </h2>
          <p className="text-xs text-muted-foreground">
            Subject allocation, timetable schedules, and classroom face camera bindings
          </p>
        </div>

        <Link
          href="/live-attendance"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2 text-xs font-semibold shadow-md shadow-indigo-500/20"
        >
          <Play className="h-3.5 w-3.5" />
          Schedule Attendance Session
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((sub) => (
          <Card key={sub.code} className="border-border/70 hover:border-indigo-500/40 transition-all">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="font-mono text-xs">
                  {sub.code}
                </Badge>
                {sub.isLive ? (
                  <Badge variant="success" className="gap-1 animate-pulse">
                    <Radio className="h-3 w-3" />
                    Live Class
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="text-[10px]">
                    Inactive
                  </Badge>
                )}
              </div>
              <CardTitle className="text-base mt-2">{sub.name}</CardTitle>
              <CardDescription className="text-xs">{sub.dept} • Semester {sub.sem} • {sub.credits} Credits</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Faculty:</span>
                <span className="font-semibold text-foreground">{sub.teacher}</span>
              </div>

              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Room:
                </span>
                <span className="font-mono text-foreground">{sub.room}</span>
              </div>

              <div className="space-y-1 pt-2 border-t border-border/50">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Average Attendance</span>
                  <span className={`font-mono font-bold ${sub.attendance < 75 ? "text-rose-400" : "text-emerald-400"}`}>
                    {sub.attendance}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-secondary/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${sub.attendance < 75 ? "bg-rose-500" : "bg-emerald-500"}`}
                    style={{ width: `${sub.attendance}%` }}
                  />
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/live-attendance"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 border border-border/70 text-foreground text-xs font-medium py-1.5 transition-all"
                >
                  {sub.isLive ? "Connect to Camera Stream" : "View Course Attendance Log"}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
