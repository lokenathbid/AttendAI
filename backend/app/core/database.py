from typing import Generator, Dict, Any
from sqlalchemy import create_engine, text
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

# Engine configuration depending on DB dialect
connect_args = {}
if settings.DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

try:
    engine = create_engine(
        settings.DATABASE_URL,
        connect_args=connect_args,
        pool_pre_ping=True,
        echo=settings.DEBUG and not settings.DATABASE_URL.startswith("sqlite")
    )
except Exception as e:
    logger.error(f"Error creating database engine with URL '{settings.DATABASE_URL}': {e}")
    # Fallback to local SQLite in-memory/file if provided connection fails to initialize
    engine = create_engine("sqlite:///./attendai.db", connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db() -> Generator[Session, None, None]:
    """
    FastAPI dependency yielding an active SQLAlchemy session.
    Automatically closes session upon request completion.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def check_db_connection() -> Dict[str, Any]:
    """
    Verifies live connectivity to configured database.
    Used by health-check and diagnostics endpoints.
    """
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return {
            "status": "connected",
            "dialect": engine.dialect.name,
            "connected": True
        }
    except Exception as exc:
        logger.warning(f"Database connection check failed: {exc}")
        return {
            "status": "disconnected",
            "dialect": getattr(engine, "dialect", None) and engine.dialect.name or "unknown",
            "connected": False,
            "detail": str(exc)
        }
