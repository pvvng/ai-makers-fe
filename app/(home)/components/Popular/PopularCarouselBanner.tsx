"use client";

import { ANIMATION_TIME } from "@/constants/main/popularCarousel";
import { ImageData } from "@/types/popularCarousel";
import usePopularCarouselBanner from "@/util/hooks/usePopularCarouselBanner";
import Image from "next/image";

export default function PopularCarouselBanner() {
  const { currentBigImage, currentSmallImages, isTransitioning } =
    usePopularCarouselBanner();

  const bigImageProps = { ...currentBigImage, isTransitioning };

  return (
    <div className="relative w-2/4 h-[450px] flex flex-col gap-1">
      <CurrentBigImage {...bigImageProps} />
      <CurrentSmallImage currentSmallImages={currentSmallImages} />
    </div>
  );
}

interface PropsType {
  url: string;
  alt: string;
  isTransitioning: boolean;
}

function CurrentBigImage(props: PropsType) {
  const { url, alt, isTransitioning } = props;

  return (
    <div
      className={`w-full h-2/3 transition-opacity duration-${ANIMATION_TIME} ${
        isTransitioning ? "opacity-20" : "opacity-100"
      }`}
    >
      <BigSampleImage url={url} alt={alt} />
    </div>
  );
}

function CurrentSmallImage({
  currentSmallImages,
}: {
  currentSmallImages: ImageData[];
}) {
  return (
    <div className="w-full h-1/3 flex gap-1">
      {currentSmallImages.map((image) => (
        <SmallSampleImage
          key={image.url + image.alt}
          url={image.url}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

function BigSampleImage({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="relative w-full h-full hover:scale-95 transition-all cursor-pointer">
      <Image
        src={url}
        alt={alt}
        fill
        priority
        className="object-cover rounded-2xl"
        sizes="600px"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-center">
        큰 배너 이미지 샘플
      </div>
    </div>
  );
}

function SmallSampleImage({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="relative h-full w-full hover:scale-95 transition-all cursor-pointer">
      <Image
        src={url}
        alt={alt}
        fill
        className="object-cover rounded-xl"
        sizes="200px"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold text-center">
        작은 배너 이미지 샘플
      </div>
    </div>
  );
}
