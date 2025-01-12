"use client";
// components
import ListItemContainer from "./ListItemContainer";
import Carousel from "./Carousel/Carousel";
// fetch func
import fetchBannerData from "@/util/function/fetch/fetchBannerData";
// react-query
import { useQuery } from "@tanstack/react-query";
// react
import { useState } from "react";

export default function Banner() {
  const [listState, setListState] = useState(0);

  const {
    data: bannerData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bannerData", listState],
    queryFn: () => fetchBannerData(listState),
    enabled: listState !== null,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  const bannerDataObject = { bannerData, isLoading, isError };

  return (
    <div className="w-full flex gap-2 justify-center items-center p-4 pt-10 pb-10 px-8">
      <ListItemContainer listState={listState} setListState={setListState} />
      <Carousel bannerDataObject = {bannerDataObject} />
    </div>
  );
}
