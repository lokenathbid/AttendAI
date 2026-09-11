import { apiClient } from "./api-client";
import { AttendanceRecord, ClassSession } from "@/types";

export interface MarkAttendancePayload {
  session_id: number;
  student_id: number;
  status: "PRESENT" | "ABSENT" | "LATE";
  verification_method: "FACE_RECOGNITION" | "MANUAL_TEACHER";
  confidence_score?: number;
}

export const attendanceService = {
  async getRecords(params?: { session_id?: number; student_id?: number }): Promise<AttendanceRecord[]> {
    return apiClient<AttendanceRecord[]>("/attendance/records", { params });
  },

  async markAttendance(payload: MarkAttendancePayload): Promise<AttendanceRecord> {
    return apiClient<AttendanceRecord>("/attendance/mark", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  async getActiveSessions(): Promise<ClassSession[]> {
    return apiClient<ClassSession[]>("/subjects/active-sessions");
  },
};
