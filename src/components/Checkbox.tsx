import React from "react";

type CheckboxPropTypes = {
  wrapperClasses?: string;
  checkboxClasses?: string;
  labelClasses?: string;
  label?: string;
  id: string;
  selectClasses?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Radio({
  id,
  wrapperClasses,
  checkboxClasses,
  labelClasses,
  label,
  onChange,
}: CheckboxPropTypes) {
  return (
    <div className={wrapperClasses}>
      <input
        id={id}
        type="checkbox"
        className={checkboxClasses}
        onChange={onChange}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}

export default Radio;
