"use client";

import {
  ANIMATION_TIME,
  bigImage,
  ROTATE_TIME,
  smallImages,
} from "@/constants/main/popularCarousel";
import { ImageData } from "@/types/popularCarousel";
import { useEffect, useState } from "react";

export default function usePopularCarouselBanner() {
  const [currentBigImage, setCurrentBigImage] = useState<ImageData>(
    bigImage[0]
  );
  const [currentSmallImages, setCurrentSmallImages] =
    useState<ImageData[]>(smallImages);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // 애니메이션 시작
      setTimeout(() => {
        const nextBigImage = currentSmallImages[0];
        setCurrentBigImage(nextBigImage);
        setCurrentSmallImages((prevSmallImages) => {
          const updatedSmallImages = [
            ...prevSmallImages.slice(1),
            currentBigImage,
          ];
          return updatedSmallImages;
        });
        setIsTransitioning(false); // 애니메이션 종료
      }, ANIMATION_TIME); // CSS 애니메이션 시간과 일치시킴
    }, ROTATE_TIME);

    return () => clearInterval(interval);
  }, [currentBigImage, currentSmallImages]);

  return { currentBigImage, currentSmallImages, isTransitioning };
}
