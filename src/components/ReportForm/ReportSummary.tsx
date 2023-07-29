import React from "react";
import { useFormikContext } from "formik";
import { FormikDataTypes } from ".";

function ReportSummary() {
  const formikContext = useFormikContext<FormikDataTypes>();
  return (
    <div className="sticky top-2.5 h-fit w-full p-5 cursor-default rounded-md shadow-lg border-b-2 border-secondary-300 bg-secondary-700">
      <h3 className="mb-3 text-2xl text-center text-primary-500">
        Rapor Özeti
      </h3>
      <div className="text-secondary-300 space-y-5">
        <div>
          <p>
            Hasta:
            <span className="text-primary-500">
              {" "}
              {`${formikContext.values.patientInfos.name} ${formikContext.values.patientInfos.surname}`}
            </span>
          </p>
          <p>
            Yaş:{" "}
            <span className="text-primary-500">
              {formikContext.values.patientInfos.age > 0 &&
                formikContext.values.patientInfos.age}
            </span>
          </p>
          <p>
            Cinsiyet:{" "}
            <span className="text-primary-500">
              {formikContext.values.patientInfos.gender}
            </span>
          </p>
          <p>
            Kan grubu:{" "}
            <span className="text-primary-500">
              {formikContext.values.patientInfos.bloodGroup}{" "}
              {formikContext.values.patientInfos.rh}
            </span>
          </p>
        </div>
        <div>
          <p className="mb-4">
            {formikContext.values.generalInfos.isAssault !== null && (
              <>
                Rapor, darp raporu olarak{" "}
                <span className="text-primary-500">
                  {formikContext.values.generalInfos.isAssault
                    ? "belirtilmiştir"
                    : "belirtilmemiştir"}
                </span>
                .
              </>
            )}
            { formikContext.values.generalInfos.doctor && (
                <>
                  {" "}
                  {formikContext.values.patientInfos.name}{" "}
                  {formikContext.values.patientInfos.surname},
                </>
              )}{" "}
            {formikContext.values.generalInfos.organisation && (
              <>
                <span className="text-primary-500">
                  {formikContext.values.generalInfos.organisation}
                </span>
                'nde{" "}
              </>
            )}
            {formikContext.values.generalInfos.doctor && (
              <>
                <span className="text-primary-500">
                  {formikContext.values.generalInfos.doctor}
                </span>{" "}
                tarafından muayene edilmiştir.
              </>
            )}
          </p>
          <p>
            Geliş nedeni:{" "}
            <span className="text-primary-500">
              {formikContext.values.generalInfos.reason}
            </span>
          </p>
          <p className="my-3 p-3 rounded-md bg-secondary-800">
            <span className="text-primary-500">Geliş detayı:</span>{" "}
            {formikContext.values.generalInfos.detailOfReason}
          </p>
          <p className="my-3 p-3 rounded-md bg-secondary-800">
            <span className="text-primary-500">Şikayet:</span>{" "}
            {formikContext.values.generalInfos.complaint}
          </p>
          <p>
            Uygun ortam{" "}
            <span className="text-primary-500">
              {formikContext.values.generalInfos.isProvided
                ? "sağlanmıştır."
                : "sağlanamamıştır"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportSummary;
