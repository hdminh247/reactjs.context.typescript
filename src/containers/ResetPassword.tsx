import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { Form } from "antd";

import { useApp } from "../context";

import { resetPassword } from "../api";

import CustomInput from "../components/CustomInput";

import PATH from "../constants/route";
import { passwordValidateRegex } from "../constants/validator";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const { showSuccessToast } = useApp();

  const onResetPassword = async (data: any) => {
    const { error } = await resetPassword({ ...data, ...queryString.parse(location.search) });
    if (!error) {
      showSuccessToast("Your password has been changed successfully");

      navigate(PATH.LOGIN);
    }
  };
  return (
    <>
      <div className="login_section">
        <div className="login_container">
          <Form onFinish={onResetPassword} name="first-detail-form">
            <div className="login_box">
              <h2 className="login_heading">Change Your Password</h2>
              <div className="login_field_row">
                <div className="form_element">
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: "This field is required" },
                      {
                        pattern: passwordValidateRegex,
                        message:
                          "Password must have at least 8 characters, contain uppercase, lowercase, number and special characters",
                      },
                    ]}
                  >
                    <CustomInput type={"password"} placeholder={"Your password"} label={""} />
                  </Form.Item>
                </div>
                <div className="form_element">
                  <Form.Item
                    name="confirmPassword"
                    rules={[
                      { required: true, message: "This field is required" },
                      {
                        pattern: passwordValidateRegex,
                        message:
                          "Password must have at least 8 characters, contain uppercase, lowercase, number and special characters",
                      },
                    ]}
                  >
                    <CustomInput type={"password"} placeholder={"Please confirm your password"} label={""} />
                  </Form.Item>
                </div>
                <div className="login_btn_row">
                  <div className="button_col">
                    <button type="submit" className="continue_button">
                      Reset Password <img src="/images/btn-arw-white.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
