from fastapi import APIRouter, Depends, Query
from typing import List, Optional
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.student import StudentResponse, StudentCreate
from datetime import datetime, timezone

router = APIRouter()

# Initial seeded responses for architectural preview
MOCK_STUDENTS = [
    StudentResponse(
        id=1,
        roll_number="22CS101",
        enrollment_number="EN202209101",
        full_name="Aarav Sharma",
        email="aarav.sharma@attendai.edu",
        department="Computer Science",
        semester=5,
        section="A",
        batch_year=2026,
        is_face_registered=True,
        overall_attendance_pct=64.2,
        created_at=datetime.now(timezone.utc)
    ),
    StudentResponse(
        id=2,
        roll_number="22CS102",
        enrollment_number="EN202209102",
        full_name="Priya Patel",
        email="priya.patel@attendai.edu",
        department="Computer Science",
        semester=5,
        section="A",
        batch_year=2026,
        is_face_registered=True,
        overall_attendance_pct=68.5,
        created_at=datetime.now(timezone.utc)
    ),
    StudentResponse(
        id=3,
        roll_number="22CS103",
        enrollment_number="EN202209103",
        full_name="Kabir Nair",
        email="kabir.nair@attendai.edu",
        department="Computer Science",
        semester=5,
        section="A",
        batch_year=2026,
        is_face_registered=True,
        overall_attendance_pct=94.5,
        created_at=datetime.now(timezone.utc)
    ),
    StudentResponse(
        id=4,
        roll_number="22CS104",
        enrollment_number="EN202209104",
        full_name="Diya Sengupta",
        email="diya.sengupta@attendai.edu",
        department="Computer Science",
        semester=5,
        section="B",
        batch_year=2026,
        is_face_registered=False,
        overall_attendance_pct=88.2,
        created_at=datetime.now(timezone.utc)
    )
]


@router.get("/students", response_model=List[StudentResponse], summary="List Students with Filters")
def list_students(
    department: Optional[str] = Query(None, description="Filter by department"),
    semester: Optional[int] = Query(None, description="Filter by semester"),
    face_registered: Optional[bool] = Query(None, description="Filter by face enrollment"),
    db: Session = Depends(get_db)
):
    results = MOCK_STUDENTS
    if department:
        results = [s for s in results if s.department.lower() == department.lower()]
    if semester:
        results = [s for s in results if s.semester == semester]
    if face_registered is not None:
        results = [s for s in results if s.is_face_registered == face_registered]
    return results


@router.get("/students/{student_id}", response_model=StudentResponse, summary="Get Student Profile by ID")
def get_student(student_id: int, db: Session = Depends(get_db)):
    for s in MOCK_STUDENTS:
        if s.id == student_id:
            return s
    # Default fallback
    return MOCK_STUDENTS[0]
