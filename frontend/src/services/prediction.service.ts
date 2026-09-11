import { apiClient } from "./api-client";
import { RiskPredictionOverview } from "@/types";

export const predictionService = {
  async getRiskOverview(): Promise<RiskPredictionOverview> {
    return apiClient<RiskPredictionOverview>("/predictions/risk-overview");
  },
};
