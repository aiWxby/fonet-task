import React from "react";
import PatientInfoForm from "./PatientInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";
import ReportSummary from "./ReportSummary";
import FormTriggers from "./FormTriggers";

import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { addReport } from "../../app/Store/reports/reports";
import { ReportTypes } from "../../app/Helpers/Types/TypeDefinitions";
import { reportFormValidations } from "../../app/Helpers/Forms/FormValidations";
import { useNavigate } from "react-router-dom";

const initialValues: ReportTypes = {
  reportInfos: {
    patientInfos: {
      name: "",
      surname: "",
      age: 0,
      gender: null,
      bloodGroup: null,
      rh: null,
    },
    generalInfos: {
      isAssault: null,
      reason: null,
      detailOfReason: "",
      complaint: "",
      doctor: "",
      organisation: "",
      peopleInRoom: null,
      isProvided: false,
    },
  },
};

function Index() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  return (
    <>
      <p className="mb-3 text-red-500">
        (*) ile işaretlenen alanların belirtilmesi <b>zorunludur</b>!
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={reportFormValidations}
        onSubmit={(values: ReportTypes) => {
          dispatch(addReport(values));
          setTimeout(() => {
            redirect("/reports");
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-wrap gap-5">
              <div className="w-full p-5 rounded-md shadow-lg bg-secondary-700 space-y-5">
                <PatientInfoForm />
                <GeneralInfoForm />
                <FormTriggers isSubmitting={isSubmitting} />
              </div>
              <ReportSummary />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Index;
