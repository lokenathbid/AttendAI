export interface AttendanceTrendPoint {
  date: string;
  attendance_pct: number;
  total_students: number;
  present_count: number;
}

export interface DefaulterStudent {
  id: number;
  student_name: string;
  roll_number: string;
  department: string;
  semester: number;
  attendance_pct: number;
  classes_held: number;
  classes_attended: number;
  shortage_classes: number;
  risk_level: "CRITICAL" | "MODERATE" | "LOW";
}

export interface SubjectAttendanceStat {
  subject_code: string;
  subject_name: string;
  total_classes: number;
  avg_attendance_pct: number;
}

export interface AnalyticsOverview {
  overall_attendance_pct: number;
  total_enrolled_students: number;
  active_sessions_today: number;
  defaulters_count: number;
  attendance_trends: AttendanceTrendPoint[];
  subject_stats: SubjectAttendanceStat[];
}
