const PATH = {
  ROOT: "/",
  LOGIN: "/login",
  SETUP_ACCOUNT: "/setup-account",
  LOGIN_CODE: "/login/code",
  LOGIN_LINK: "/login-by-code",
  FORGOT_PASSWORD: "/admin/forgot-password",
  RESET_PASSWORD: "/admin/reset-password",
};

export const nonRedirectPaths = [];

export const getNonRedirectPathsForNonAuthUser = () => {
  return [
    PATH.ROOT,
    PATH.LOGIN,
    PATH.SETUP_ACCOUNT,
    PATH.LOGIN_CODE,
    PATH.LOGIN_LINK,
    PATH.FORGOT_PASSWORD,
    PATH.RESET_PASSWORD,
  ];
};

export default PATH;
