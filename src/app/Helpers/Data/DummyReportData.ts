import {
  Genders,
  BloodGroups,
  RhTypes,
  Reasons,
  PeopleInRoom,
} from "../Enums/EnumDefinitions";
import { ReportTypes } from "../Types/TypeDefinitions";

export const dummyDeports: Array<ReportTypes> = [
  {
    reportInfos: {
      patientInfos: {
        name: "Ebru",
        surname: "Elibol",
        age: 26,
        gender: Genders.Female,
        bloodGroup: BloodGroups.A,
        rh: RhTypes.RhNegative,
      },
      generalInfos: {
        isAssault: false,
        reason: Reasons.humanRights,
        detailOfReason: "Detay",
        complaint: "Detay",
        doctor: "Detay",
        organisation: "Organizasyon",
        peopleInRoom: [
          PeopleInRoom.doctor,
          PeopleInRoom.staff,
          PeopleInRoom.other,
        ],
        isProvided: true,
      },
    },
  },
  {
    reportInfos: {
      patientInfos: {
        name: "Ertuğrul",
        surname: "Elibol",
        age: 23,
        gender: Genders.Male,
        bloodGroup: BloodGroups.A,
        rh: RhTypes.RhPositive,
      },
      generalInfos: {
        isAssault: true,
        reason: Reasons.suicide,
        detailOfReason: "",
        complaint: "Detay",
        doctor: "Detay",
        organisation: "Organizasyon",
        peopleInRoom: [PeopleInRoom.doctor, PeopleInRoom.staff],
        isProvided: true,
      },
    },
  },
  {
    reportInfos: {
      patientInfos: {
        name: "Ertuğrul",
        surname: "Elibol",
        age: 23,
        gender: Genders.Male,
        bloodGroup: BloodGroups.A,
        rh: RhTypes.RhPositive,
      },
      generalInfos: {
        isAssault: true,
        reason: Reasons.suicide,
        detailOfReason: "",
        complaint: "Detay",
        doctor: "Detay",
        organisation: "Detay",
        peopleInRoom: [PeopleInRoom.doctor, PeopleInRoom.staff],
        isProvided: true,
      },
    },
  },
];
