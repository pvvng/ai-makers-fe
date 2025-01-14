import { create } from "zustand";

const MAX_LOCATION_SELECT_COUNT = 5;

export type SelectType = "city" | "area" | "district";

interface LocationState {
  selectedDistricts: string[];
  selectedArea: string | null;
  selectedCity: string | null;
  handleDistrictSelect: (district: string) => void;
  clearDistrictSelect: () => void;
  areaHandler: (key: string) => void;
  citiesHandler: (city: string) => void;
  selectButtonColor: (value: string, type: SelectType) => string;
}

const useLocationStore = create<LocationState>((set, get) => ({
  selectedDistricts: [],
  selectedArea: null,
  selectedCity: null,

  handleDistrictSelect: (district) =>
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

  selectButtonColor: (value, type) => {
    const { selectedCity, selectedArea, selectedDistricts } = get();

    if (type === "city") {
      return selectedCity === value ? "bg-blue-500 text-white" : "";
    }

    if (type === "area") {
      return selectedArea === value ? "bg-blue-500 text-white" : "";
    }

    if (type === "district") {
      return selectedDistricts.includes(value) ? "bg-blue-500 text-white" : "";
    }

    return "";
  },
}));

export default useLocationStore;
