declare namespace Register {
  interface ApiPayload {
    email: string;
    password: string;
  }

  interface ApiSocialPayload {
    email: string;
    name: string;
    socialId: number;
    provider: string;
  }

  interface ApiEditUserPayload {
    id: number;
    full_name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    street_address?: string;
    zip_code?: string;
    country?: string;
    styles?: number[];
  }

  interface ApiUpdateAvatarPayload {
    id: number;
    file: any;
  }

  interface FormData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }
}

declare namespace Login {
  interface FormData {
    email: string;
    password: string;
  }
}
