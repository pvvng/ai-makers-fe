"use client";

import { useQuery } from "@tanstack/react-query";
import fetchBannerData from "../function/fetch/fetchBannerData";

export default function useBannerData(listState: number) {
  const query = useQuery({
    queryKey: ["bannerData", listState],
    queryFn: () => fetchBannerData(listState),
    enabled: listState !== null,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return query;
}
