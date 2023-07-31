import React, { useEffect, useState } from "react";
import { RootState } from "../../app/Store/store";
import { useSelector } from "react-redux";

import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { concatenatedReportTypes } from "../../app/Helpers/Types/TypeDefinitions";
import { PeopleInRoom } from "../../app/Helpers/Enums/EnumDefinitions";

const columns = [
  {
    name: "name",
    label: "İsim",
  },
  {
    name: "surname",
    label: "Soyisim",
  },
  {
    name: "age",
    label: "Yaş",
  },
  {
    name: "gender",
    label: "Cinsiyet",
  },
  {
    name: "bloodGroup",
    label: "Kan Grubu",
  },
  {
    name: "rh",
    label: "Rh Değeri",
  },
  {
    name: "isAssault",
    label: "Darp Raporu",
    options: {
      customBodyRender: (isAssault: boolean) => (isAssault ? "Evet" : "Hayır"),
    },
  },
  {
    name: "reason",
    label: "Geliş Nedeni",
  },
  {
    name: "detailOfReason",
    label: "Geliş Nedeni (Açıklama)",
  },
  {
    name: "complaint",
    label: "Şikayet",
  },
  {
    name: "doctor",
    label: "Doktor",
  },
  {
    name: "organisation",
    label: "Organizasyon",
  },
  {
    name: "peopleInRoom",
    label: "Odada Bulunanlar",
    options: {
      customBodyRender: (value: Array<PeopleInRoom>) => value.join(", "),
    },
  },
  {
    name: "isProvided",
    label: "Uygun Ortam",
    options: {
      customBodyRender: (isApproved: boolean) =>
        isApproved ? "Evet" : "Hayır",
    },
  },
];

const getMuiTheme = () =>
  createTheme({
    palette: {
      mode: "dark",
    },
  });

function DataTable() {
  const reports = useSelector((state: RootState) => state.reports.value);
  const [data, setData] = useState<concatenatedReportTypes[]>([]);

  useEffect(() => {
    const concatenatedData: Array<concatenatedReportTypes> = [];

    reports.forEach((report) => {
      concatenatedData.push({
        ...report.reportInfos.patientInfos,
        ...report.reportInfos.generalInfos,
      });
    });

    setData(concatenatedData);
  }, [reports]);

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={"Hasta Rapor Dökümü"}
        data={data}
        columns={columns}
        options={{
          selectableRows: undefined,
          print: false,
          search: false,
          download: false,
        }}
      />
    </ThemeProvider>
  );
}

export default DataTable;
