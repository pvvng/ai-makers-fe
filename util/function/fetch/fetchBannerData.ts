import { CarouselData } from "@/types/carousel";

const endpoints = [
  "/api/ai-recommendations",
  "/api/competitions",
  "/api/studies",
];

export default async function fetchBannerData(index: number) {
  try {
    const bannerDataResponse = await fetch(endpoints[index]);
    
    if (!bannerDataResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const bannerData: CarouselData[] = await bannerDataResponse.json();
    return bannerData;
  } catch (error) {
    console.log(error);
  }
}
