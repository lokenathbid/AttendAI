import { APP_CONFIG } from "@/lib/constants";

export class ApiError extends Error {
  code: string;
  status: number;
  details?: any;

  constructor(message: string, status: number = 500, code: string = "API_ERROR", details?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
  timeoutMs?: number;
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, timeoutMs = 8000, ...customConfig } = options;

  let url = endpoint.startsWith("http") ? endpoint : `${APP_CONFIG.apiBaseUrl}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const qs = searchParams.toString();
    if (qs) {
      url += (url.includes("?") ? "&" : "?") + qs;
    }
  }

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...customConfig.headers,
  };

  try {
    const response = await fetch(url, {
      ...customConfig,
      headers,
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { error: { message: response.statusText, code: "HTTP_ERROR" } };
      }
      throw new ApiError(
        errorData?.error?.message || `Request failed with status ${response.status}`,
        response.status,
        errorData?.error?.code || "HTTP_ERROR",
        errorData?.error?.details
      );
    }

    return (await response.json()) as T;
  } catch (error: any) {
    clearTimeout(id);
    if (error.name === "AbortError") {
      throw new ApiError("Request timeout exceeded", 408, "TIMEOUT");
    }
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(error.message || "Network connection error", 0, "NETWORK_ERROR");
  }
}
