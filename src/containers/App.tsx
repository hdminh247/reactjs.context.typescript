// External
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Containers
import PageLayout from "../components/PageLayout";
import Login from "./Login";
import LoginCode from "./LoginCode";
import SetupAccount from "./SetupAccount";
import QuickLogin from "./QuickLogin";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import LandingPage from "./LandingPage";

import ScrollToTop from "../components/ScrollToTop";

// Contexts
import { AuthContext, AppContext } from "../context";

// Styles
import "../styles/index.scss";

import PATH from "../constants/route";

function App() {
  const { ROOT, LOGIN, LOGIN_CODE, SETUP_ACCOUNT, LOGIN_LINK, FORGOT_PASSWORD, RESET_PASSWORD } = PATH;

  return (
    <Router>
      <AppContext>
        <AuthContext>
          <>
            <ScrollToTop />
            <Routes>
              <Route path={ROOT} element={<LandingPage />} />
              <Route path={LOGIN} element={<Login />} />
              <Route path={LOGIN_LINK} element={<QuickLogin />} />
              <Route
                path={FORGOT_PASSWORD}
                element={
                  <PageLayout>
                    <ForgotPassword />
                  </PageLayout>
                }
              />
              <Route
                path={RESET_PASSWORD}
                element={
                  <PageLayout>
                    <ResetPassword />
                  </PageLayout>
                }
              />
              <Route path={SETUP_ACCOUNT} element={<SetupAccount />} />
              <Route path={LOGIN_CODE} element={<LoginCode />} />
            </Routes>
          </>
        </AuthContext>
      </AppContext>
    </Router>
  );
}

export default App;
