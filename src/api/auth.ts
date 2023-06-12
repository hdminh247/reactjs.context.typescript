import { api, setAuthHeader } from "./axios";

// Request to login
export async function requestToLogin(email: string): Promise<RestApi.Response> {
  try {
    const result = await api.post("/auth/request-to-login", { email });
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

// Resend code to email
export async function resendCodeToEmail(email: string): Promise<RestApi.Response> {
  try {
    const result = await api.post("/auth/resend-code", { email });
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

// Login for normal user
export async function loginUser(email: string, password: string): Promise<RestApi.Response> {
  try {
    const result = await api.post("/auth/login", { email, password });
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

// Reset password
export async function resetPassword(data: any): Promise<RestApi.Response> {
  try {
    const result = await api.post("/auth/reset-password", data);
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

export async function verifyUser(token?: string) {
  // If token is defined, set it in header
  if (token) {
    setAuthHeader(token);
  }

  try {
    const result = await api.get("/user/profile");
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

export async function loginByCode(data: any) {
  try {
    const result = await api.post("/auth/login-by-code", data);
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

export async function loginByLink(data: any) {
  try {
    const result = await api.post("/auth/magic-link-login", data);
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

export async function getRoles() {
  try {
    const result = await api.get("/role/list");
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

export async function setUpPassword(data: any) {
  try {
    const result = await api.post("/auth/setup-password", data);
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

export async function requestResetPassword(data: any) {
  try {
    const result = await api.post("/auth/request-reset-password", data);
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}
