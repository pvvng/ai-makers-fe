// fetch func
import fetchPopularStudyData from "@/util/function/fetch/fetchPopularStudyData";
// components
import PopularDataMap from "./PopularDataMap";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default async function PopularStudy() {
  const popularContestData = await fetchPopularStudyData();

  return (
    <PopularDataMap
      popularData={popularContestData}
      name="인기 스터디 TOP 8"
      icon={faBook}
    />
  );
}
