// @ts-nocheck
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";

// eslint-disable-next-line react/display-name
const TelCustomInput = React.forwardRef((props: Props, customRef) => {
  const validProps = { ...props };
  delete validProps.noteText;
  delete validProps.onInputChange;
  delete validProps.onChange;
  delete validProps.value;

  const [value, setValue] = useState("");

  return (
    <div className={`custom-input ${props.className || ""}`}>
      {props.label && <label className={"custom-input__label"}>{props.label}</label>}
      {/*<MaskedInput maskGenerator={maskGenerator} value={value} onChange={setValue} />*/}
      <InputMask
        mask="(999) 999-9999"
        onChange={(e) => {
          setValue(e.target.value);
          props.onInputChange(e.target.value);
        }}
        value={value}
      >
        {() => <input {...validProps} className={"custom-input--tel"} />}
      </InputMask>
      {props.noteText && <span className={"custom-input__label"}>{props.noteText}</span>}
    </div>
  );
});

interface Props {
  addonAfter?: boolean;
  onFocus?: any;
  onBlur?: any;
  className?: string;
  label?: string;
  noteText?: string;
  onInputChange?: any;
  value?: any;
  placeholder?: string;
}

export default TelCustomInput;
