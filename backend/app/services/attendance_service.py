from typing import Dict, Any, List
from sqlalchemy.orm import Session
from app.models.attendance import AttendanceRecord, AttendanceStatus, VerificationMethod


class AttendanceService:
    """
    Handles attendance business transactions and multi-student session marking.
    """
    def record_attendance(
        self,
        db: Session,
        session_id: int,
        student_id: int,
        status: AttendanceStatus = AttendanceStatus.PRESENT,
        method: VerificationMethod = VerificationMethod.FACE_RECOGNITION,
        confidence: float = 0.95
    ) -> AttendanceRecord:
        record = AttendanceRecord(
            session_id=session_id,
            student_id=student_id,
            status=status,
            verification_method=method,
            confidence_score=confidence,
            liveness_verified=0.98
        )
        db.add(record)
        db.commit()
        db.refresh(record)
        return record


attendance_service = AttendanceService()
