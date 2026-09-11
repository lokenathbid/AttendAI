from pydantic import BaseModel
from typing import Dict, Any, Optional
from datetime import datetime


class DatabaseHealth(BaseModel):
    status: str
    dialect: str
    connected: bool
    detail: Optional[str] = None


class AISubsystemHealth(BaseModel):
    engine: str
    status: str
    model_version: str
    liveness_detector_ready: bool


class HealthResponse(BaseModel):
    status: str
    project_name: str
    version: str
    environment: str
    timestamp: datetime
    database: DatabaseHealth
    ai_subsystem: AISubsystemHealth
