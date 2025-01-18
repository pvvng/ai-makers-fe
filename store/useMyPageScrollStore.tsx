import { create } from "zustand";

interface ScrollStore {
  sections: Record<string, React.RefObject<HTMLDivElement | null>>;
  setSectionRef: (
    label: string,
    ref: React.RefObject<HTMLDivElement | null>
  ) => void;
  activeSection: string;
  setActiveSection: (label: string) => void;
}

export const useMyPageScrollStore = create<ScrollStore>((set) => ({
  sections: {},
  activeSection: "",
  setSectionRef: (label, ref) =>
    set((state) => ({
      sections: { ...state.sections, [label]: ref },
    })),
  setActiveSection: (label) => set(() => ({ activeSection: label })),
}));
