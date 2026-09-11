from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.subject import SubjectResponse, ClassSessionResponse, ClassSessionCreate
from datetime import datetime, timezone

router = APIRouter()

MOCK_SUBJECTS = [
    SubjectResponse(id=1, subject_code="CS301", name="Data Structures & Algorithms", department="Computer Science", semester=5, credits=4),
    SubjectResponse(id=2, subject_code="CS302", name="Database Management Systems", department="Computer Science", semester=5, credits=3),
    SubjectResponse(id=3, subject_code="CS303", name="Computer Networks", department="Computer Science", semester=5, credits=3),
    SubjectResponse(id=4, subject_code="AI305", name="Artificial Intelligence & ML", department="Computer Science", semester=5, credits=4)
]


@router.get("/subjects", response_model=List[SubjectResponse], summary="List All Courses & Subjects")
def list_subjects(db: Session = Depends(get_db)):
    return MOCK_SUBJECTS


@router.get("/subjects/active-sessions", response_model=List[ClassSessionResponse], summary="Get Active Attendance Sessions")
def list_active_sessions():
    return [
        ClassSessionResponse(
            id=101,
            subject_id=1,
            teacher_id=1,
            room_number="Lab 304 - Computer Vision Suite",
            start_time=datetime.now(timezone.utc),
            is_active=True
        ),
        ClassSessionResponse(
            id=102,
            subject_id=4,
            teacher_id=2,
            room_number="Auditorium 2",
            start_time=datetime.now(timezone.utc),
            is_active=True
        )
    ]
