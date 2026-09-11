from app.services.face_service import face_service, FaceRecognitionService
from app.services.liveness_service import liveness_service, LivenessDetectionService
from app.services.risk_service import risk_service, AttendanceRiskPredictionService
from app.services.attendance_service import attendance_service, AttendanceService
from app.services.analytics_service import analytics_service, AnalyticsService

__all__ = [
    "face_service",
    "FaceRecognitionService",
    "liveness_service",
    "LivenessDetectionService",
    "risk_service",
    "AttendanceRiskPredictionService",
    "attendance_service",
    "AttendanceService",
    "analytics_service",
    "AnalyticsService"
]
