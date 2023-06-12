import { useLocation, useNavigate } from "react-router-dom";
import { notification } from "antd";

import LoginCodeForm from "../components/LoginCodeForm";
import PageLayout from "../components/PageLayout";

import { useApp, useAuth } from "../context";

import { resendCodeToEmail } from "../api";

import PATH from "../constants/route";
import { useEffect } from "react";

export default function LoginCode() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { setLoading } = useApp();

  if (!state?.email) {
    navigate(PATH.LOGIN);
  }
  const { loginByCode } = useAuth();

  const submitCodeToLogin = (data: any) => {
    loginByCode(state.email, data.code);
  };

  useEffect(() => {
    if (!state?.email) {
      navigate(PATH.LOGIN);
    }
  }, [state]);

  const resendCode = async () => {
    setLoading(true);
    const { error } = await resendCodeToEmail(state.email);

    if (!error) {
      notification.success({
        message: "",
        description: "Code has been sent to your email",
        placement: "topRight",
        className: "success-toast",
      });
    }

    setLoading(false);
  };

  return (
    <PageLayout>
      <LoginCodeForm onSubmit={submitCodeToLogin} onResend={resendCode} />
    </PageLayout>
  );
}
