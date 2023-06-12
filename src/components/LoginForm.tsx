// @ts-nocheck

// Antd Components
import { Form } from "antd";

// Custom Components
import CustomInput from "./CustomInput";

export default function LoginForm({ onSubmit }: Props) {
  return (
    <>
      <div className="login_section">
        <div className="login_container">
          <Form
            onFinish={(data) => {
              onSubmit(data);
            }}
            name="first-detail-form"
          >
            <div className="login_box">
              <h2 className="login_heading">Login</h2>
              <p className="login_sunheading">
                Enter your email and we’ll send <br className="forMob" />
                you a link
              </p>
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
                      Send Me a Link <img src="/images/btn-arw-white.png" />
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

interface Props {
  onSubmit: (data: any) => void;
}
