import { create } from "zustand";

const MAX_LOCATION_SELECT_COUNT = 5;

interface LocationState {
  selectedDistricts: string[];
  selectedArea: string | null;
  selectedCity: string | null;
  handleDistrictSelect: (district: string) => void;
  clearDistrictSelect: () => void;
  areaHandler: (key: string) => void;
  citiesHandler: (city: string) => void;
}

const useLocationStore = create<LocationState>((set) => ({
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
}));

export default useLocationStore;
