// component
import UserInfo from "./UserInfo/UserInfo";
import Studies from "./Studies/Studies";
// skeleton component
import SkeletonContent from "../skeleton/SkeletonContent";
import SkeletonStudies from "../skeleton/SkeletonStudies";
// react
import { Suspense } from "react";
import ScrapedStudy from "./Scrap/ScrapedStudy";
import SkeletonScrap from "../skeleton/SkeletonScrap";
import ScrapedContest from "./Scrap/ScrapedContest";
import Setting from "./Setting";

export default function ContentContainer() {
  return (
    <div className="w-5/6 rounded-tl-2xl shadow-lg overflow-hidden">
      <BackgroundBox />
      <Suspense fallback={<SkeletonContent />}>
        <UserInfo />
      </Suspense>
      <Suspense fallback={<SkeletonStudies />}>
        <Studies />
      </Suspense>
      <Suspense fallback={<SkeletonScrap label="스크랩한 스터디" />}>
        <ScrapedStudy />
      </Suspense>
      <Suspense fallback={<SkeletonScrap label="스크랩한 공모전" />}>
        <ScrapedContest />
      </Suspense>
      <Setting />
    </div>
  );
}

function BackgroundBox() {
  return <div className="w-full blue-gradient-tl h-48" />;
}
