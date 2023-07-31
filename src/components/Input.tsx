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
  errors?: string | undefined;
  touched?: boolean | undefined;
};

function Input({
  id,
  wrapperClasses,
  label,
  labelClasses,
  type,
  inputClasses,
  placeholder,
  onChange,
  value,
  errors,
  touched,
}: InputPropTypes) {
  return (
    <div className="space-y-2">
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
      {errors &&
      touched ? (
        <p className="text-red-500">
          {errors}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
