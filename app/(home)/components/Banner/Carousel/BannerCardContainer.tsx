"use client";
// store
import { useBannerCarouselStore } from "@/store/useBannerCarouselStore";
// components
import BannerCard from "./BannerCard";
import { cardData } from "@/mock-up/bannerCardData";

export default function BannerCardContainer() {
  const { translateState } = useBannerCarouselStore();

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