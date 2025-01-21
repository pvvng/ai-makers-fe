// components
import SkeletonPopularContainer from "../Skeleton/SkeletonPopularContainer";
import PopularContest from "./PopularContest";
import PopularStudy from "./PopularStudy";
import PopularCarouselBanner from "./PopularCarouselBanner";
// react
import { Suspense } from "react";

export default function PopularContainer() {
  return (
    <section className="w-full p-4 pt-10 pb-10 px-8 bg-gray-100">
      <div className="flex gap-2 justify-center items-center">
        <PopularCarouselBanner />
        <Suspense fallback={<SkeletonPopularContainer />}>
          <PopularContest />
        </Suspense>
        <Suspense fallback={<SkeletonPopularContainer />}>
          <PopularStudy />
        </Suspense>
      </div>
    </section>
  );
}
