from pydantic import BaseModel
from typing import List, Optional


class MetricCard(BaseModel):
    label: str
    value: str
    change_pct: float
    is_positive: bool
    description: str


class AttendanceTrendPoint(BaseModel):
    date: str
    attendance_pct: float
    total_students: int
    present_count: int


class DefaulterStudent(BaseModel):
    id: int
    student_name: str
    roll_number: str
    department: str
    semester: int
    attendance_pct: float
    classes_held: int
    classes_attended: int
    shortage_classes: int
    risk_level: str


class SubjectAttendanceStat(BaseModel):
    subject_code: str
    subject_name: str
    total_classes: int
    avg_attendance_pct: float


class AnalyticsOverviewResponse(BaseModel):
    overall_attendance_pct: float
    total_enrolled_students: int
    active_sessions_today: int
    defaulters_count: int
    attendance_trends: List[AttendanceTrendPoint]
    subject_stats: List[SubjectAttendanceStat]
