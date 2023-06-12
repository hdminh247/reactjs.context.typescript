// External
import { createContext, useRef, useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// APIs
import { clearAuthHeader, setAuthHeader, loginUser, verifyUser, loginByCode as codeLogin } from "../api";

// Contexts
import { useApp } from "./app";

// Constants
import { tokenKeyName, getNonRedirectPathsForNonAuthUser } from "../constants";
import PATH from "../constants/route";

// Custom Component
import SpinnerOverlay from "../components/SpinnerOverlay";

// @ts-ignore
const context = createContext<Context>({});

export enum AuthState {
  "pending",
  "unAuthenticated",
  "authenticated",
}

// Expose this role in this auth context

import { isAdmin } from "../utils/auth";
import { getRoles } from "../api";

/*
 Auth Flow: (TODO)

 - on app start ( when this component is mounted ):
   - call api /me to find if the localstorage token is still valid, if it is ( mark user as logged in & do nothing )
  - if token is missing or invalid: mark user as not logged in & redirect to '/login', while saving the page he was on ( or trying to access )
  - once he's logged in ( save token , mark as logged in & redirect to the page he was trying to access )
*/
export function AuthContext({ children }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const { showErrorToast } = useApp();

  const user = useRef<User>();
  const { setLoading } = useApp();
  const [status, setStatus] = useState<AuthState>(AuthState.pending);
  const [role, setRole] = useState<any>({});
  // const [previousPath, setPreviousPath] = useState("");

  // Normal login, by email and password
  async function login(email: string, password: string): Promise<RestApi.Response> {
    try {
      const response = await loginUser(email, password);
      const { error, data } = response;
      // No error happens
      if (!error) {
        user.current = data.user;

        localStorage.setItem(TOKEN_KEY, data.token);
        setAuthHeader(data.token);

        // Update status
        setStatus(AuthState.authenticated);

        if (user?.current && isAdmin(user?.current?.role)) {
          navigate("/");
        } else {
          navigate("/");
        }
      }

      return response;
    } catch (error) {
      showErrorToast("Internal server. Please try again");
      // Unknown issue or code issues
      return { error: true, data: null, errors: "Internal server. Please try again" };
    }
  }

  // Login by code
  async function loginByCode(email: string, code: string) {
    try {
      codeLogin({ email, code })
        .then(async ({ data }) => {
          user.current = data;

          localStorage.setItem(TOKEN_KEY, data.token);
          setAuthHeader(data.token);
          setStatus(AuthState.authenticated);
        })
        .catch((e) => {
          console.log(e);
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem("currentApplication");
          clearAuthHeader();
          setStatus(AuthState.unAuthenticated);

          // Redirect to login page
          navigate(PATH.LOGIN);
        });
    } catch (error) {
      showErrorToast("Internal server. Please try again");
    }
  }

  // Login by token
  async function loginByToken(token: string, redirectAfterLogin = true) {
    try {
      verifyUser(token)
        .then(async ({ data }) => {
          user.current = data;

          localStorage.setItem(TOKEN_KEY, token);
          setAuthHeader(token);

          setStatus(AuthState.authenticated);
        })
        .catch((e) => {
          console.log(e);
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem("currentApplication");
          clearAuthHeader();
          setStatus(AuthState.unAuthenticated);

          // Redirect to login page
          navigate(PATH.LOGIN);
        });
    } catch (error) {
      showErrorToast("Internal server. Please try again");
    }
  }

  function logOut(navigatePath?: string) {
    // Update status
    setStatus(AuthState.pending);

    // Remove token from header
    setAuthHeader("");

    // Remove saved token value in local storage
    localStorage.removeItem(TOKEN_KEY);

    // Remove saved application
    localStorage.removeItem("currentApplication");

    // Reset user value
    user.current = undefined;

    // Update status
    setStatus(AuthState.unAuthenticated);

    if (navigatePath) {
      navigate(navigatePath);
    } else {
      // Redirect to login page
      navigate(PATH.LOGIN);
    }
  }

  // useEffect(() => {
  //   // Only save remember history
  //   if (nonRememberRoutes.indexOf(location.pathname) === -1) {
  //     // Store this url to get back later
  //     setPreviousPath(location.pathname);
  //   }
  // }, [location.pathname]);

  const getRoleList = async () => {
    const { data } = await getRoles();
    const roles: any = {};
    data.map((role: any) => {
      roles[role.name] = role.id;
    });

    setRole(roles);
  };

  const updateUserInfo = (data: any) => {
    user.current = { ...user.current, ...data };
  };

  const getProfile = async () => {
    setLoading(true);

    const { data } = await verifyUser();

    user.current = data;

    setLoading(false);
  };

  useEffect(() => {
    // get role list first
    getRoleList();

    const token = localStorage.getItem(TOKEN_KEY);

    // No token available
    if (!token) {
      setStatus(AuthState.unAuthenticated);

      if (!getNonRedirectPathsForNonAuthUser().includes(location.pathname)) {
        return navigate(PATH.LOGIN);
      }
    } else {
      setAuthHeader(token);
      verifyUser()
        .then(async ({ data }) => {
          user.current = data;

          setStatus(AuthState.authenticated);
        })
        .catch((e) => {
          console.log(e);
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem("currentApplication");
          clearAuthHeader();
          setStatus(AuthState.unAuthenticated);

          // Redirect to login page
          navigate(PATH.LOGIN);
        });
    }
  }, []);

  return (
    <context.Provider
      value={{
        user: user.current as User,
        status,
        login,
        loginByToken,
        loginByCode,
        logOut,
        role,
        updateUserInfo,
        getProfile,
      }}
    >
      {status === AuthState.pending ? <SpinnerOverlay /> : null}
      {status === AuthState.authenticated ? children : null}
      {status === AuthState.unAuthenticated ? children : null}
    </context.Provider>
  );
}

export function useAuth() {
  return useContext(context);
}

interface Props {
  children: JSX.Element;
}

export type RoleType = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  avatar?: string;
  role: RoleType;
  roleId: number;
  phoneNumber?: string;
  jobTitle?: string;
};

interface Context {
  user: User;
  login: (email: string, password: string) => Promise<RestApi.Response>;
  loginByToken: (token: string, redirectAfterSuccess?: boolean) => void;
  loginByCode: (email: string, code: string) => void;
  logOut: (navigatePath?: string) => void;
  status: AuthState;
  role: any;
  updateUserInfo: (data: any) => void;
  getProfile: () => void;
}

export const TOKEN_KEY = tokenKeyName;
