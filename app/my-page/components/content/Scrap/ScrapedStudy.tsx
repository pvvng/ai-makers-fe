// component
import NullScrapedContainer from "./NullScrapedContainer";
import ScarpCardMap from "./ScarpCardMap";
import MyPageComponentHeader from "../MyPageComponentHeader";
// constant
import { APP_URL } from "@/constants/url";
// type
import { CarouselData } from "@/types/carousel";
// icon
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ErrorContainer from "../ErrorContainer";

export default async function ScrapedStudy() {
  const srapedStudyResponse = await fetch(`${APP_URL}/api/user/scrap/study`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "force-cache",
  });
  const scrapedStudy: CarouselData[] = await srapedStudyResponse.json();

  if (!srapedStudyResponse.ok) {
    return <ErrorContainer label="스크랩한 스터디" />;
  }

  return (
    <div className="p-4 px-8">
      <MyPageComponentHeader icon={faBook} label="스크랩한 스터디" />
      {scrapedStudy.length === 0 ? (
        <NullScrapedContainer koreanType="스터디" josaTypeByType="가" />
      ) : (
        <ScarpCardMap scrapedData={scrapedStudy} />
      )}
    </div>
  );
}
