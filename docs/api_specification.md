# AttendAI REST API Specification

Base URL: `http://localhost:8000/api/v1`

---

## 1. System & Health
### `GET /health`
Returns the status of the API, PostgreSQL database connectivity, AI subsystem readiness, and service metadata.

**Response (200 OK):**
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "environment": "development",
  "timestamp": "2026-09-08T11:50:00Z",
  "database": {
    "status": "connected",
    "dialect": "postgresql"
  },
  "ai_subsystem": {
    "engine": "OpenCV Face Pipeline",
    "status": "ready"
  }
}
```

---

## 2. Authentication & Users
### `POST /auth/login`
Authenticates a student, teacher, or administrator.
- **Request Body**: `{"username": "...", "password": "...", "role": "STUDENT" | "TEACHER" | "ADMIN"}`
- **Response**: `{"access_token": "...", "token_type": "bearer", "user": {...}}`

---

## 3. Students
### `GET /students`
List enrolled students with pagination and department/semester filters.
### `POST /students`
Register a new student profile.
### `GET /students/{id}`
Retrieve student profile and basic attendance stats.

---

## 4. Teachers
### `GET /teachers`
List faculty members and departmental allocations.

---

## 5. Subjects & Timetable
### `GET /subjects`
List courses and subject codes.
### `GET /subjects/{id}/sessions`
List scheduled attendance sessions for a subject.

---

## 6. Attendance Operations
### `POST /attendance/sessions`
Create a new classroom attendance session (e.g. CS302 - Operating Systems Lecture).
### `POST /attendance/mark`
Manual or automated batch attendance submission.
### `GET /attendance/summary`
Classroom-level and subject-level attendance records.

---

## 7. Face Recognition & Liveness Pipeline
### `POST /face/register`
Enroll a student's facial template into the database.
- **Payload**: `multipart/form-data` with `student_id` and image file(s).
- **Result**: `{"status": "registered", "face_detected": true, "embedding_dim": 512}`

### `POST /face/verify`
Single-face anti-proxy verification.
- **Payload**: Camera capture frame.
- **Returns**: Match score, recognized student identity, and liveness confidence (`is_real: true`).

### `POST /face/stream-ingest`
Classroom multi-face detection from a single wide-angle snapshot.

---

## 8. Analytics & Metrics
### `GET /analytics/overview`
Aggregated institutional stats: overall percentage, active sessions, defaulter counts.
### `GET /analytics/defaulters`
List of students with attendance below mandatory threshold (< 75%).
### `GET /analytics/trends`
Weekly and monthly attendance distribution curves.

---

## 9. AI Prediction
### `GET /predictions/risk-index`
Predicts which students are statistically at risk of falling below attendance criteria over the next 30 days.

---

## 10. Reports
### `POST /reports/export`
Generate exportable CSV or PDF attendance logs for audit and exam eligibility verification.
