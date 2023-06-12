import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import PageLayout from "../components/PageLayout";

import PATH from "../constants/route";

import { requestToLogin } from "../api";
import { useApp } from "../context";

export default function Login() {
  const navigate = useNavigate();
  const { setLoading } = useApp();

  const onSubmit = async (data: any) => {
    setLoading(true);

    const { error } = await requestToLogin(data.email);

    if (!error) {
      navigate(PATH.LOGIN_CODE, { state: { email: data.email } });
    }

    setLoading(false);
  };
  return (
    <PageLayout>
      <LoginForm onSubmit={onSubmit} />
    </PageLayout>
  );
}
