// @ts-nocheck

// Antd Components
import { Form } from "antd";

// Custom Components
import CustomInput from "./CustomInput";

export default function LoginCodeForm({ onSubmit, onResend }: Props) {
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
              <p className="login_sunheading">Enter code from your email</p>
              <div className="login_field_row">
                <div className="form_element">
                  <Form.Item name="code" rules={[{ required: true, message: "This field is required" }]}>
                    <CustomInput placeholder={"Your code"} />
                  </Form.Item>
                </div>
                <div className="login_btn_row">
                  <div className="button_col">
                    <button type="submit" className="continue_button">
                      Submit <img src="/images/btn-arw-white.png" />
                    </button>
                  </div>
                  <div onClick={onResend} className={"text--underline cursor-pointer mt-16"}>
                    Resend Email
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
  onResend: () => void;
}
