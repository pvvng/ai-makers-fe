// component
import UserInfo from "./UserInfo/UserInfo";
import Studies from "./Studies/Studies";
import Scrap from "./Scrap/Scrap";
// skeleton component
import SkeletonContent from "../skeleton/SkeletonContent";
import SkeletonStudies from "../skeleton/SkeletonStudyCard";
// react
import { Suspense } from "react";

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
      <Scrap type="study" />
      <Scrap type="contest" />
    </div>
  );
}

function BackgroundBox() {
  return <div className="w-full blue-gradient-tl h-48" />;
}
