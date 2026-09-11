from fastapi import APIRouter, Depends, Query
from typing import List
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.analytics import AnalyticsOverviewResponse, DefaulterStudent
from app.services.analytics_service import analytics_service

router = APIRouter()


@router.get("/analytics/overview", response_model=AnalyticsOverviewResponse, summary="Attendance Analytics Overview")
def get_analytics_overview(db: Session = Depends(get_db)):
    return analytics_service.get_overview_metrics(db)


@router.get("/analytics/defaulters", response_model=List[DefaulterStudent], summary="Low-Attendance Defaulters List (< 75%)")
def get_defaulters(threshold: float = Query(75.0), db: Session = Depends(get_db)):
    return analytics_service.get_defaulters(db, threshold_pct=threshold)
