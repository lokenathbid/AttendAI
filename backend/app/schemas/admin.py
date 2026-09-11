from pydantic import BaseModel
from typing import List, Dict, Any


class AdminSystemStats(BaseModel):
    total_users: int
    total_students: int
    total_teachers: int
    total_subjects: int
    total_attendance_records: int
    camera_nodes_online: int
    system_load_pct: float
    storage_used_mb: float


class AuditLogItem(BaseModel):
    id: int
    timestamp: str
    actor: str
    action: str
    details: str
    status: str
