import { APP_URL } from "@/constants/url";
import { CarouselData } from "@/types/carousel";

export default async function fetchPopularContestData() {
  try {
    const popularContestResponse = await fetch(
      `${APP_URL}/api/popular-competitions`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      }
    );

    if (!popularContestResponse.ok) {
      console.log("데이터 확인 실패요");
      return; 
    }

    const popularContestData: CarouselData[] =
      await popularContestResponse.json();

    return popularContestData;
  } catch (error: any) {
    console.log(error);
  }
}
