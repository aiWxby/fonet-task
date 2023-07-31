import { Genders, BloodGroups, RhTypes, Reasons } from "../Enums/EnumDefinitions";

export const genderValidation = (value: string) => {
  const genderValue = value as Genders;
  if (Object.values(Genders).includes(genderValue)) {
    return true;
  }
  return false;
};

export const bloodGroupValidation = (value: string) => {
  const bloodGroupValue = value as BloodGroups;
  if (Object.values(BloodGroups).includes(bloodGroupValue)) {
    return true;
  }
  return false;
};

export const rhTypeValidation = (value: string) => {
  const rhTypeValue = value as RhTypes;
  if (Object.values(RhTypes).includes(rhTypeValue)) {
    return true;
  }
  return false;
};

export const reasonValidation = (value: string) => {
  const reasonValue = value as Reasons;
  if (Object.values(Reasons).includes(reasonValue)) {
    return true;
  }
  return false;
};
