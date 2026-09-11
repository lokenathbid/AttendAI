from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class FaceData(Base):
    __tablename__ = "face_data"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), unique=True, nullable=False)
    
    # Store embedding representation (serialized JSON string or vector reference)
    embedding_vector = Column(Text, nullable=False)
    embedding_dimension = Column(Integer, default=512)
    model_version = Column(String(50), default="opencv-dnn-facenet-v1")
    
    # Quality metrics of registered image
    registration_image_url = Column(String(500), nullable=True)
    face_quality_score = Column(Float, default=0.92)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationship
    student = relationship("Student", back_populates="face_data")


class LivenessLog(Base):
    __tablename__ = "liveness_logs"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("class_sessions.id"), nullable=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=True)
    
    blink_count = Column(Integer, default=1)
    texture_score = Column(Float, default=0.88)
    is_spoof_suspected = Column(Integer, default=0)  # 0: Real, 1: Suspected Spoof
    confidence = Column(Float, default=0.95)
    
    logged_at = Column(DateTime(timezone=True), server_default=func.now())
