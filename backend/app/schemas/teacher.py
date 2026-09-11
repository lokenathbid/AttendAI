from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class TeacherBase(BaseModel):
    employee_code: str
    department: str
    designation: str = "Assistant Professor"


class TeacherCreate(TeacherBase):
    full_name: str
    email: str


class TeacherResponse(TeacherBase):
    id: int
    user_id: Optional[int] = None
    full_name: Optional[str] = None
    email: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True
