export type UserRole = "STUDENT" | "TEACHER" | "ADMIN";

export interface User {
  id: number;
  email: string;
  full_name: string;
  role: UserRole;
  is_active: boolean;
}

export interface AuthSession {
  user: User;
  token: string;
}
