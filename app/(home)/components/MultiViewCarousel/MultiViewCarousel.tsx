"use client";
// components
import ListItemContainer from "./ListItemContainer";
import Carousel from "./Carousel/Carousel";
// custom hook
import useBannerData from "@/util/hooks/useBannerData";
// react
import { useState } from "react";

export default function MultiViewCarousel() {
  const [listState, setListState] = useState(0);

  const bannerDataQuery = useBannerData(listState);
  const bannerDataPros = {
    bannerData: bannerDataQuery.data,
    isLoading: bannerDataQuery.isLoading,
    isError :bannerDataQuery.isError,
  };

  return (
    <div className="w-full p-4 pt-5 pb-5 px-8">
      <div className="flex gap-2 justify-center items-center">
        <ListItemContainer listState={listState} setListState={setListState} />
        <Carousel bannerDataObject={bannerDataPros} />
      </div>
    </div>
  );
}
