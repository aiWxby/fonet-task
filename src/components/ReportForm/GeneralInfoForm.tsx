import { useFormikContext } from "formik";
import { ReportTypes } from "../../app/Helpers/Types/TypeDefinitions";

import Input from "../Input";
import Radio from "../Radio";
import Selectbox from "../Selectbox";
import Textarea from "../Textarea";
import Checkbox from "../Checkbox";
import MultipleSelect from "../MultipleSelect";

function GeneralInfo() {
  const formikContext = useFormikContext<ReportTypes>();
  return (
    <fieldset className="p-5 border border-solid rounded-md border-secondary-300">
      <legend className="px-2">Genel Bilgiler</legend>
      <div className="text-secondary-300 space-y-2">
        <Radio
          parentWrapperClasses="text-secondary-300 space-y-2"
          wrapperClasses="flex flex-col"
          radioClasses="mr-2"
          radioLabelClasses="text-gray-400"
          label="Bu bir darp raporu mu?"
          name="isAssault"
          targetData="isAssault"
          onChange={(event) =>
            formikContext.setFieldValue(
              "reportInfos.generalInfos.isAssault",
              Boolean(event.target.value)
            )
          }
          errors={formikContext.errors.reportInfos?.generalInfos?.isAssault}
          touched={formikContext.touched.reportInfos?.generalInfos?.isAssault}
        />
        {formikContext.values.reportInfos.generalInfos.isAssault !== null && (
          <>
            <Selectbox
              id="reason"
              wrapperClasses="text-secondary-300 space-y-2"
              label="Geliş Nedeni (*):"
              selectClasses={`block min-w-[10ch] p-1.5 rounded-md text-gray-400 bg-secondary-700 focus:bg-secondary-800 ${
                formikContext.errors.reportInfos?.generalInfos?.reason &&
                formikContext.touched.reportInfos?.generalInfos?.reason
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              targetData="reasons"
              onChange={(event) =>
                formikContext.setFieldValue(
                  "reportInfos.generalInfos.reason",
                  event.target.value
                )
              }
              errors={formikContext.errors.reportInfos?.generalInfos?.reason}
              touched={formikContext.touched.reportInfos?.generalInfos?.reason}
            />
            <Textarea
              id="detailOfReason"
              placeholder="Geliş nedeni detayını belirtiniz."
              parentWrapperClasses="space-y-2"
              wrapperClasses="flex flex-col space-y-2"
              label="Geliş Nedeni Detayı:"
              labelClasses="text-secondary-300"
              textareaClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                formikContext.errors.reportInfos?.generalInfos
                  ?.detailOfReason &&
                formikContext.touched.reportInfos?.generalInfos?.detailOfReason
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              onChange={(event) =>
                formikContext.setFieldValue(
                  "reportInfos.generalInfos.detailOfReason",
                  event.target.value
                )
              }
              errors={
                formikContext.errors.reportInfos?.generalInfos?.detailOfReason
              }
              touched={
                formikContext.touched.reportInfos?.generalInfos?.detailOfReason
              }
            />
            <Textarea
              id="complaint"
              placeholder="Şikayeti belirtiniz."
              parentWrapperClasses="space-y-2"
              wrapperClasses="flex flex-col space-y-2"
              label="Şikayet (*):"
              labelClasses="text-secondary-300"
              textareaClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                formikContext.errors.reportInfos?.generalInfos?.complaint &&
                formikContext.touched.reportInfos?.generalInfos?.complaint
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              onChange={(event) =>
                formikContext.setFieldValue(
                  "reportInfos.generalInfos.complaint",
                  event.target.value
                )
              }
              errors={formikContext.errors.reportInfos?.generalInfos?.complaint}
              touched={
                formikContext.touched.reportInfos?.generalInfos?.complaint
              }
            />
            <Input
              type="text"
              id="doctor"
              placeholder="Doktorun adını giriniz."
              wrapperClasses="flex flex-col space-y-2"
              label="Doktor Adı (*):"
              labelClasses="text-secondary-300"
              inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                formikContext.errors.reportInfos?.generalInfos?.doctor &&
                formikContext.touched.reportInfos?.generalInfos?.doctor
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              onChange={(event) =>
                formikContext.setFieldValue(
                  "reportInfos.generalInfos.doctor",
                  event.target.value
                )
              }
              errors={formikContext.errors.reportInfos?.generalInfos?.doctor}
              touched={formikContext.touched.reportInfos?.generalInfos?.doctor}
            />
            <Input
              type="text"
              id="organisation"
              placeholder="Organizasyon giriniz."
              wrapperClasses="flex flex-col space-y-2"
              label="Organizasyon (*):"
              labelClasses="text-secondary-300"
              inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                formikContext.errors.reportInfos?.generalInfos?.organisation &&
                formikContext.touched.reportInfos?.generalInfos?.organisation
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              onChange={(event) =>
                formikContext.setFieldValue(
                  "reportInfos.generalInfos.organisation",
                  event.target.value
                )
              }
              errors={
                formikContext.errors.reportInfos?.generalInfos?.organisation
              }
              touched={
                formikContext.touched.reportInfos?.generalInfos?.organisation
              }
            />
            <MultipleSelect
              label="Odada bulunanları belirtiniz (*):"
              parentWrapperClasses="space-y-2"
              wrapperClasses={`p-2 rounded-md bg-secondary-800
              ${
                formikContext.errors.reportInfos?.generalInfos?.peopleInRoom &&
                formikContext.touched.reportInfos?.generalInfos?.peopleInRoom
                  ? "border border-red-500"
                  : ""
              }`}
              listWrapperClasses="space-y-1"
              listClasses="p-1 rounded-md cursor-pointer select-none hover:text-primary-500"
              targetData="peopleInRoom"
              errors={
                formikContext.errors.reportInfos?.generalInfos?.peopleInRoom
              }
              touched={
                formikContext.touched.reportInfos?.generalInfos?.peopleInRoom
              }
            />
            <Checkbox
              id="isProvided"
              wrapperClasses="space-y-2 space-x-2"
              checkboxClasses="outline-none"
              label="Uygun ortam sağlandı mı?"
              labelClasses="select-none"
              onChange={() =>
                formikContext.setFieldValue(
                  "reportInfos.generalInfos.isProvided",
                  !formikContext.values.reportInfos.generalInfos.isProvided
                )
              }
            />
          </>
        )}
      </div>
    </fieldset>
  );
}

export default GeneralInfo;
