import { apiClient } from "./api-client";
import { Student } from "@/types";

export const studentService = {
  async getStudents(params?: { department?: string; semester?: number; face_registered?: boolean }): Promise<Student[]> {
    return apiClient<Student[]>("/students", { params });
  },

  async getStudentById(id: number): Promise<Student> {
    return apiClient<Student>(`/students/${id}`);
  },
};
