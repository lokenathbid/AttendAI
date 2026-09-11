from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class StudentBase(BaseModel):
    roll_number: str
    enrollment_number: str
    department: str
    semester: int
    section: str = "A"
    batch_year: int = 2026


class StudentCreate(StudentBase):
    full_name: str
    email: str


class StudentResponse(StudentBase):
    id: int
    user_id: Optional[int] = None
    full_name: Optional[str] = None
    email: Optional[str] = None
    is_face_registered: bool
    overall_attendance_pct: float
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True
