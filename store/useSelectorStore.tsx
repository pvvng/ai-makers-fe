import { create } from "zustand";

interface SelectorStore {
  selectedData: {
    language: string[];
    day: string[];
  };
  addItem: (type: "language" | "day", item: string) => void;
  removeItem: (type: "language" | "day", item: string) => void;
}

export const useSelectorStore = create<SelectorStore>((set) => ({
  selectedData: {
    language: [],
    day: [],
  },
  addItem: (type, item) =>
    set((state) => ({
      selectedData: {
        ...state.selectedData,
        [type]: [...state.selectedData[type], item],
      },
    })),
  removeItem: (type, item) =>
    set((state) => ({
      selectedData: {
        ...state.selectedData,
        [type]: state.selectedData[type].filter((i) => i !== item),
      },
    })),
}));
