from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from app.models.attendance import AttendanceStatus, VerificationMethod


class AttendanceMarkRequest(BaseModel):
    session_id: int
    student_id: int
    status: AttendanceStatus = AttendanceStatus.PRESENT
    verification_method: VerificationMethod = VerificationMethod.FACE_RECOGNITION
    confidence_score: Optional[float] = 0.95
    liveness_verified: Optional[float] = 0.98
    notes: Optional[str] = None


class BatchAttendanceMarkRequest(BaseModel):
    session_id: int
    student_ids: List[int]
    status: AttendanceStatus = AttendanceStatus.PRESENT


class AttendanceRecordResponse(BaseModel):
    id: int
    session_id: int
    student_id: int
    student_name: Optional[str] = None
    roll_number: Optional[str] = None
    status: AttendanceStatus
    verification_method: VerificationMethod
    confidence_score: Optional[float] = None
    liveness_verified: Optional[float] = None
    marked_at: datetime
    notes: Optional[str] = None

    class Config:
        from_attributes = True
