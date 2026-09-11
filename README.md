# 🎓 AttendAI: AI-Powered Smart Attendance & Student Engagement System

[![SIH 2026](https://img.shields.io/badge/SIH%202026-PS%20SIH26205-blue.svg)](https://sih.gov.in)
[![Category](https://img.shields.io/badge/Category-Smart%20Education-brightgreen.svg)]()
[![Stack](https://img.shields.io/badge/Frontend-Next.js%2014%20%7C%20TailwindCSS-black.svg)]()
[![Backend](https://img.shields.io/badge/Backend-FastAPI%20%7C%20PostgreSQL-teal.svg)]()
[![AI](https://img.shields.io/badge/AI-OpenCV%20%7C%20Face%20Recognition-orange.svg)]()

> **Smart India Hackathon 2026 — Problem Statement ID: SIH26205 (Smart Education)**  
> Automated, reliable, and intelligent classroom attendance using computer vision with anti-proxy liveness detection, subject-wise analytics, low-attendance alerts, and predictive dropout/debarment risk modeling.

---

## 🌟 Vision & Key Capabilities

AttendAI eliminates proxy attendance, manual roll calls, and paper registers by providing:
1. **Automated Facial Attendance**: High-accuracy face detection and recognition using deep feature embeddings.
2. **Anti-Proxy Liveness Verification**: Passive and active liveness verification (blink detection, texture analysis) preventing spoofing via photos or recorded video.
3. **Real-Time Classroom Live Ingestion**: Live classroom attendance tracking with instant visual feedback.
4. **Subject-Wise Analytics**: Granular attendance percentages per lecture, lab, and elective.
5. **Early Warning System**: Automated low-attendance alerts before students breach regulatory thresholds (e.g., < 75%).
6. **Predictive Attendance Risk Modeling**: Machine learning heuristics predicting student absence trends and exam debarment risks.
7. **Institutional Portals**: Dedicated, role-tailored dashboards for Students, Faculty, and Academic Administrators.

---

## 🏗️ Architecture

AttendAI strictly isolates the client presentation layer from AI and business compute:

```
                  +-----------------------------------+
                  |         Next.js Frontend          |
                  |  (TypeScript, Tailwind, Recharts) |
                  +-----------------+-----------------+
                                    |
                            REST API (JSON)
                                    |
                  +-----------------v-----------------+
                  |          FastAPI Backend          |
                  |    (Python 3.10+, SQLAlchemy 2.0) |
                  +--------+-----------------+--------+
                           |                 |
                SQL Queries|                 | Image Ingestion / Embeddings
                           v                 v
                 +---------+---+       +-----+----------------+
                 | PostgreSQL  |       | Computer Vision & AI |
                 |  Database   |       | (OpenCV / Liveness / |
                 |             |       |  Risk Prediction)    |
                 +-------------+       +----------------------+
```

---

## 📁 Repository Structure

```
AttendAI/
├── frontend/               # Next.js App Router, Tailwind CSS 3.4, Lucide, Recharts
│   ├── src/
│   │   ├── app/            # Landing page, (auth), (dashboard) routes
│   │   ├── components/     # UI primitives and composite dashboard widgets
│   │   ├── services/       # Typed REST API service layer
│   │   ├── types/          # Domain TypeScript interfaces
│   │   └── lib/            # Utilities and layout constants
│   ├── package.json
│   └── README.md
│
├── backend/                # Python FastAPI REST application
│   ├── app/
│   │   ├── api/v1/         # Modular REST routers (health, auth, students, face, etc.)
│   │   ├── core/           # Config (Pydantic BaseSettings), Database, Exceptions
│   │   ├── models/         # SQLAlchemy ORM models (Student, Attendance, FaceData)
│   │   ├── schemas/        # Pydantic validation DTOs
│   │   ├── services/       # Face recognition, liveness, and risk prediction abstractions
│   │   └── main.py         # Application entry point and middleware
│   ├── requirements.txt
│   ├── run.py
│   └── README.md
│
├── docs/                   # System design, schema diagrams, and API specifications
│   └── api_specification.md
├── .env.example            # Master environment template
└── README.md               # Master documentation
```

---

## 🚀 Quick Start

### 1. Backend Setup
```bash
cd backend
python -m venv .venv
# Activate venv:
# Windows: .venv\Scripts\activate
# Linux/macOS: source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python run.py
```
- The backend will start on **`http://localhost:8000`**
- Interactive Swagger API docs: **`http://localhost:8000/docs`**
- Health Check: **`http://localhost:8000/api/v1/health`**

### 2. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```
- Open **`http://localhost:3000`** in your browser.

---

## 📄 License & Team
Developed for **Smart India Hackathon 2026** under Problem Statement **SIH26205**.
