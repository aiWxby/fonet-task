import React from "react";

type TextareaPropTypes = {
  id?: string;
  parentWrapperClasses?: string;
  wrapperClasses?: string;
  labelClasses?: string;
  label?: string;
  textareaClasses?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string | number;
  errors?: string | undefined;
  touched?: boolean | undefined;
};

function Textarea({
  id,
  parentWrapperClasses,
  wrapperClasses,
  label,
  labelClasses,
  textareaClasses,
  placeholder,
  onChange,
  value,
  errors,
  touched,
}: TextareaPropTypes) {
  return (
    <div className={parentWrapperClasses}>
      <div className={`${wrapperClasses}`}>
        {label && (
          <label htmlFor={id} className={`${labelClasses}`}>
            {label}
          </label>
        )}
        <textarea
          id={id}
          placeholder={placeholder}
          className={`${textareaClasses}`}
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

export default Textarea;
