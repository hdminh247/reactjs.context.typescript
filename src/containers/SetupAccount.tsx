import queryString from "query-string";

import SetupAccountForm from "../components/SetupAccount";
import PageLayout from "../components/PageLayout";

import { useAuth } from "../context";

import { setUpPassword } from "../api";
import { useLocation } from "react-router-dom";

export default function SetupAccount() {
  const { loginByToken } = useAuth();
  const location = useLocation();

  const setupAccount = async (data: any) => {
    const { error, data: responseData } = await setUpPassword({ ...data, ...queryString.parse(location.search) });
    if (!error) {
      loginByToken(responseData.token);
    }
  };
  return (
    <PageLayout>
      <SetupAccountForm onSubmit={setupAccount} />
    </PageLayout>
  );
}
