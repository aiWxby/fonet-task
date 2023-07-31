import * as Yup from "yup";
import {
  bloodGroupValidation,
  genderValidation,
  reasonValidation,
  rhTypeValidation,
} from "./CustomValidations";

const patientInfosValidations = Yup.object().shape({
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
    .test("is-valid-gender", "Geçersiz cinsiyet değeri.", genderValidation),
  bloodGroup: Yup.string()
    .required("Lütfen kan grubu belirtiniz.")
    .test(
      "is-valid-blood-group",
      "Geçersiz kan grubu değeri.",
      bloodGroupValidation
    ),
  rh: Yup.string()
    .required("Lütfen rh değeri belirtiniz.")
    .test("is-valid-rh-type", "Geçersiz RH tipi değeri.", rhTypeValidation),
});

const generalInfosValidations = Yup.object().shape({
  isAssault: Yup.boolean().required(
    "Lütfen darp raporu olup olmadığını belirtiniz."
  ),
  reason: Yup.string()
    .required("Lütfen geliş nedeni belirtiniz")
    .test("is-valid-reason", "Geçersiz geliş nedeni değeri.", reasonValidation),
  detailOfReason: Yup.string()
    .min(25, "Minimum 25 karakter girmelisiniz.")
    .nullable(),
  complaint: Yup.string()
    .required("Lütfen hastanın şikayetini belirtin")
    .min(25, "Minimum 25 karakter girmelisiniz."),
  doctor: Yup.string().required("Lütfen ilgili doktoru tanımlayınız."),
  organisation: Yup.string().required(
    "Lütfen ilgili organizasyonu tanımlayınız."
  ),
  peopleInRoom: Yup.array().min(1,
    "Lütfen odada bulunanları tanımlayınız."
  ),
  isProvided: Yup.boolean().required(
    "Lütfen uygun ortamın sağlanıp sağlanamadığını belirtiniz."
  ),
});

export const reportFormValidations = Yup.object().shape({
  reportInfos: Yup.object({
    patientInfos: patientInfosValidations,
    generalInfos: generalInfosValidations,
  }),
});
