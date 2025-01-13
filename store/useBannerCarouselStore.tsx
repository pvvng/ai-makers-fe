import { create } from "zustand";
// constants
import {
  MAX_CAROUSEL_NUMBER,
  MIN_CAROUSEL_NUMBER,
} from "@/constants/bannerCarousel";

interface BannerCarouselState {
  translateState: number;
  handleLeftClick: () => void;
  handleRightClick: () => void;
}

export const useBannerCarouselStore = create<BannerCarouselState>((set) => ({
  translateState: MIN_CAROUSEL_NUMBER,
  handleLeftClick: () =>
    set((state) => ({
      translateState: Math.min(
        state.translateState + MAX_CAROUSEL_NUMBER,
        MIN_CAROUSEL_NUMBER
      ),
    })),
  handleRightClick: () =>
    set((state) => ({
      translateState: Math.max(
        state.translateState - MAX_CAROUSEL_NUMBER,
        -MAX_CAROUSEL_NUMBER
      ),
    })),
}));
