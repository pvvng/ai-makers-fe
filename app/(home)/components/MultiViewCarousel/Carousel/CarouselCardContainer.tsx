"use client";
// store
import { useBannerCarouselStore } from "@/store/useBannerCarouselStore";
// components
import CarouselCard from "./CarouselCard";
// mock-up
import { CarouselData } from "@/types/carousel";

export default function CarouselCardContainer({
  bannerData,
}: {
  bannerData: CarouselData[];
}) {
  const { translateState } = useBannerCarouselStore();

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
