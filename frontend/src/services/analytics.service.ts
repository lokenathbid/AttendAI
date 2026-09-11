import { apiClient } from "./api-client";
import { AnalyticsOverview, DefaulterStudent } from "@/types";

export const analyticsService = {
  async getOverview(): Promise<AnalyticsOverview> {
    return apiClient<AnalyticsOverview>("/analytics/overview");
  },

  async getDefaulters(threshold: number = 75.0): Promise<DefaulterStudent[]> {
    return apiClient<DefaulterStudent[]>("/analytics/defaulters", {
      params: { threshold },
    });
  },
};
