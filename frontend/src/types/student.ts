export interface Student {
  id: number;
  roll_number: string;
  enrollment_number: string;
  full_name?: string;
  email?: string;
  department: string;
  semester: number;
  section: string;
  batch_year: number;
  is_face_registered: boolean;
  overall_attendance_pct: number;
  created_at?: string;
}

export interface Teacher {
  id: number;
  employee_code: string;
  full_name?: string;
  email?: string;
  department: string;
  designation: string;
}

export interface Subject {
  id: number;
  subject_code: string;
  name: string;
  department: string;
  semester: number;
  credits: number;
}

export interface ClassSession {
  id: number;
  subject_id: number;
  teacher_id?: number;
  room_number: string;
  start_time: string;
  end_time?: string;
  is_active: boolean;
}
