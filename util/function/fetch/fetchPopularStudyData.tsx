import { CarouselData } from "@/types/carousel";

const APP_URL = process.env.NEXTAUTH_URL || "";

export default async function fetchPopularStudyData() {
  try {
    const popularContestResponse = await fetch(
      `${APP_URL}/api/popular-studies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      }
    );

    if (!popularContestResponse.ok) {
      throw new Error("데이터 확인 실패요");
    }

    const popularContestData: CarouselData[] =
      await popularContestResponse.json();

    return popularContestData;
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
}
