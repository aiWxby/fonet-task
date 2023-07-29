import React from "react";
import PatientInfoForm from "./PatientInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";
import ReportSummary from "./ReportSummary";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export type FormikDataTypes = {
  patientInfos: {
    name: string;
    surname: string;
    age: number;
    gender: string;
    bloodGroup: string;
    rh: string;
  };
  generalInfos: {
    isAssault: boolean | null;
    reason: string;
    detailOfReason: string;
    complaint: string;
    doctor: string;
    organisation: string;
    isProvided: boolean;
  };
};

const validationSchema = Yup.object().shape({
  patientInfos: Yup.object().shape({
    name: Yup.string()
      .min(3, "Lütfen geçerli bir isim giriniz.")
      .required("Lütfen adınızı giriniz."),
    surname: Yup.string()
      .max(20, "Lütfen geçerli bir soyisim giriniz.")
      .required("Lütfen soyadınızı giriniz."),
    age: Yup.number()
      .min(1, `1 yaşından büyük olmalısınız.`)
      .max(120, "120 yaşından küçük olmalısınız.")
      .required("Lütfen yaşınızı giriniz"),
    gender: Yup.string()
      .required("Lütfen cinsiyet belirtiniz.")
      .oneOf(
        ["Kadın", "Erkek", "Diğer"],
        "Lütfen geçerli bir cinsiyet belirtiniz."
      ),
    bloodGroup: Yup.string()
      .required("Lütfen kan grubu belirtiniz.")
      .oneOf(["0", "A", "B", "AB"], "Lütfen geçerli bir kan grubu belirtiniz."),
    rh: Yup.string()
      .required("Lütfen rh değeri belirtiniz.")
      .oneOf(["Rh-", "Rh+"], "Lütfen geçerli bir rh değeri belirtiniz."),
  }),
  generalInfos: Yup.object().shape({
    isAssault: Yup.boolean().required("Lütfen darp raporu bilgisi giriniz."),
    reason: Yup.string()
      .required("Lütfen geliş nedeni belirtiniz")
      .oneOf(["test"], "Lütfen geçerli bir geliş nedeni belirtiniz."),
    detailOfReason: Yup.string().min(
      25,
      "Minimum 25 karakter girmelisiniz."
    ),
    complaint: Yup.string()
      .required("Lütfen hastanın şikayetini belirtin")
      .min(25, "Minimum 25 karakter girmelisiniz."),
    doctor: Yup.string().required("Lütfen ilgili doktoru tanımlayınız."),
    organisation: Yup.string().required(
      "Lütfen ilgili organizasyonu tanımlayınız."
    ),
    isProvided: Yup.boolean().required(
      "Lütfen uygun ortamın sağlanıp sağlanamadığını belirtiniz."
    ),
  }),
});

function Index() {
  return (
    <>
      <p className="mb-3 text-red-500">
        (*) ile işaretlenen alanların belirtilmesi <b>zorunludur</b>!
      </p>
      <Formik
        initialValues={{
          patientInfos: {
            name: "",
            surname: "",
            age: 0,
            gender: "",
            bloodGroup: "",
            rh: "",
          },
          generalInfos: {
            isAssault: null,
            reason: "",
            detailOfReason: "",
            complaint: "",
            doctor: "",
            organisation: "",
            isProvided: false,
          },
        }}
        validationSchema={validationSchema}
        onSubmit={(values: FormikDataTypes) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="flex flex-row gap-5">
            <div className="w-full p-5 rounded-md shadow-lg bg-secondary-700 space-y-5">
              <PatientInfoForm />
              <GeneralInfoForm />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-8 py-1.5 rounded-lg bg-secondary-800 shadow-md hover:bg-blue-600 hover:text-gray-200 transition-all"
                >
                  Gönder
                </button>
                <button
                  type="reset"
                  className="px-8 py-1.5 rounded-lg bg-red-500 shadow-md hover:text-gray-200 transition-all"
                >
                  Sıfırla
                </button>
              </div>
            </div>
            <ReportSummary />
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Index;
