import logging
from app.core.database import engine, Base
import app.models  # Ensure all models are loaded into Base metadata

logger = logging.getLogger(__name__)


def init_db():
    try:
        logger.info("Initializing database tables...")
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables initialized successfully.")
    except Exception as e:
        logger.warning(f"Note: Database table creation skipped or encountered warning: {e}")


if __name__ == "__main__":
    init_db()
