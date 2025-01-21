import { area } from "@/constants/joinUs/area";

export const areaKeys = Object.keys(area);

export const getCities = (selectedArea: string) => {
  return Object.keys(area[selectedArea]);
};

export const getDistricts = (selectedArea: string, selectedCity: string) => {
  return area[selectedArea][selectedCity];
};