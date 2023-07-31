import { useFormikContext } from "formik";
import { ReportTypes } from "../../app/Helpers/Types/TypeDefinitions";

function ReportSummary() {
  const formikContext = useFormikContext<ReportTypes>();
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
              {`${formikContext.values.reportInfos.patientInfos.name} ${formikContext.values.reportInfos.patientInfos.surname}`}
            </span>
          </p>
          <p>
            Yaş:{" "}
            <span className="text-primary-500">
              {formikContext.values.reportInfos.patientInfos.age > 0 &&
                formikContext.values.reportInfos.patientInfos.age}
            </span>
          </p>
          <p>
            Cinsiyet:{" "}
            <span className="text-primary-500">
              {formikContext.values.reportInfos.patientInfos.gender}
            </span>
          </p>
          <p>
            Kan grubu:{" "}
            <span className="text-primary-500">
              {formikContext.values.reportInfos.patientInfos.bloodGroup}{" "}
              {formikContext.values.reportInfos.patientInfos.rh}
            </span>
          </p>
        </div>
        <div className="space-y-2">
          <p>
            {formikContext.values.reportInfos.generalInfos.isAssault !==
              null && (
              <>
                Rapor, darp raporu olarak{" "}
                <span className="text-primary-500">
                  {formikContext.values.reportInfos.generalInfos.isAssault
                    ? "belirtilmiştir"
                    : "belirtilmemiştir"}
                </span>
                .
              </>
            )}
            {formikContext.values.reportInfos.generalInfos.doctor && (
              <>
                {" "}
                {formikContext.values.reportInfos.patientInfos.name}{" "}
                {formikContext.values.reportInfos.patientInfos.surname},
              </>
            )}
            {formikContext.values.reportInfos.generalInfos.doctor && (
              <>
                {" "}
                <span className="text-primary-500">
                  {formikContext.values.reportInfos.generalInfos.doctor}
                </span>{" "}
                tarafından muayene edilmiştir.
              </>
            )}
          </p>
          <p>
            {formikContext.values.reportInfos.generalInfos.organisation && (
              <>
                Organizasyon:{" "}
                <span className="text-primary-500">
                  {formikContext.values.reportInfos.generalInfos.organisation}
                </span>
              </>
            )}
          </p>
          <p>
            Geliş nedeni:{" "}
            <span className="text-primary-500">
              {formikContext.values.reportInfos.generalInfos.reason}
            </span>
          </p>
          <div className="my-3 p-3 rounded-md bg-secondary-800">
            <span className="text-primary-500">Geliş detayı:</span>{" "}
            <p>
              {formikContext.values.reportInfos.generalInfos.detailOfReason}
            </p>
          </div>
          <div className="my-3 p-3 rounded-md bg-secondary-800">
            <span className="text-primary-500">Şikayet:</span>{" "}
            <p>{formikContext.values.reportInfos.generalInfos.complaint}</p>
          </div>
          <div className="my-3 p-3 rounded-md bg-secondary-800">
            <span className="text-primary-500">Odada bulunanlar:</span>{" "}
            {formikContext.values.reportInfos.generalInfos.peopleInRoom?.map(
              (data) => {
                return <p key={data}>{data}</p>;
              }
            )}
          </div>
          {formikContext.values.reportInfos.generalInfos.isAssault !== null && (
            <p>
              Uygun ortam{" "}
              <span className="text-primary-500">
                {formikContext.values.reportInfos.generalInfos.isProvided
                  ? "sağlanmıştır"
                  : "sağlanamamıştır"}
              </span>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReportSummary;
