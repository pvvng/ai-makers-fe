// component
import NullScrapedContainer from "./NullScrapedContainer";
import ScarpCardMap from "./ScarpCardMap";
import MyPageComponentHeader from "../MyPageComponentHeader";
// constant
import { APP_URL } from "@/constants/url";
// type
import { CarouselData } from "@/types/carousel";
// icon
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import ErrorContainer from "../ErrorContainer";

export default async function ScrapedContest() {
  const srapedContestResponse = await fetch(
    `${APP_URL}/api/user/scrap/contest`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // cache: "force-cache",
    }
  );
  const scrapedContest: CarouselData[] = await srapedContestResponse.json();

  if (!srapedContestResponse.ok) {
    return <ErrorContainer label="스크랩한 공모전" />;
  }

  return (
    <div className="p-4 px-8">
      <MyPageComponentHeader icon={faBookmark} label="스크랩한 공모전" />
      {scrapedContest.length === 0 ? (
        <NullScrapedContainer koreanType="공모전" josaTypeByType="이" />
      ) : (
        <ScarpCardMap scrapedData={scrapedContest} />
      )}
    </div>
  );
}
