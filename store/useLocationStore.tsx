import { create } from "zustand";

const MAX_LOCATION_SELECT_COUNT = 5;

export type SelectType = "city" | "area" | "district";

interface LocationState {
  selectedDistricts: string[];
  selectedArea: string | null;
  selectedCity: string | null;
  clearDistrictSelect: () => void;
  areaHandler: (key: string) => void;
  citiesHandler: (city: string) => void;
  districtHandler: (district: string) => void;
  getSelectedButtonColor: (value: string, type: SelectType) => boolean;
}

const useLocationStore = create<LocationState>((set, get) => ({
  selectedDistricts: [],
  selectedArea: null,
  selectedCity: null,

  clearDistrictSelect: () =>
    set(() => ({
      selectedDistricts: [],
    })),

  areaHandler: (key) =>
    set(() => ({
      selectedArea: key,
      selectedCity: null,
      selectedDistricts: [],
    })),

  citiesHandler: (city) =>
    set(() => ({
      selectedCity: city,
      selectedDistricts: [],
    })),

  districtHandler: (district) =>
    set((state) => {
      if (state.selectedDistricts.includes(district)) {
        return {
          selectedDistricts: state.selectedDistricts.filter(
            (d) => d !== district
          ),
        };
      }

      if (state.selectedDistricts.length < MAX_LOCATION_SELECT_COUNT) {
        return {
          selectedDistricts: [...state.selectedDistricts, district],
        };
      }

      return {};
    }),
    
  getSelectedButtonColor: (value, type) => {
    const { selectedCity, selectedArea, selectedDistricts } = get();

    if (type === "city") {
      return selectedCity === value;
    }

    if (type === "area") {
      return selectedArea === value;
    }

    if (type === "district") {
      return selectedDistricts.includes(value);
    }

    return false;
  },
}));

export default useLocationStore;
