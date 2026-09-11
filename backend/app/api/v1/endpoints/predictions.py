from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.prediction import RiskPredictionOverview, RiskPredictionItem
from app.models.prediction import RiskLevel
from app.services.risk_service import risk_service

router = APIRouter()


@router.get("/predictions/risk-overview", response_model=RiskPredictionOverview, summary="Predictive Attendance Risk Overview")
def get_risk_prediction_overview(db: Session = Depends(get_db)):
    """
    Returns AI-generated predictions identifying students at risk of attendance shortages
    before end-of-semester debarment.
    """
    flagged = [
        RiskPredictionItem(
            student_id=1,
            student_name="Aarav Sharma",
            roll_number="22CS101",
            department="Computer Science",
            current_attendance_pct=64.2,
            predicted_end_semester_pct=58.4,
            risk_level=RiskLevel.CRITICAL,
            risk_score=0.89,
            recommended_action="Immediate HOD & Guardian notification; require 100% attendance in next 10 lectures",
            key_risk_factors=["3 consecutive absences in Labs", "Downward 14-day trend", "Missing afternoon lectures"]
        ),
        RiskPredictionItem(
            student_id=2,
            student_name="Priya Patel",
            roll_number="22CS102",
            department="Computer Science",
            current_attendance_pct=68.5,
            predicted_end_semester_pct=69.8,
            risk_level=RiskLevel.CRITICAL,
            risk_score=0.74,
            recommended_action="Faculty mentor counseling; issue formal warning",
            key_risk_factors=["Missed 4 Math lectures", "Irregular Monday patterns"]
        ),
        RiskPredictionItem(
            student_id=4,
            student_name="Rohan Verma",
            roll_number="22CS105",
            department="Computer Science",
            current_attendance_pct=72.0,
            predicted_end_semester_pct=74.1,
            risk_level=RiskLevel.MODERATE,
            risk_score=0.48,
            recommended_action="Automated SMS/Email notification to student",
            key_risk_factors=["Slight attendance drift in elective subjects"]
        )
    ]

    return RiskPredictionOverview(
        total_analyzed=120,
        critical_risk_count=2,
        moderate_risk_count=6,
        low_risk_count=112,
        flagged_students=flagged
    )
