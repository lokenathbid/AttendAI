from fastapi import APIRouter
from app.api.v1.endpoints import (
    health,
    auth,
    students,
    teachers,
    subjects,
    attendance,
    face_recognition,
    analytics,
    predictions,
    reports,
    admin
)

api_router = APIRouter()

# Register modular sub-routers
api_router.include_router(health.router, tags=["System & Health"])
api_router.include_router(auth.router, tags=["Authentication"])
api_router.include_router(students.router, tags=["Students"])
api_router.include_router(teachers.router, tags=["Teachers / Faculty"])
api_router.include_router(subjects.router, tags=["Subjects & Courses"])
api_router.include_router(attendance.router, tags=["Attendance Operations"])
api_router.include_router(face_recognition.router, tags=["Face Recognition & Liveness"])
api_router.include_router(analytics.router, tags=["Attendance Analytics"])
api_router.include_router(predictions.router, tags=["AI Risk Predictions"])
api_router.include_router(reports.router, tags=["Reports & Exports"])
api_router.include_router(admin.router, tags=["Administration & Audits"])
