import { apiClient } from "./api-client";
import { SystemHealth } from "@/types";

export const healthService = {
  async checkHealth(): Promise<SystemHealth> {
    try {
      const data = await apiClient<SystemHealth>("/health", { timeoutMs: 3000 });
      return data;
    } catch (err: any) {
      return {
        status: "unreachable",
        project_name: "AttendAI Backend API",
        version: "1.0.0",
        environment: "offline",
        timestamp: new Date().toISOString(),
        database: {
          status: "unreachable",
          dialect: "unknown",
          connected: false,
          detail: err.message,
        },
        ai_subsystem: {
          engine: "OpenCV Face Pipeline",
          status: "standby",
          model_version: "FaceNet-v1.0",
          liveness_detector_ready: false,
        },
      };
    }
  },
};
