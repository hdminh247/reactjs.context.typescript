// @ts-nocheck

// Antd Components
import { Form } from "antd";

// Custom Components
import CustomInput from "./CustomInput";
import { passwordValidateRegex } from "../constants/validator";

export default function AdminLoginForm({ onSubmit }: Props) {
  return (
    <div className="login_section">
      <div className="login_container">
        <Form onFinish={onSubmit} name="first-detail-form">
          <div className="login_box">
            <h2 className="login_heading">Setup Your Password</h2>
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
                    Submit <img src="/images/btn-arw-white.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

interface Props {
  onSubmit: (data: any) => void;
}
