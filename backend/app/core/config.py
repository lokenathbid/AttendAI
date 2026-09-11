from typing import List, Union
from pydantic import AnyHttpUrl, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
import os


class Settings(BaseSettings):
    PROJECT_NAME: str = "AttendAI - Smart Attendance & Engagement System"
    VERSION: str = "1.0.0"
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    API_V1_STR: str = "/api/v1"

    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # PostgreSQL Database URL
    DATABASE_URL: str = "sqlite:///./attendai.db"

    # Security & JWT
    SECRET_KEY: str = "attendai_super_secret_jwt_encryption_key_sih2026"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 1 day

    # CORS
    CORS_ORIGINS: Union[List[str], str] = "http://localhost:3000,http://127.0.0.1:3000"

    @property
    def cors_origins_list(self) -> List[str]:
        if isinstance(self.CORS_ORIGINS, str):
            return [origin.strip() for origin in self.CORS_ORIGINS.split(",") if origin.strip()]
        return self.CORS_ORIGINS

    # AI Configuration Stubs
    FACE_SIMILARITY_THRESHOLD: float = 0.60
    LIVENESS_CONFIDENCE_THRESHOLD: float = 0.75
    LOW_ATTENDANCE_THRESHOLD: float = 75.0  # Percentage

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )


settings = Settings()
