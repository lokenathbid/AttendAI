from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from app.models.prediction import RiskLevel


class RiskPredictionItem(BaseModel):
    student_id: int
    student_name: str
    roll_number: str
    department: str
    current_attendance_pct: float
    predicted_end_semester_pct: float
    risk_level: RiskLevel
    risk_score: float
    recommended_action: str
    key_risk_factors: List[str]


class RiskPredictionOverview(BaseModel):
    total_analyzed: int
    critical_risk_count: int
    moderate_risk_count: int
    low_risk_count: int
    flagged_students: List[RiskPredictionItem]
