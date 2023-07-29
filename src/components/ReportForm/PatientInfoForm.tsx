import React from "react";
import { FormikDataTypes } from ".";
import { useFormikContext } from "formik";
import Input from "../Input";

function PatientInfo() {
  const formikContext = useFormikContext<FormikDataTypes>();
  return (
    <fieldset className="p-5 border border-solid rounded-md border-secondary-300">
      <legend className="px-2">Hasta Bilgileri</legend>
      <div className="space-y-2">
        <Input
          type="text"
          id="name"
          placeholder="Adınızı yazınız."
          wrapperClasses="flex flex-col space-y-2"
          label="Adınız (*):"
          labelClasses="text-secondary-300"
          inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
            formikContext.errors.patientInfos?.name &&
            formikContext.touched.patientInfos?.name
              ? "border border-red-500"
              : "border border-secondary-300"
          }`}
          onChange={(event) =>
            formikContext.setFieldValue("patientInfos.name", event.target.value)
          }
          value={formikContext.values.patientInfos.name}
        />
        {formikContext.errors.patientInfos?.name &&
        formikContext.touched.patientInfos?.name ? (
          <p className="text-red-500">
            {formikContext.errors.patientInfos?.name}
          </p>
        ) : null}
        <Input
          type="text"
          id="surname"
          placeholder="Soyadınızı yazınız."
          wrapperClasses="flex flex-col space-y-2"
          label="Soyadınız (*):"
          labelClasses=" text-secondary-300"
          inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
            formikContext.errors.patientInfos?.surname &&
            formikContext.touched.patientInfos?.surname
              ? "border border-red-500"
              : "border border-secondary-300"
          }`}
          onChange={(event) =>
            formikContext.setFieldValue(
              "patientInfos.surname",
              event.target.value
            )
          }
          value={formikContext.values.patientInfos.surname}
        />
        {formikContext.errors.patientInfos?.surname &&
        formikContext.touched.patientInfos?.surname ? (
          <p className="text-red-500">
            {formikContext.errors.patientInfos?.surname}
          </p>
        ) : null}
        <Input
          type="number"
          id="age"
          placeholder="Yaşınızı yazınız."
          wrapperClasses="flex flex-col space-y-2"
          label="Yaşınız (*):"
          labelClasses="text-secondary-300"
          inputClasses={`p-1.5 rounded-md outline-none bg-secondary-700 text-gray-400 focus:bg-secondary-800 focus:pl-4 transition-all ${
            formikContext.errors.patientInfos?.age &&
            formikContext.touched.patientInfos?.age
              ? "border border-red-500"
              : "border border-secondary-300"
          }`}
          onChange={(event) =>
            formikContext.setFieldValue("patientInfos.age", event.target.value)
          }
          value={formikContext.values.patientInfos.age}
        />
        {formikContext.errors.patientInfos?.age &&
        formikContext.touched.patientInfos?.age ? (
          <p className="text-red-500">
            {formikContext.errors.patientInfos?.age}
          </p>
        ) : null}
        <div className="text-secondary-300 space-y-2">
          <label htmlFor="gender">Cinsiyetiniz (*):</label>
          <select
            name="gender"
            id="gender"
            className={`block min-w-[10ch] p-1.5 rounded-md text-gray-400 bg-secondary-700 focus:bg-secondary-800 ${
              formikContext.errors.patientInfos?.gender &&
              formikContext.touched.patientInfos?.gender
                ? "border border-red-500"
                : "border border-secondary-300"
            }`}
            onChange={(event) =>
              formikContext.setFieldValue(
                "patientInfos.gender",
                event.target.value
              )
            }
            value={formikContext.values.patientInfos.gender}
          >
            <option value="none" selected>
              Seç
            </option>
            <option value="Kadın">Kadın</option>
            <option value="Erkek">Erkek</option>
            <option value="Diğer">Diğer</option>
          </select>
          {formikContext.errors.patientInfos?.gender &&
          formikContext.touched.patientInfos?.gender ? (
            <p className="text-red-500">
              {formikContext.errors.patientInfos?.gender}
            </p>
          ) : null}
        </div>
        <div className="flex space-x-10">
          {/* Kan grubu */}
          <div className="text-secondary-300 space-y-2">
            <label htmlFor="bloodGroup">Kan Grubunuz (*):</label>
            <select
              name="bloodGroup"
              id="bloodGroup"
              className={`block min-w-[10ch] p-1.5 rounded-md text-gray-400 bg-secondary-700 focus:bg-secondary-800 ${
                formikContext.errors.patientInfos?.gender &&
                formikContext.touched.patientInfos?.gender
                  ? "border border-red-500"
                  : "border border-secondary-300"
              }`}
              onChange={(event) =>
                formikContext.setFieldValue(
                  "patientInfos.bloodGroup",
                  event.target.value
                )
              }
              value={formikContext.values.patientInfos.bloodGroup}
            >
              <option value="none" selected>
                Seç
              </option>
              <option value="0">0</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
            </select>
            {formikContext.errors.patientInfos?.bloodGroup &&
            formikContext.touched.patientInfos?.bloodGroup ? (
              <p className="text-red-500">
                {formikContext.errors.patientInfos?.bloodGroup}
              </p>
            ) : null}
          </div>
          {/* RH Değeri */}
          <div className="text-secondary-300 space-y-2">
            <label htmlFor="rh">Rh (*):</label>
            <div className="flex flex-col">
              <label className="text-gray-400">
                <input
                  type="radio"
                  name="rh"
                  id="Rh-"
                  value="Rh-"
                  onChange={(event) =>
                    formikContext.setFieldValue(
                      "patientInfos.rh",
                      event.target.value
                    )
                  }
                  checked={formikContext.values.patientInfos.rh === "Rh-"}
                  className="mr-2"
                />
                Negatif (-)
              </label>
              <label className="text-gray-400">
                <input
                  type="radio"
                  name="rh"
                  id="Rh+"
                  value="Rh+"
                  onChange={(event) =>
                    formikContext.setFieldValue(
                      "patientInfos.rh",
                      event.target.value
                    )
                  }
                  checked={formikContext.values.patientInfos.rh === "Rh+"}
                  className="mr-2"
                />
                Pozitif (+)
              </label>
            </div>
            {formikContext.errors.patientInfos?.rh &&
            formikContext.touched.patientInfos?.rh ? (
              <p className="text-red-500">
                {formikContext.errors.patientInfos?.rh}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default PatientInfo;
