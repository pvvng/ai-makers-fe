"use client";
// custom hook
import useBannerCarousel from "@/util/hooks/useBannerCarousel";
// components
import BannerCard from "./BannerCard";
import CarouselMoveButton from "./CarouselMoveButton";
// react
import { useState } from "react";
// type
import { ButtonData } from "@/types/carousel";

export default function Carousel() {
  const [translateState, setTranslateState] = useState(0);
  const { moveButtonData } = useBannerCarousel(setTranslateState);

  return (
    <div className="w-10/12 relative overflow-hidden">
      <BannerCardContainer translateState={translateState} />
      <CarouselButtonsContainer
        translateState={translateState}
        moveButtonData={moveButtonData}
      />
    </div>
  );
}

function BannerCardContainer({ translateState }: { translateState: number }) {
  return (
    <div
      className="flex justify-start items-center relative w-[200%] transition-transform duration-500"
      style={{ transform: `translateX(${translateState}%)` }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <BannerCard key={i} data={i} />
      ))}
    </div>
  );
}

function CarouselButtonsContainer({
  translateState,
  moveButtonData,
}: {
  translateState: number;
  moveButtonData: ButtonData;
}) {
  return moveButtonData.map((data) => (
    <CarouselMoveButton
      key={data.type}
      translateState={translateState}
      type={data.type}
      onClick={data.handler}
    />
  ));
}
