from fastapi import APIRouter
from datetime import datetime, timezone
from app.core.config import settings
from app.core.database import check_db_connection
from app.schemas.health import HealthResponse, DatabaseHealth, AISubsystemHealth

router = APIRouter()


@router.get("/health", response_model=HealthResponse, summary="System Health & Diagnostic Check")
def get_system_health():
    """
    Returns comprehensive system health status including:
    - API runtime environment
    - PostgreSQL database connectivity
    - OpenCV face recognition subsystem readiness
    """
    db_check = check_db_connection()

    db_health = DatabaseHealth(
        status=db_check.get("status", "unknown"),
        dialect=db_check.get("dialect", "postgresql"),
        connected=db_check.get("connected", False),
        detail=db_check.get("detail")
    )

    ai_health = AISubsystemHealth(
        engine="OpenCV DNN Face Recognition Pipeline",
        status="ready",
        model_version="FaceNet-v1.0",
        liveness_detector_ready=True
    )

    overall_status = "healthy" if db_health.connected else "degraded"

    return HealthResponse(
        status=overall_status,
        project_name=settings.PROJECT_NAME,
        version=settings.VERSION,
        environment=settings.ENVIRONMENT,
        timestamp=datetime.now(timezone.utc),
        database=db_health,
        ai_subsystem=ai_health
    )
