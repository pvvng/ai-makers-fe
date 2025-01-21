"use client";
// context api
import { useCarouselContext } from "@/util/hooks/contextAPI/CarouselContext";
// components
import CarouselMoveButton from "./CarouselMoveButton";
// type
import { ButtonData } from "@/types/carousel";

export default function CarouselButtonsContainer() {
  const { translateState, handleLeftClick, handleRightClick } =
    useCarouselContext();

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
