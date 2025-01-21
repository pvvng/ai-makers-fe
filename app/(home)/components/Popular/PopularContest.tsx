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
    `${APP_URL}/api/popular/competitions`,
    {
      cache: "force-cache",
    }
  );

  const popularContestData: CarouselData[] =
    await popularContestResponse.json();

  if (!popularContestResponse.ok) {
    return <PopularErrorContainer name="공모전" />;
  }

  return (
    <PopularDataMap
      popularData={popularContestData}
      name="인기 공모전 TOP 8"
      icon={faAward}
    />
  );
}
