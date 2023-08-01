import { useFormikContext } from "formik";
import { ReportTypes } from "../../app/Helpers/Types/TypeDefinitions";

import Input from "../Input";
import Selectbox from "../Selectbox";
import Radio from "../Radio";

function PatientInfo() {
  const formikContext = useFormikContext<ReportTypes>();
  return (
    <fieldset className="p-5 border border-solid rounded-md border-secondary-300">
      <legend className="px-2">Hasta Bilgileri</legend>
      <div className="space-y-2">
        <Input
          type="text"
          id="name"
          placeholder="Hastanın adını yazınız."
          wrapperClasses="flex flex-col space-y-2"
          label="Adı (*):"
          labelClasses="text-secondary-300"
          inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
            formikContext.errors.reportInfos?.patientInfos?.name &&
            formikContext.touched.reportInfos?.patientInfos?.name
              ? "border border-red-500"
              : "border border-secondary-300"
          }`}
          onChange={(event) =>
            formikContext.setFieldValue(
              "reportInfos.patientInfos.name",
              event.target.value
            )
          }
          value={formikContext.values.reportInfos.patientInfos.name}
          errors={formikContext.errors.reportInfos?.patientInfos?.name}
          touched={formikContext.touched.reportInfos?.patientInfos?.name}
        />
        <Input
          type="text"
          id="surname"
          placeholder="Hastanın soyadını yazınız."
          wrapperClasses="flex flex-col space-y-2"
          label="Soyadı (*):"
          labelClasses="text-secondary-300"
          inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
            formikContext.errors.reportInfos?.patientInfos?.surname &&
            formikContext.touched.reportInfos?.patientInfos?.surname
              ? "border border-red-500"
              : "border border-secondary-300"
          }`}
          onChange={(event) =>
            formikContext.setFieldValue(
              "reportInfos.patientInfos.surname",
              event.target.value
            )
          }
          value={formikContext.values.reportInfos.patientInfos.surname}
          errors={formikContext.errors.reportInfos?.patientInfos?.surname}
          touched={formikContext.touched.reportInfos?.patientInfos?.name}
        />
        <Input
          type="number"
          id="age"
          placeholder="Hastanın yaşını yazınız."
          wrapperClasses="flex flex-col space-y-2"
          label="Yaşı (*):"
          labelClasses="text-secondary-300"
          inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
            formikContext.errors.reportInfos?.patientInfos?.age &&
            formikContext.touched.reportInfos?.patientInfos?.age
              ? "border border-red-500"
              : "border border-secondary-300"
          }`}
          onChange={(event) =>
            formikContext.setFieldValue(
              "reportInfos.patientInfos.age",
              event.target.value
            )
          }
          value={formikContext.values.reportInfos.patientInfos.age}
          errors={formikContext.errors.reportInfos?.patientInfos?.age}
          touched={formikContext.touched.reportInfos?.patientInfos?.age}
        />
        <Selectbox
          id="gender"
          wrapperClasses="text-secondary-300 space-y-2"
          label="Cinsiyet (*):"
          selectClasses={`block min-w-[10ch] p-1.5 rounded-md text-gray-400 bg-secondary-700 focus:bg-secondary-800 ${
            formikContext.errors.reportInfos?.patientInfos?.gender &&
            formikContext.touched.reportInfos?.patientInfos?.gender
              ? "border border-red-500"
              : "border border-secondary-300"
          }`}
          targetData="genders"
          onChange={(event) =>
            formikContext.setFieldValue(
              "reportInfos.patientInfos.gender",
              event.target.value
            )
          }
          errors={formikContext.errors.reportInfos?.patientInfos?.gender}
          touched={formikContext.touched.reportInfos?.patientInfos?.gender}
        />
        <div className="flex space-x-10">
          <Selectbox
            id="bloodGroup"
            wrapperClasses="text-secondary-300 space-y-2"
            label="Kan Grubu (*):"
            selectClasses={`block min-w-[10ch] p-1.5 rounded-md text-gray-400 bg-secondary-700 focus:bg-secondary-800 ${
              formikContext.errors.reportInfos?.patientInfos?.bloodGroup &&
              formikContext.touched.reportInfos?.patientInfos?.bloodGroup
                ? "border border-red-500"
                : "border border-secondary-300"
            }`}
            targetData="bloodGroups"
            onChange={(event) =>
              formikContext.setFieldValue(
                "reportInfos.patientInfos.bloodGroup",
                event.target.value
              )
            }
            errors={formikContext.errors.reportInfos?.patientInfos?.bloodGroup}
            touched={
              formikContext.touched.reportInfos?.patientInfos?.bloodGroup
            }
          />
          <Radio
            parentWrapperClasses="text-secondary-300 space-y-2"
            wrapperClasses="flex flex-col"
            radioClasses="mr-2"
            radioLabelClasses="text-gray-400"
            label="Rh (*):"
            name="rh"
            targetData="rhTypes"
            onChange={(event) =>
              formikContext.setFieldValue(
                "reportInfos.patientInfos.rh",
                event.target.value
              )
            }
            errors={formikContext.errors.reportInfos?.patientInfos?.rh}
            touched={formikContext.touched.reportInfos?.patientInfos?.rh}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default PatientInfo;
