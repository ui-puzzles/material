import React from "react";

function InputComponent(props: InputH5ComponentProps) {
  const { placeholder, value, onChange, type, disabled } = props;

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
}

export interface InputH5ComponentProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
  disabled: boolean;
}

export default InputComponent;