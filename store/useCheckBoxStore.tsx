import { create } from "zustand";

interface CheckboxStore {
  checkedStates: { rememberId: boolean; autoLogin: boolean };
  setChecked: (
    key: keyof CheckboxStore["checkedStates"],
    value: boolean
  ) => void;
  toggleChecked: (key: keyof CheckboxStore["checkedStates"]) => void;
  resetChecked: () => void;
}

const useCheckboxStore = create<CheckboxStore>((set) => ({
  checkedStates: { rememberId: false, autoLogin: false },
  setChecked: (key, value) =>
    set((state) => ({
      checkedStates: { ...state.checkedStates, [key]: value },
    })),
  toggleChecked: (key) =>
    set((state) => ({
      checkedStates: {
        ...state.checkedStates,
        [key]: !state.checkedStates[key],
      },
    })),
  resetChecked: () =>
    set(() => ({
      checkedStates: { rememberId: false, autoLogin: false },
    })),
}));

export default useCheckboxStore;
