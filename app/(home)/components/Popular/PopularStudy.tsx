// components
import PopularDataMap from "./PopularDataMap";
// icon
import { faBook } from "@fortawesome/free-solid-svg-icons";
// type
import { CarouselData } from "@/types/carousel";
// constant
import { APP_URL } from "@/constants/url";
import PopularErrorContainer from "./PopularErrorContainer";

export default async function PopularStudy() {
  const popularContestResponse = await fetch(`${APP_URL}/api/popular/studies`, {
    cache: "force-cache",
  });

  const popularContestData: CarouselData[] =
    await popularContestResponse.json();

  if (!popularContestResponse.ok) {
    return <PopularErrorContainer name="스터디" />;
  }

  return (
    <PopularDataMap
      popularData={popularContestData}
      name="인기 스터디 TOP 8"
      icon={faBook}
    />
  );
}
