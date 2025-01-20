"use client";
// components
import CarouselCard from "./CarouselCard";
// context api
import { useCarouselContext } from "@/util/hooks/contextAPI/CarouselContext";

export default function CarouselCardContainer() {
  const { bannerData, translateState } = useCarouselContext();

  return (
    <div
      className="flex justify-start items-center relative w-[200%] transition-transform duration-500"
      style={{ transform: `translateX(${translateState}%)` }}
    >
      {bannerData.map((data) => (
        <CarouselCard key={data.dataKey} cardData={data} />
      ))}
    </div>
  );
}
