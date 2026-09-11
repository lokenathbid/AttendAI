from fastapi import APIRouter, Depends, Query
from typing import List, Optional
from datetime import datetime, timezone
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.attendance import AttendanceMarkRequest, AttendanceRecordResponse, BatchAttendanceMarkRequest
from app.models.attendance import AttendanceStatus, VerificationMethod

router = APIRouter()

MOCK_RECORDS = [
    AttendanceRecordResponse(
        id=1,
        session_id=101,
        student_id=1,
        student_name="Aarav Sharma",
        roll_number="22CS101",
        status=AttendanceStatus.PRESENT,
        verification_method=VerificationMethod.FACE_RECOGNITION,
        confidence_score=0.96,
        liveness_verified=0.99,
        marked_at=datetime.now(timezone.utc),
        notes="Automated facial verification (Liveness verified)"
    ),
    AttendanceRecordResponse(
        id=2,
        session_id=101,
        student_id=3,
        student_name="Kabir Nair",
        roll_number="22CS103",
        status=AttendanceStatus.PRESENT,
        verification_method=VerificationMethod.FACE_RECOGNITION,
        confidence_score=0.98,
        liveness_verified=0.97,
        marked_at=datetime.now(timezone.utc),
        notes="Automated facial verification"
    ),
    AttendanceRecordResponse(
        id=3,
        session_id=101,
        student_id=2,
        student_name="Priya Patel",
        roll_number="22CS102",
        status=AttendanceStatus.ABSENT,
        verification_method=VerificationMethod.MANUAL_TEACHER,
        confidence_score=None,
        liveness_verified=None,
        marked_at=datetime.now(timezone.utc),
        notes="Unexcused absence"
    )
]


@router.get("/attendance/records", response_model=List[AttendanceRecordResponse], summary="Get Attendance Logs")
def get_attendance_records(
    session_id: Optional[int] = Query(None),
    student_id: Optional[int] = Query(None),
    db: Session = Depends(get_db)
):
    results = MOCK_RECORDS
    if session_id:
        results = [r for r in results if r.session_id == session_id]
    if student_id:
        results = [r for r in results if r.student_id == student_id]
    return results


@router.post("/attendance/mark", response_model=AttendanceRecordResponse, summary="Mark Single Attendance Record")
def mark_attendance(payload: AttendanceMarkRequest, db: Session = Depends(get_db)):
    return AttendanceRecordResponse(
        id=999,
        session_id=payload.session_id,
        student_id=payload.student_id,
        student_name="Verified Student",
        roll_number="22CS999",
        status=payload.status,
        verification_method=payload.verification_method,
        confidence_score=payload.confidence_score,
        liveness_verified=payload.liveness_verified,
        marked_at=datetime.now(timezone.utc),
        notes=payload.notes or "Marked via REST API"
    )
