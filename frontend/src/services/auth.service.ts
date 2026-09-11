import { apiClient } from "./api-client";
import { User, UserRole } from "@/types";

export interface LoginPayload {
  email: string;
  password: string;
  role?: UserRole;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export const authService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    return apiClient<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};
