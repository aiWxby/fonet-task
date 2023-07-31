import React from "react";
import { ButtonTypes } from "../app/Helpers/Enums/EnumDefinitions";

type ButtonPropTypes = {
  label: string;
  type?: ButtonTypes;
  id?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonClasses?: string;
};

function Button({
  label,
  type,
  id,
  disabled,
  onClick,
  buttonClasses,
}: ButtonPropTypes) {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {disabled ? "Yönlendiriliyor..." : label}
    </button>
  );
}

export default Button;
