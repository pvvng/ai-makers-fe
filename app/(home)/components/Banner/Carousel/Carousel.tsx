// components
import BannerCardContainer from "./BannerCardContainer";
import CarouselButtonsContainer from "./CarouselButtonsContainer";

export default function Carousel() {
  return (
    <div className="w-10/12 relative">
      <div className="w-full overflow-hidden">
        <BannerCardContainer />
      </div>
      <CarouselButtonsContainer />
    </div>
  );
}
