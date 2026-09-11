# 🧠 AttendAI Backend (FastAPI + SQLAlchemy + OpenCV Pipeline)

FastAPI REST API powering the AI-Powered Smart Attendance & Student Engagement System (**SIH 2026 PS SIH26205**).

---

## 🛠 Tech Stack
- **Framework**: FastAPI (Python 3.10+)
- **Data Validation & Settings**: Pydantic v2 & Pydantic Settings
- **ORM & Database**: SQLAlchemy 2.0 with PostgreSQL (`psycopg2-binary`) & local SQLite fallback
- **Security**: Python-jose (JWT), Passlib (bcrypt)
- **Computer Vision & AI**: OpenCV DNN face recognition abstraction, passive liveness anti-spoofing detection, attendance risk prediction heuristics

---

## 📁 Directory Layout

```
backend/
├── app/
│   ├── api/
│   │   ├── router.py                  # API router mount (/v1)
│   │   └── v1/
│   │       ├── router.py              # Groups all endpoints under /api/v1
│   │       └── endpoints/             # Modular routers:
│   │           ├── health.py          # /api/v1/health (Deep diagnostic check)
│   │           ├── auth.py            # /api/v1/auth/
│   │           ├── students.py        # /api/v1/students/
│   │           ├── teachers.py        # /api/v1/teachers/
│   │           ├── subjects.py        # /api/v1/subjects/
│   │           ├── attendance.py      # /api/v1/attendance/
│   │           ├── face_recognition.py# /api/v1/face/
│   │           ├── analytics.py       # /api/v1/analytics/
│   │           ├── predictions.py     # /api/v1/predictions/
│   │           ├── reports.py         # /api/v1/reports/
│   │           └── admin.py           # /api/v1/admin/
│   ├── core/
│   │   ├── config.py                  # Pydantic BaseSettings loading .env
│   │   ├── database.py                # SQLAlchemy engine, sessionmaker & connection health
│   │   ├── exceptions.py              # Custom exceptions & JSON error formatting
│   │   └── security.py                # JWT & password hashing
│   ├── models/                        # Declarative SQLAlchemy ORM entities
│   │   ├── user.py
│   │   ├── student.py
│   │   ├── teacher.py
│   │   ├── subject.py
│   │   ├── attendance.py
│   │   ├── face_data.py
│   │   └── prediction.py
│   ├── schemas/                       # Pydantic request/response schemas
│   ├── services/                      # AI & business logic services
│   │   ├── face_service.py            # Face detection & 512-dim embedding extraction
│   │   ├── liveness_service.py        # Anti-spoofing / blink / texture analysis
│   │   ├── risk_service.py            # Predictive attendance risk modeling
│   │   ├── attendance_service.py      # Attendance marking & sessions
│   │   └── analytics_service.py       # Aggregated stats & defaulters
│   ├── db/
│   │   └── init_db.py                 # Table initialization
│   └── main.py                        # FastAPI application initialization & middleware
├── requirements.txt
├── .env.example
├── .env
└── run.py
```

---

## ⚡ Installation & Execution

### 1. Create Virtual Environment
```bash
python -m venv .venv

# On Windows:
.venv\Scripts\activate

# On Linux/macOS:
source .venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run Development Server
```bash
python run.py
```
Or directly with Uvicorn:
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

---

## 🔍 API Documentation & Endpoints
- **Interactive Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc Documentation**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
- **System Health Check**: [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)
