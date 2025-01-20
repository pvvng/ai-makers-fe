// react
import { createContext, useContext, useState } from "react";
// type
import { CarouselData } from "@/types/carousel";
// constant
import {
  MAX_CAROUSEL_NUMBER,
  MIN_CAROUSEL_NUMBER,
} from "@/constants/main/bannerCarousel";

interface CarouselContextType {
  bannerData: CarouselData[];
  translateState: number;
  handleLeftClick: () => void;
  handleRightClick: () => void;
}

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "useCarouselContext는 CarouselProvider 내부에서만 사용할 수 있습니다."
    );
  }
  return context;
};

export const CarouselProvider: React.FC<{
  bannerData: CarouselData[];
  children: React.ReactNode;
}> = ({ bannerData, children }) => {
  const [translateState, setTranslateState] = useState(MIN_CAROUSEL_NUMBER);

  const handleLeftClick = () => {
    const newTranslate = Math.min(
      translateState + MAX_CAROUSEL_NUMBER,
      MIN_CAROUSEL_NUMBER
    );
    setTranslateState(newTranslate);
  };

  const handleRightClick = () => {
    const newTranslate = Math.max(
      translateState - MAX_CAROUSEL_NUMBER,
      -MAX_CAROUSEL_NUMBER
    );
    setTranslateState(newTranslate);
  };

  return (
    <CarouselContext.Provider
      value={{
        bannerData,
        translateState,
        handleLeftClick,
        handleRightClick,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
