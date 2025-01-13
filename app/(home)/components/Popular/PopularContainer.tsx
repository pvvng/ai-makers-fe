// components
import SkeletonPopularContainer from "../Skeleton/SkeletonPopularContainer";
import PopularContest from "./PopularContest";
// react
import { Suspense } from "react";
import PopularStudy from "./PopularStudy";
import Image from "next/image";

export default function PopularContainer() {
  return (
    <div className="w-full p-4 pt-10 pb-10 px-8 bg-gray-100">
      <div className="flex gap-4 justify-center items-center">
        <PopularBannerImage />
        <Suspense fallback={<SkeletonPopularContainer />}>
          <PopularContest />
        </Suspense>
        <Suspense fallback={<SkeletonPopularContainer />}>
          <PopularStudy />
        </Suspense>
      </div>
    </div>
  );
}

function PopularBannerImage() {
  return (
    <div className="relative w-2/4 h-[450px] flex flex-col gap-1">
      <div className="w-full h-2/3">
        <BigSampleImage url="/sample/배너샘플커비2.webp" alt="샘플이미지" />
      </div>
      <div className="w-full h-1/3 flex gap-1">
        <SmallSampleImage url="/sample/배너샘플커비3.webp" alt="샘플이미지" />
        <SmallSampleImage url="/sample/배너샘플커비4.webp" alt="샘플이미지" />
        <SmallSampleImage url="/sample/배너샘플커비5.webp" alt="샘플이미지" />
      </div>
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
