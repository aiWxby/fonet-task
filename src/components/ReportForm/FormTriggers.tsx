import React from "react";
import Button from "../Button";
import { ButtonTypes } from "../../app/Helpers/Enums/EnumDefinitions";

type FormTiggersPropTypes = {
  isSubmitting: boolean;
};

function FormTriggers({ isSubmitting }: FormTiggersPropTypes) {
  return (
    <div className="flex justify-between">
      <Button
        type={ButtonTypes.submit}
        label="Gönder"
        disabled={isSubmitting}
        buttonClasses="px-8 py-1.5 rounded-lg bg-secondary-800 shadow-md hover:bg-blue-600 hover:text-gray-200 disabled:bg-orange-500 transition-all"
      />
      <Button
        type={ButtonTypes.reset}
        label="Sıfırla"
        buttonClasses="px-8 py-1.5 rounded-lg bg-red-500 shadow-md hover:text-gray-200 transition-all"
      />
    </div>
  );
}

export default FormTriggers;
