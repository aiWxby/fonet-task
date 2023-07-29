import React from "react";
import Input from "../Input";
import { FormikDataTypes } from ".";
import { useFormikContext } from "formik";

function GeneralInfo() {
  const formikContext = useFormikContext<FormikDataTypes>();
  return (
    <fieldset className="p-5 border border-solid rounded-md border-secondary-300">
      <legend className="px-2">Genel Bilgiler</legend>
      <div className="text-secondary-300 space-y-2">
        <div className="flex flex-col">
          <label>
            Bu bir <b>darp raporu</b> mu? (*)
          </label>
          <label className="text-gray-400">
            <input
              type="radio"
              name="isAssault"
              id="assault"
              value="true"
              className="mr-2"
              onChange={() =>
                formikContext.setFieldValue("generalInfos.isAssault", true)
              }
              checked={formikContext.values.generalInfos.isAssault === true}
            />
            Evet
          </label>
          <label className="text-gray-400">
            <input
              type="radio"
              name="isAssault"
              id="not_assault"
              value="false"
              className="mr-2"
              onChange={() =>
                formikContext.setFieldValue("generalInfos.isAssault", false)
              }
              checked={formikContext.values.generalInfos.isAssault === false}
            />
            Hayır
          </label>
        </div>
        {formikContext.values.generalInfos.isAssault !== null && (
          <>
            <div className="space-y-2">
              <label htmlFor="reason">Geliş Nedeni (*):</label>
              <select
                name="reason"
                id="reason"
                className={`block w-full p-1.5 rounded-md text-gray-400 bg-secondary-700 focus:bg-secondary-800 ${
                  formikContext.errors.generalInfos?.reason &&
                  formikContext.touched.generalInfos?.reason
                    ? "border border-red-500"
                    : "border border-secondary-300"
                }`}
                onChange={(event) =>
                  formikContext.setFieldValue(
                    "generalInfos.reason",
                    event.target.value
                  )
                }
                value={formikContext.values.generalInfos.reason}
              >
                <option value="none" selected>
                  Seç
                </option>
                <option value="test">test</option>
              </select>
              {formikContext.errors.generalInfos?.reason &&
              formikContext.touched.generalInfos?.reason ? (
                <p className="text-red-500">
                  {formikContext.errors.generalInfos?.reason}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="detailOfReason">Geliş Nedeni Açıklaması:</label>
              <textarea
                name="detailOfReason"
                id="detailOfReason"
                placeholder="Geliş nedenini belirtiniz."
                className={`block w-full p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                  formikContext.errors.generalInfos?.detailOfReason &&
                  formikContext.touched.generalInfos?.detailOfReason
                    ? "border border-red-500"
                    : "border border-secondary-300"
                }`}
                onChange={(event) =>
                  formikContext.setFieldValue(
                    "generalInfos.detailOfReason",
                    event.target.value
                  )
                }
                value={formikContext.values.generalInfos.detailOfReason}
              ></textarea>
              {formikContext.errors.generalInfos?.detailOfReason &&
              formikContext.touched.generalInfos?.detailOfReason ? (
                <p className="text-red-500">
                  {formikContext.errors.generalInfos?.detailOfReason}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="complaint">Şikayet (*):</label>
              <textarea
                name="complaint"
                id="complaint"
                placeholder="Şikayet giriniz."
                className={`block w-full p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                  formikContext.errors.generalInfos?.complaint &&
                  formikContext.touched.generalInfos?.complaint
                    ? "border border-red-500"
                    : "border border-secondary-300"
                }`}
                onChange={(event) =>
                  formikContext.setFieldValue(
                    "generalInfos.complaint",
                    event.target.value
                  )
                }
                value={formikContext.values.generalInfos.complaint}
              ></textarea>
              {formikContext.errors.generalInfos?.complaint &&
              formikContext.touched.generalInfos?.complaint ? (
                <p className="text-red-500">
                  {formikContext.errors.generalInfos?.complaint}
                </p>
              ) : null}
            </div>
            <Input
              type="text"
              id="doctor"
              placeholder="Doktorun adını giriniz."
              wrapperClasses="flex flex-col space-y-2"
              label="Doktor Adı (*):"
              labelClasses="text-secondary-300"
              inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                formikContext.errors.generalInfos?.doctor &&
                formikContext.touched.generalInfos?.doctor
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              onChange={(event) =>
                formikContext.setFieldValue(
                  "generalInfos.doctor",
                  event.target.value
                )
              }
              value={formikContext.values.generalInfos.doctor}
            />
            {formikContext.errors.generalInfos?.doctor &&
            formikContext.touched.generalInfos?.doctor ? (
              <p className="text-red-500">
                {formikContext.errors.generalInfos?.doctor}
              </p>
            ) : null}
            <Input
              type="text"
              id="organisation"
              placeholder="Organizasyon giriniz."
              wrapperClasses="flex flex-col space-y-2"
              label="Organizasyon (*):"
              labelClasses="text-secondary-300"
              inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
                formikContext.errors.generalInfos?.organisation &&
                formikContext.touched.generalInfos?.organisation
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              onChange={(event) =>
                formikContext.setFieldValue(
                  "generalInfos.organisation",
                  event.target.value
                )
              }
              value={formikContext.values.generalInfos.organisation}
            />
            {formikContext.errors.generalInfos?.organisation &&
            formikContext.touched.generalInfos?.organisation ? (
              <p className="text-red-500">
                {formikContext.errors.generalInfos?.organisation}
              </p>
            ) : null}
            <div className="space-y-2 space-x-2">
              <input
                id="isProvided"
                type="checkbox"
                className="outline-none"
                onChange={() =>
                  formikContext.setFieldValue(
                    "generalInfos.isProvided",
                    !formikContext.values.generalInfos.isProvided
                  )
                }
                checked={formikContext.values.generalInfos.isProvided === true}
              ></input>
              <label htmlFor="isProvided" className="select-none">
                Uygun ortam sağlandı
              </label>
            </div>
          </>
        )}
      </div>
    </fieldset>
  );
}

export default GeneralInfo;
