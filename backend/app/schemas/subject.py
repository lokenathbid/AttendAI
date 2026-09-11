from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class SubjectBase(BaseModel):
    subject_code: str
    name: str
    department: str
    semester: int
    credits: int = 3


class SubjectCreate(SubjectBase):
    pass


class SubjectResponse(SubjectBase):
    id: int
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class ClassSessionCreate(BaseModel):
    subject_id: int
    teacher_id: Optional[int] = None
    room_number: str = "Room 301"


class ClassSessionResponse(BaseModel):
    id: int
    subject_id: int
    teacher_id: Optional[int] = None
    room_number: str
    start_time: datetime
    end_time: Optional[datetime] = None
    is_active: bool

    class Config:
        from_attributes = True
