// fetch func
import fetchPopularContestData from "@/util/function/fetch/fetchPopularContestData";
// components
import PopularDataMap from "./PopularDataMap";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export default async function PopularContest() {
  const popularContestData = await fetchPopularContestData();

  return (
    <PopularDataMap
      popularData={popularContestData}
      name="인기 공모전 TOP 8"
      icon={faAward}
    />
  );
}
