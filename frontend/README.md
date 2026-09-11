# 💻 AttendAI Frontend (Next.js 14 + Tailwind CSS 3.4 + TypeScript)

Client dashboard application for the AI-Powered Smart Attendance & Student Engagement System (**SIH 2026 PS SIH26205**).

---

## 🎨 Tech Stack & Design System
- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4 (locked per hackathon rules to avoid v4 breaking changes)
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **Forms & Validation**: React Hook Form, Zod
- **Aesthetic**: Modern obsidian/slate dark glassmorphism, responsive desktop-first layout, subtle borders, rounded cards, live health polling badge, rich empty & error states.

---

## 📁 Directory Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── login/               # Role-based auth gateway (Student / Faculty / Admin)
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx           # Collapsible sidebar + live header shell
│   │   │   ├── dashboard/           # Executive Overview & attendance metrics
│   │   │   ├── live-attendance/     # Face recognition scanner & anti-spoofing HUD
│   │   │   ├── students/            # Enrolled student directory & biometrics status
│   │   │   ├── teachers/            # Faculty allocations & assigned courses
│   │   │   ├── subjects/            # Curriculum courses & active classroom sessions
│   │   │   ├── attendance/          # Subject-wise attendance audit logs
│   │   │   ├── analytics/           # Deep-dive attendance trends & distributions
│   │   │   ├── predictions/         # AI attendance-risk & exam debarment forecasting
│   │   │   ├── reports/             # Verifiable PDF/CSV ledger generation
│   │   │   └── admin/               # Infrastructure nodes & security audit logs
│   │   ├── globals.css              # Custom HSL design tokens & glassmorphism
│   │   ├── layout.tsx               # Root HTML wrapper & fonts
│   │   └── page.tsx                 # SIH 2026 Hackathon Landing Page
│   ├── components/
│   │   ├── ui/                      # Button, Card, Badge, Input, Skeleton, Alert
│   │   ├── layout/                  # Sidebar, Header, HealthBadge
│   │   └── dashboard/               # StatCard, AttendanceChart, LiveScannerPreview, DefaulterAlertCard
│   ├── services/                    # Typed API client layer
│   │   ├── api-client.ts            # Resilient fetch wrapper with timeout & error parser
│   │   ├── health.service.ts        # Live backend diagnostics polling
│   │   ├── student.service.ts       # Student endpoints
│   │   ├── attendance.service.ts    # Attendance sessions & logs
│   │   ├── analytics.service.ts     # Trends & defaulter queries
│   │   └── prediction.service.ts    # AI risk prediction queries
│   ├── types/                       # Shared domain TypeScript interfaces
│   └── lib/                         # cn utility, formatters, and navigation constants
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
├── .env.local
└── README.md
```

---

## 🚀 Running the Frontend

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 Backend Connection
The frontend connects to the FastAPI backend at `http://localhost:8000/api/v1` (configured via `NEXT_PUBLIC_API_BASE_URL`). The live status pill in the top header continuously monitors API readiness and provides real-time subsystem diagnostics.
