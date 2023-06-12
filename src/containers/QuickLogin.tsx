import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import SpinnerOverlay from "../components/SpinnerOverlay";
import { useApp, useAuth } from "../context";

import PATH from "../constants/route";

import { loginByLink } from "../api";

export default function QuickLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showErrorToast } = useApp();
  const { loginByToken } = useAuth();

  const linkLogin = async () => {
    const params = queryString.parse(location.search);

    if (!params.hash || !params.code) {
      navigate(PATH.LOGIN);
      showErrorToast("Invalid link");
    } else {
      const { data, error } = await loginByLink({ hash: params.hash, code: params.code });
      if (error) {
        navigate(PATH.LOGIN);
      } else {
        loginByToken(data.token);
      }
    }
  };

  useEffect(() => {
    linkLogin();
  }, []);
  return <SpinnerOverlay />;
}
