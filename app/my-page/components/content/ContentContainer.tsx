// component
import SectionWrapper from "./SectionWrapper";
import UserInfo from "./UserInfo/UserInfo";
import Studies from "./Studies/Studies";
import ScrapedStudy from "./Scrap/ScrapedStudy";
import ScrapedContest from "./Scrap/ScrapedContest";
import Setting from "./Setting/Setting";
import BackgroundBox from "./BackgroundBox";
// scroll component
import ObserverWrapper from "./ScrollObserver/ObserverWrapper";
import ScrollWatcher from "./ScrollObserver/ScrollWatcher";
// skeleton component
import SkeletonContent from "../skeleton/SkeletonContent";
import SkeletonStudies from "../skeleton/SkeletonStudies";
import SkeletonScrap from "../skeleton/SkeletonScrap";

export default function ContentContainer() {
  return (
    <div className="w-5/6 rounded-tl-2xl shadow-lg overflow-hidden">
      <ScrollWatcher />
      <UserInfoSection />
      <StudiesSection />
      <ScrapedStudySection />
      <ScrapedContestSection />
      <SettingSection />
    </div>
  );
}

function UserInfoSection() {
  return (
    <SectionWrapper id="userInfo" fallback={<SkeletonContent />}>
      <BackgroundBox />
      <UserInfo />
    </SectionWrapper>
  );
}

function StudiesSection() {
  return (
    <SectionWrapper id="studies" fallback={<SkeletonStudies />}>
      <Studies />
    </SectionWrapper>
  );
}

function ScrapedStudySection() {
  return (
    <SectionWrapper
      id="scrapedStudy"
      fallback={<SkeletonScrap label="스크랩한 스터디" />}
    >
      <ScrapedStudy />
    </SectionWrapper>
  );
}

function ScrapedContestSection() {
  return (
    <SectionWrapper
      id="scrapedContest"
      fallback={<SkeletonScrap label="스크랩한 공모전" />}
    >
      <ScrapedContest />
    </SectionWrapper>
  );
}

function SettingSection() {
  return (
    <ObserverWrapper id="setting">
      <Setting />
    </ObserverWrapper>
  );
}
