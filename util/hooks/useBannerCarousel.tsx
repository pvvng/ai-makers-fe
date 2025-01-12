"use client";
// constant
import {
  MAX_CAROUSEL_NUMBER,
  MIN_CAROUSEL_NUMBER,
} from "@/constants/bannerCarousel";
// type
import { ButtonData } from "@/types/carousel";
import { Dispatch, SetStateAction } from "react";

export default function useBannerCarousel(
  setTranslateState: Dispatch<SetStateAction<number>>
) {
  const handleLeftClick = () => {
    setTranslateState((prev) =>
      Math.min(prev + MAX_CAROUSEL_NUMBER, MIN_CAROUSEL_NUMBER)
    );
  };

  const handleRightClick = () => {
    setTranslateState((prev) =>
      Math.max(prev - MAX_CAROUSEL_NUMBER, -MAX_CAROUSEL_NUMBER)
    );
  };

  const moveButtonData: ButtonData = [
    { handler: handleLeftClick, type: "left" },
    { handler: handleRightClick, type: "right" },
  ];

  return { moveButtonData, handleLeftClick, handleRightClick };
}
