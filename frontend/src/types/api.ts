export interface ApiResponse<T> {
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  success: boolean;
}

export interface SystemHealth {
  status: "healthy" | "degraded" | "unreachable";
  project_name: string;
  version: string;
  environment: string;
  timestamp: string;
  database: {
    status: string;
    dialect: string;
    connected: boolean;
    detail?: string | null;
  };
  ai_subsystem: {
    engine: string;
    status: string;
    model_version: string;
    liveness_detector_ready: boolean;
  };
}
