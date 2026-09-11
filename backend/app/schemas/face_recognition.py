from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class FaceRegisterRequest(BaseModel):
    student_id: int
    # In base64 or multipart upload in practical endpoints
    image_base64: Optional[str] = None


class FaceRegisterResponse(BaseModel):
    success: bool
    student_id: int
    face_detected: bool
    embedding_dimension: int = 512
    quality_score: float
    message: str


class FaceVerifyRequest(BaseModel):
    session_id: int
    image_base64: str


class RecognizedStudent(BaseModel):
    student_id: int
    roll_number: str
    student_name: str
    confidence_score: float
    liveness_score: float
    is_live: bool
    bounding_box: Optional[List[int]] = None  # [x, y, w, h]


class FaceVerifyResponse(BaseModel):
    success: bool
    faces_detected: int
    recognized_students: List[RecognizedStudent]
    unrecognized_faces: int
    processing_time_ms: float
