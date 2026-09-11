"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserRole } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { APP_CONFIG } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole>("STUDENT");
  const [email, setEmail] = useState("aarav.sharma@attendai.edu");
  const [password, setPassword] = useState("••••••••••••");
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (role: UserRole) => {
    setSelectedRole(role);
    if (role === "STUDENT") {
      setEmail("aarav.sharma@attendai.edu");
    } else if (role === "TEACHER") {
      setEmail("sunita.sharma@attendai.edu");
    } else {
      setEmail("admin@attendai.edu");
    }
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6 relative">
      <div className="absolute top-8 left-8 flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="font-bold text-foreground text-sm">{APP_CONFIG.name}</span>
        </Link>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="default" className="mb-1">
            <Sparkles className="h-3 w-3 mr-1 text-indigo-400" />
            Hackathon Auth Gateway
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Sign in to your Institutional Portal
          </h2>
          <p className="text-xs text-muted-foreground">
            Select your assigned academic role to explore portal permissions
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-secondary/40 border border-border/70">
          <button
            type="button"
            onClick={() => handleRoleChange("STUDENT")}
            className={`flex flex-col items-center justify-center p-2.5 rounded-lg text-xs font-semibold transition-all ${
              selectedRole === "STUDENT"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <GraduationCap className="h-4 w-4 mb-1" />
            Student
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange("TEACHER")}
            className={`flex flex-col items-center justify-center p-2.5 rounded-lg text-xs font-semibold transition-all ${
              selectedRole === "TEACHER"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Users className="h-4 w-4 mb-1" />
            Faculty
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange("ADMIN")}
            className={`flex flex-col items-center justify-center p-2.5 rounded-lg text-xs font-semibold transition-all ${
              selectedRole === "ADMIN"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <ShieldCheck className="h-4 w-4 mb-1" />
            Admin
          </button>
        </div>

        {/* Form Card */}
        <Card className="border-border/70">
          <form onSubmit={handleSignIn}>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">
                {selectedRole === "STUDENT" && "Student Attendance Portal"}
                {selectedRole === "TEACHER" && "Faculty Lecture & Session Portal"}
                {selectedRole === "ADMIN" && "Dean & Institutional Admin Suite"}
              </CardTitle>
              <CardDescription className="text-xs">
                {selectedRole === "STUDENT" && "Track your subject-wise attendance percentages & facial registration status"}
                {selectedRole === "TEACHER" && "Initiate camera sessions, audit facial recognition logs, and mark overrides"}
                {selectedRole === "ADMIN" && "Manage AI camera nodes, compliance audits, and regulatory reports"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Institutional Email / Roll No</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@attendai.edu"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-foreground">Password</label>
                  <span className="text-[11px] text-indigo-400 cursor-pointer">Default: demo pass</span>
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Sample Profile Preview Pills */}
              <div className="p-3 rounded-lg bg-secondary/30 border border-border/50 text-[11px] text-muted-foreground space-y-1">
                <div className="flex items-center gap-1.5 text-foreground font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Demo Preset Loaded:</span>
                </div>
                <p>
                  {selectedRole === "STUDENT" && "Aarav Sharma • 22CS101 • Sem 5 CSE • Face Registered"}
                  {selectedRole === "TEACHER" && "Dr. Sunita Sharma • Associate Professor • CS302 HOD"}
                  {selectedRole === "ADMIN" && "Academic Affairs Office • Full Root Access"}
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full" isLoading={loading}>
                Sign In to {selectedRole} Portal
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>

              <Link
                href="/dashboard"
                className="text-center text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Or bypass login directly to Dashboard &rarr;
              </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
