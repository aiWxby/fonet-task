import  { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { formDataList } from "../app/Helpers/Data/PredeterminedData";
import { ReportTypes } from "../app/Helpers/Types/TypeDefinitions";

type MultipleSelectPropTypes = {
  parentWrapperClasses?: string;
  label?: string;
  labelClasses?: string;
  wrapperClasses?: string;
  listWrapperClasses?: string;
  listClasses?: string;
  targetData: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
};

function MultipleSelect({
  parentWrapperClasses,
  label,
  labelClasses,
  wrapperClasses,
  listWrapperClasses,
  listClasses,
  targetData,
  errors,
  touched,
}: MultipleSelectPropTypes) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const formikContext = useFormikContext<ReportTypes>();

  const handleItemClick = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    formikContext.setFieldValue(
      "reportInfos.generalInfos.peopleInRoom",
      selectedItems
    );
  }, [selectedItems]);

  return (
    <div className={parentWrapperClasses}>
      <label className={labelClasses}>{label}</label>
      <div className={wrapperClasses}>
        <ul className={listWrapperClasses}>
          {formDataList[targetData as keyof typeof formDataList].map((data) => {
            return (
              <li
                key={data.value}
                className={` ${listClasses}
                ${
                  selectedItems.includes(data.value)
                    ? "bg-secondary-700 text-primary-500"
                    : ""
                }`}
                onClick={() => handleItemClick(data.value)}
              >
                {data.value}
              </li>
            );
          })}
        </ul>
      </div>
      {errors && touched ? <p className="text-red-500">{errors}</p> : null}
    </div>
  );
}

export default MultipleSelect;
