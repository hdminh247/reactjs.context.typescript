declare namespace User {
  interface Role {
    name: string;
  }
  interface Detail {
    email: string;
    id: number;
    name?: string;
    avatar?: string;
  }

  interface ChangePasswordSubmitForm {
    newPassword: string;
    oldPassword: string;
    confirmPassword: string;
  }
}
