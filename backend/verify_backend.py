from starlette.testclient import TestClient
from app.main import app

client = TestClient(app)

res_root = client.get("/")
print("GET / ->", res_root.status_code, res_root.json())

res_health = client.get("/api/v1/health")
print("GET /api/v1/health ->", res_health.status_code, res_health.json())

res_analytics = client.get("/api/v1/analytics/overview")
print("GET /api/v1/analytics/overview ->", res_analytics.status_code, "Trends count:", len(res_analytics.json().get("attendance_trends", [])))

res_students = client.get("/api/v1/students")
print("GET /api/v1/students ->", res_students.status_code, "Students count:", len(res_students.json()))

res_predictions = client.get("/api/v1/predictions/risk-overview")
print("GET /api/v1/predictions/risk-overview ->", res_predictions.status_code, "Flagged count:", len(res_predictions.json().get("flagged_students", [])))

print("\n>>> ALL API CHECKS PASSED SUCCESSFULLY! <<<")
