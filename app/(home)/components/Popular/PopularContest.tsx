// components
import PopularDataMap from "./PopularDataMap";
import PopularErrorContainer from "./PopularErrorContainer";
// icon
import { faAward } from "@fortawesome/free-solid-svg-icons";
// type
import { CarouselData } from "@/types/carousel";
// constant
import { APP_URL } from "@/constants/url";

export default async function PopularContest() {
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
    return <PopularErrorContainer name="공모전" />;
  }

  const popularContestData: CarouselData[] =
    await popularContestResponse.json();

  return (
    <PopularDataMap
      popularData={popularContestData}
      name="인기 공모전 TOP 8"
      icon={faAward}
    />
  );
}
