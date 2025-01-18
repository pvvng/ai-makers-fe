// component
import UserInfo from "./UserInfo/UserInfo";
import Studies from "./Studies/Studies";
import ScrapedStudy from "./Scrap/ScrapedStudy";
import ScrapedContest from "./Scrap/ScrapedContest";
import Setting from "./Setting";
// scroll component
import ObserverWrapper from "../ObserverWrapper";
import ScrollWatcher from "../ScrollWatcher";
// skeleton component
import SkeletonContent from "../skeleton/SkeletonContent";
import SkeletonStudies from "../skeleton/SkeletonStudies";
import SkeletonScrap from "../skeleton/SkeletonScrap";
// suspense
import { Suspense } from "react";

export default function ContentContainer() {
  return (
    <div className="w-5/6 rounded-tl-2xl shadow-lg overflow-hidden">
      <ScrollWatcher />
      <ObserverWrapper id="userInfo">
        <BackgroundBox />
        <Suspense fallback={<SkeletonContent />}>
          <UserInfo />
        </Suspense>
      </ObserverWrapper>
      <ObserverWrapper id="studies">
        <Suspense fallback={<SkeletonStudies />}>
          <Studies />
        </Suspense>
      </ObserverWrapper>
      <ObserverWrapper id="scrapedStudy">
        <Suspense fallback={<SkeletonScrap label="스크랩한 스터디" />}>
          <ScrapedStudy />
        </Suspense>
      </ObserverWrapper>
      <ObserverWrapper id="scrapedContest">
        <Suspense fallback={<SkeletonScrap label="스크랩한 공모전" />}>
          <ScrapedContest />
        </Suspense>
      </ObserverWrapper>
      <ObserverWrapper id="setting">
        <Setting />
      </ObserverWrapper>
    </div>
  );
}

function BackgroundBox() {
  return <div className="w-full blue-gradient-tl h-48" />;
}
