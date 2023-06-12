import axios from "axios";

import { baseApi } from "../constants";

// Primary APIs
export const api = axios.create({
  baseURL: baseApi,
  timeout: 200000,
});

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    error["message"] = error?.response?.data?.message;
    return Promise.reject(error);
  },
);

export function setAuthHeader(token: string) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function clearAuthHeader() {
  delete api.defaults.headers.Authorization;
}
