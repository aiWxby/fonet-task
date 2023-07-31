import {
  Genders,
  BloodGroups,
  RhTypes,
  Reasons,
  PeopleInRoom,
} from "../Enums/EnumDefinitions";

// ? For REPORTS
export type ReportTypes = {
  reportInfos: {
    patientInfos: {
      name: string;
      surname: string;
      age: number;
      gender: Genders | null;
      bloodGroup: BloodGroups | null;
      rh: RhTypes | null;
    };
    generalInfos: {
      isAssault: boolean | null;
      reason: Reasons | null;
      detailOfReason: string;
      complaint: string;
      doctor: string;
      organisation: string;
      peopleInRoom: Array<PeopleInRoom> | null;
      isProvided: boolean;
    };
  };
};

export type concatenatedReportTypes = {
  name: string;
  surname: string;
  age: number;
  gender: Genders;
  bloodGroup: BloodGroups;
  rh: RhTypes;
  isAssault: boolean;
  reason: Reasons;
  detailOfReason: string;
  complaint: string;
  doctor: string;
  organisation: string;
  isProvided: boolean;
};

// ? For SELECTBOXES
export type DualOptionItemType = {
  value: string;
  label: string;
};

export type DualOptionDataType = {
  [x: string]: Array<DualOptionItemType>;
};
