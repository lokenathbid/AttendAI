from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float, Enum as SQLEnum, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from app.core.database import Base


class RiskLevel(str, enum.Enum):
    LOW = "LOW"
    MODERATE = "MODERATE"
    CRITICAL = "CRITICAL"


class AttendanceRiskPrediction(Base):
    __tablename__ = "attendance_risk_predictions"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False, index=True)
    
    current_attendance_pct = Column(Float, nullable=False)
    predicted_end_semester_pct = Column(Float, nullable=False)
    risk_level = Column(SQLEnum(RiskLevel), default=RiskLevel.LOW, nullable=False)
    risk_score = Column(Float, default=0.15)  # 0.0 (safe) to 1.0 (imminent debarment)
    
    risk_factors = Column(Text, nullable=True)  # JSON or comma-separated factors
    recommended_action = Column(String(255), nullable=True)
    
    calculated_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationship
    student = relationship("Student", back_populates="risk_predictions")
