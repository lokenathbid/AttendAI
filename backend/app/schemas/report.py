from pydantic import BaseModel
from typing import Optional
from datetime import date


class ReportExportRequest(BaseModel):
    subject_id: Optional[int] = None
    department: Optional[str] = None
    semester: Optional[int] = None
    from_date: Optional[date] = None
    to_date: Optional[date] = None
    format: str = "CSV"  # CSV or PDF


class ReportExportResponse(BaseModel):
    report_id: str
    download_url: str
    generated_at: str
    total_records: int
