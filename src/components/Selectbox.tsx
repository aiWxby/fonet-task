import React from "react";
import { formDataList } from "../app/Helpers/Data/PredeterminedData";

type SelectPropTypes = {
  id?: string;
  wrapperClasses?: string;
  labelClasses?: string;
  label?: string;
  selectClasses?: string;
  targetData: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  errors?: string | undefined;
  touched?: boolean | undefined;
};

function Selectbox({
  id,
  wrapperClasses,
  label,
  labelClasses,
  selectClasses,
  targetData,
  onChange,
  errors,
  touched,
}: SelectPropTypes) {
  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <select defaultValue="none" id={id} className={selectClasses} onChange={onChange}>
        <option value="none">
          Seç
        </option>
        {formDataList[targetData as keyof typeof formDataList].map(
          (data) => (
            <option value={data.value} key={data.value}>
              {data.label}
            </option>
          )
        )}
      </select>
      {errors && touched ? <p className="text-red-500">{errors}</p> : null}
    </div>
  );
}

export default Selectbox;
