"use client";
// store
import { useBannerCarouselStore } from "@/store/useBannerCarouselStore";
// components
import CarouselMoveButton from "./CarouselMoveButton";
import { ButtonData } from "@/types/carousel";

export default function CarouselButtonsContainer() {
  const { translateState, handleLeftClick, handleRightClick } =
    useBannerCarouselStore();

  const moveButtonData : ButtonData = [
    { type: "left", handler: handleLeftClick },
    { type: "right", handler: handleRightClick },
  ];

  return moveButtonData.map((data) => (
    <CarouselMoveButton
      key={data.type}
      translateState={translateState}
      type={data.type}
      onClick={data.handler}
    />
  ));
}
