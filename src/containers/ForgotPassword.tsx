import { Form } from "antd";

import CustomInput from "../components/CustomInput";

import { requestResetPassword } from "../api";
import { useApp } from "../context";
import { Link } from "react-router-dom";
import PATH from "../constants/route";

export default function ForgotPassword() {
  const { setLoading, showSuccessToast } = useApp();
  const requestToResetPassword = async (data: any) => {
    setLoading(true);

    const { error } = await requestResetPassword({ email: data.email });
    if (!error) {
      showSuccessToast("A link has been sent to your email. Please check it out.");
    }

    setLoading(false);
  };
  return (
    <>
      <div className="login_section">
        <div className="login_container">
          <Form onFinish={requestToResetPassword} name="first-detail-form">
            <div className="login_box">
              <h2 className="login_heading">Forgot Password</h2>
              <p className="login_sunheading">Enter your email and we’ll send you reset password link</p>
              <div className="login_field_row">
                <div className="form_element">
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "This field is required" },
                      {
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "Invalid email",
                      },
                    ]}
                  >
                    <CustomInput placeholder={"e.g. example@example.com"} label={"Email*"} />
                  </Form.Item>
                </div>
                <div className="login_btn_row">
                  <div className="button_col">
                    <button type="submit" className="continue_button">
                      Request to reset password <img src="/images/btn-arw-white.png" />
                    </button>
                  </div>
                </div>
                <div className={"d-flex text-center mt-8 justify-content-center"}>
                  <Link to={PATH.LOGIN}>Already have account? Login </Link>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
