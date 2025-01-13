// type
import { CarouselData } from "@/types/carousel";
// components
import CarouselCardContainer from "./CarouselCardContainer";
import CarouselButtonsContainer from "./CarouselButtonsContainer";
import SkeletonCardContainer from "../Skeleton/SkeletonCardContainer";
import SkeletonErrorContainer from "../Skeleton/SkeletonErrorContainer";

interface PropsType {
  bannerData: CarouselData[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export default function Carousel({
  bannerDataObject,
}: {
  bannerDataObject: PropsType;
}) {
  return (
    <div className="w-10/12 relative">
      <RenderBannerContainer bannerDataObject={bannerDataObject} />
    </div>
  );
}

function RenderBannerContainer({
  bannerDataObject,
}: {
  bannerDataObject: PropsType;
}) {
  const { bannerData, isLoading, isError } = bannerDataObject;

  if (isError) return <SkeletonErrorContainer />;

  if (isLoading || !bannerData) return <SkeletonCardContainer />;

  return (
    <>
      <div className="w-full overflow-hidden pt-1 pb-1">
        <CarouselCardContainer bannerData={bannerData} />
      </div>
      <CarouselButtonsContainer />
    </>
  );
}
