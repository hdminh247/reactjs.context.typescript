import { api } from "./axios";

export async function updateProfile(data: any): Promise<RestApi.Response> {
  try {
    const result = await api.put(`/user/profile`, data);
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}
