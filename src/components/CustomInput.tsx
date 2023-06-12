import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef((props: any, ref) => {
  const validProps = { ...props };
  delete validProps.noteText;
  return (
    <div className={`custom-input ${props.className || ""}`}>
      {props.label && <label className={"custom-input__label"}>{props.label}</label>}
      {props.type !== "textarea" && (
        <Input
          {...validProps}
          className={props.addonAfter ? "custom-input--icon-after" : ""}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          ref={ref || null}
        />
      )}
      {props.type === "textarea" && <TextArea {...validProps} />}
      {props.noteText && <span className={"field_note"}>{props.noteText}</span>}
    </div>
  );
});

export default CustomInput;
