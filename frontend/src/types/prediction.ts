export type RiskLevel = "LOW" | "MODERATE" | "CRITICAL";

export interface RiskPredictionItem {
  student_id: number;
  student_name: string;
  roll_number: string;
  department: string;
  current_attendance_pct: number;
  predicted_end_semester_pct: number;
  risk_level: RiskLevel;
  risk_score: number;
  recommended_action: string;
  key_risk_factors: string[];
}

export interface RiskPredictionOverview {
  total_analyzed: number;
  critical_risk_count: number;
  moderate_risk_count: number;
  low_risk_count: number;
  flagged_students: RiskPredictionItem[];
}
