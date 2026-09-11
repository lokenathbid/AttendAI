from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.teacher import TeacherResponse
from datetime import datetime, timezone

router = APIRouter()

MOCK_TEACHERS = [
    TeacherResponse(
        id=1,
        employee_code="EMP-CS-001",
        full_name="Dr. Rajesh Raman",
        email="rajesh.raman@attendai.edu",
        department="Computer Science",
        designation="Professor & HOD",
        created_at=datetime.now(timezone.utc)
    ),
    TeacherResponse(
        id=2,
        employee_code="EMP-CS-002",
        full_name="Prof. Sunita Sharma",
        email="sunita.sharma@attendai.edu",
        department="Computer Science",
        designation="Associate Professor",
        created_at=datetime.now(timezone.utc)
    )
]


@router.get("/teachers", response_model=List[TeacherResponse], summary="List Faculty Members")
def list_teachers(db: Session = Depends(get_db)):
    return MOCK_TEACHERS
