import React from "react";
import { formDataList } from "../app/Helpers/Data/PredeterminedData";

type RadioPropTypes = {
  parentWrapperClasses?: string;
  wrapperClasses?: string;
  radioClasses?: string;
  radioLabelClasses?: string;
  labelClasses?: string;
  label?: string;
  name: string;
  selectClasses?: string;
  targetData: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string | undefined;
  touched?: boolean | undefined;
};

function Radio({
  parentWrapperClasses,
  wrapperClasses,
  radioClasses,
  radioLabelClasses,
  labelClasses,
  label,
  name,
  targetData,
  onChange,
  errors,
  touched,
}: RadioPropTypes) {
  return (
    <div className={parentWrapperClasses}>
      {label && <label className={labelClasses}>{label}</label>}
      <div className={wrapperClasses}>
        {formDataList[targetData as keyof typeof formDataList].map((data) => (
          <label key={data.label} className={radioLabelClasses}>
            <input
              type="radio"
              name={name}
              value={data.value}
              onChange={onChange}
              className={radioClasses}
            />
            {data.label}
          </label>
        ))}
      </div>
      {errors && touched ? <p className="text-red-500">{errors}</p> : null}
    </div>
  );
}

export default Radio;
