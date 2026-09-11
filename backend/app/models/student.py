from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=True)
    roll_number = Column(String(50), unique=True, index=True, nullable=False)
    enrollment_number = Column(String(50), unique=True, index=True, nullable=False)
    department = Column(String(100), nullable=False)
    semester = Column(Integer, nullable=False)
    section = Column(String(10), default="A")
    batch_year = Column(Integer, nullable=False, default=2026)
    
    # Face enrollment status
    is_face_registered = Column(Boolean, default=False)
    face_encoding_id = Column(String(100), nullable=True)
    
    # Analytics snapshot cache
    overall_attendance_pct = Column(Float, default=100.0)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    user = relationship("User", backref="student_profile")
    attendance_records = relationship("AttendanceRecord", back_populates="student", cascade="all, delete-orphan")
    face_data = relationship("FaceData", back_populates="student", uselist=False, cascade="all, delete-orphan")
    risk_predictions = relationship("AttendanceRiskPrediction", back_populates="student", cascade="all, delete-orphan")
