import { Reasons, Genders, RhTypes, BloodGroups, PeopleInRoom } from "../Enums/EnumDefinitions";
import {
  DualOptionDataType,
  DualOptionItemType,
} from "../Types/TypeDefinitions";

const fillRelatedData = (
  enumObj: object,
  arrayToFill: Array<DualOptionItemType>
): void => {
  Object.keys(enumObj).forEach((element) => {
    arrayToFill.push({
      value: enumObj[element as keyof typeof enumObj],
      label: enumObj[element as keyof typeof enumObj],
    });
  });
};

const reasons: Array<DualOptionItemType> = [];
fillRelatedData(Reasons, reasons);

const genders: Array<DualOptionItemType> = [];
fillRelatedData(Genders, genders);

const rhTypes: Array<DualOptionItemType> = [];
fillRelatedData(RhTypes, rhTypes);

const bloodGroups: Array<DualOptionItemType> = [];
fillRelatedData(BloodGroups, bloodGroups);

const peopleInRoom: Array<DualOptionItemType> = [];
fillRelatedData(PeopleInRoom, peopleInRoom);

export const formDataList: DualOptionDataType = {
  genders,
  rhTypes,
  bloodGroups,
  reasons,
  peopleInRoom,
  isAssault: [
    {
      value: "true",
      label: "Evet",
    },
    {
      value: "",
      label: "Hayır",
    },
  ],
};
