import { CarouselData } from "@/types/carousel";

const endpoints = [
  "/api/ai-recommendations",
  "/api/competitions",
  "/api/studies",
];

export default async function fetchBannerData(index: number) {
  try {
    const bannerDataResponse = await fetch(endpoints[index], {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    if (!bannerDataResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const bannerData: CarouselData[] = await bannerDataResponse.json();
    return bannerData;
  } catch (error: any) {
    console.log(error);

  }
}
