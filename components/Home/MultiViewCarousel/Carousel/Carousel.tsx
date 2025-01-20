// components
import CarouselCardContainer from "./CarouselCardContainer";
import CarouselButtonsContainer from "./CarouselButtonsContainer";
import SkeletonCardContainer from "../../Skeleton/SkeletonCardContainer";
import SkeletonErrorContainer from "../../Skeleton/SkeletonErrorContainer";
// context api
import { CarouselProvider } from "@/util/hooks/contextAPI/CarouselContext";
// type
import { CarouselData } from "@/types/carousel";

interface PropsType {
  bannerData: CarouselData[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export default function Carousel(props: PropsType) {
  const { bannerData, isLoading, isError } = props;

  if (isError) return <SkeletonErrorContainer />;

  if (isLoading || !bannerData) return <SkeletonCardContainer />;

  return (
    <div className="w-full overflow-hidden pt-1 pb-1">
      <CarouselProvider bannerData={bannerData}>
        <CarouselCardContainer />
        <CarouselButtonsContainer />
      </CarouselProvider>
    </div>
  );
}
