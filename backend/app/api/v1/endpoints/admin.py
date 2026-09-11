from fastapi import APIRouter
from typing import List
from app.schemas.admin import AdminSystemStats, AuditLogItem

router = APIRouter()


@router.get("/admin/stats", response_model=AdminSystemStats, summary="System Administration Overview")
def get_admin_stats():
    return AdminSystemStats(
        total_users=142,
        total_students=120,
        total_teachers=18,
        total_subjects=12,
        total_attendance_records=3480,
        camera_nodes_online=6,
        system_load_pct=18.4,
        storage_used_mb=240.5
    )


@router.get("/admin/audit-logs", response_model=List[AuditLogItem], summary="Security and Attendance Audit Logs")
def get_audit_logs():
    return [
        AuditLogItem(
            id=1,
            timestamp="2026-09-08 11:30:15",
            actor="AI-Engine-Camera-01",
            action="BATCH_FACE_VERIFICATION",
            details="Verified 42 students in Lab 304 with 0 spoof alerts",
            status="SUCCESS"
        ),
        AuditLogItem(
            id=2,
            timestamp="2026-09-08 11:15:02",
            actor="Prof. Sunita Sharma",
            action="SESSION_STARTED",
            details="Started attendance session for CS302 Database Systems",
            status="SUCCESS"
        ),
        AuditLogItem(
            id=3,
            timestamp="2026-09-08 10:45:18",
            actor="System",
            action="PREDICTIVE_RISK_EVALUATION",
            details="Executed 24h attendance trend model; flagged 2 critical defaulters",
            status="SUCCESS"
        )
    ]
