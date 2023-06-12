// External
import { createContext, useState, useContext, useEffect, useLayoutEffect } from "react";

import { notification } from "antd";

import { api } from "../api";

// Components
import SpinnerOverlay from "../components/SpinnerOverlay";
import { useLocation, useNavigate } from "react-router-dom";

import PATH from "../constants/route";

// @ts-ignore
const context = createContext<Context>({});

export function AppContext({ children }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Global value
  const [userInfo] = useState<User.Detail>({
    email: "",
    name: "",
    id: 0,
  });

  const axiosErrorHandler = () => {
    // // Add a request interceptor
    api.interceptors.request.use(function (config) {
      // Do something before request is sent
      // setLoading(true);
      return config;
    });

    api.interceptors.response.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        if (error && error.response) {
          const { status = 0, data } = error.response;

          setLoading(false);

          // Unauthenticated error
          if (status === 401) {
            navigate(PATH.LOGIN);
          } else {
            if (data?.errors[0]?.message) {
              // Show error toast of other errors
              showErrorToast(data.errors[0].message);
            } else {
              showErrorToast("Internal Server Error");
            }
          }
        } else {
          showErrorToast("Internal Server Error");
        }
        // Do something with request error
        return Promise.reject(error);
      },
    );
  };

  const showErrorToast = (message: string) => {
    notification.error({
      message: <span className={"weight-700"}>Error</span>,
      description: message,
      placement: "topRight",
      className: "error-toast",
    });
  };

  const showSuccessToast = (message: string) => {
    notification.success({
      message: <span className={"weight-700"}>Success</span>,
      description: message,
      placement: "topRight",
      className: "success-toast",
    });
  };

  useEffect(() => {
    axiosErrorHandler();
  }, []);

  // Always scroll to top when changing page
  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <context.Provider
      value={{
        userInfo,
        setLoading,
        showErrorToast,
        showSuccessToast,
      }}
    >
      {children}
      {loading && <SpinnerOverlay />}
    </context.Provider>
  );
}

export function useApp() {
  return useContext(context);
}

interface Props {
  children: JSX.Element;
}

interface Context {
  userInfo: User.Detail;
  setLoading: (value: boolean) => void;
  showErrorToast: (message: string) => void;
  showSuccessToast: (message: string) => void;
}
