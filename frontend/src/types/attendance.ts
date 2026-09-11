export type AttendanceStatus = "PRESENT" | "ABSENT" | "LATE" | "EXCUSED";
export type VerificationMethod = "FACE_RECOGNITION" | "MANUAL_TEACHER" | "ADMIN_OVERRIDE";

export interface AttendanceRecord {
  id: number;
  session_id: number;
  student_id: number;
  student_name?: string;
  roll_number?: string;
  status: AttendanceStatus;
  verification_method: VerificationMethod;
  confidence_score?: number | null;
  liveness_verified?: number | null;
  marked_at: string;
  notes?: string | null;
}

export interface RecognizedFace {
  student_id: number;
  roll_number: string;
  student_name: string;
  confidence_score: number;
  liveness_score: number;
  is_live: boolean;
  bounding_box?: number[];
}
