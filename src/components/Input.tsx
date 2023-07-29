import React from "react";

type InputPropTypes = {
  id?: string;
  wrapperClasses?: string;
  labelClasses?: string;
  label?: string;
  type: string;
  inputClasses?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
};

function Input({
  id,
  wrapperClasses,
  labelClasses,
  label,
  type,
  inputClasses,
  placeholder,
  onChange,
  value,
}: InputPropTypes) {
  return (
    <div className={`${wrapperClasses}`}>
      {label && (
        <label htmlFor={id} className={`${labelClasses}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${inputClasses}`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
