// component
import UserInfo from "./UserInfo/UserInfo";
import Studies from "./Studies/Studies";
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
      <hr />
      <Suspense fallback={<SkeletonStudies />}>
        <Studies />
      </Suspense>
      <hr />
    </div>
  );
}

function BackgroundBox() {
  return <div className="w-full blue-gradient-tl h-48" />;
}
