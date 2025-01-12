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
// mock-up-data
import { cardData } from "@/mock-up/bannerCardData";

export default function Carousel() {
  const [translateState, setTranslateState] = useState(0);
  const { moveButtonData } = useBannerCarousel(setTranslateState);

  return (
    <div className="w-10/12 relative">
      <div className="w-full overflow-hidden">
        <BannerCardContainer translateState={translateState} />
      </div>
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
      {cardData.map((data, i) => (
        <BannerCard key={data.title + data.content} {...data} />
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
