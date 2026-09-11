from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float, Enum as SQLEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from app.core.database import Base


class AttendanceStatus(str, enum.Enum):
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    LATE = "LATE"
    EXCUSED = "EXCUSED"


class VerificationMethod(str, enum.Enum):
    FACE_RECOGNITION = "FACE_RECOGNITION"
    MANUAL_TEACHER = "MANUAL_TEACHER"
    ADMIN_OVERRIDE = "ADMIN_OVERRIDE"


class AttendanceRecord(Base):
    __tablename__ = "attendance_records"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("class_sessions.id"), nullable=False, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False, index=True)
    
    status = Column(SQLEnum(AttendanceStatus), default=AttendanceStatus.PRESENT, nullable=False)
    verification_method = Column(SQLEnum(VerificationMethod), default=VerificationMethod.FACE_RECOGNITION, nullable=False)
    
    # Confidence metrics from CV pipeline
    confidence_score = Column(Float, nullable=True, default=0.95)
    liveness_verified = Column(Float, nullable=True, default=0.98)
    
    marked_at = Column(DateTime(timezone=True), server_default=func.now())
    notes = Column(String(255), nullable=True)

    # Relationships
    session = relationship("ClassSession", back_populates="attendance_records")
    student = relationship("Student", back_populates="attendance_records")
