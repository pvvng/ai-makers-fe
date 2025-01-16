// components
import UserInfo from "./UserInfo";
import ContentSkeleton from "../skeleton/ContentSkeleton";
// react
import { Suspense } from "react";

export default function ContentContainer() {

  return (
    <div className="w-5/6 rounded-tl-2xl shadow-lg overflow-hidden">
      <BackgroundBox />
      <Suspense fallback={<ContentSkeleton />}>
        <UserInfo />
      </Suspense>
    </div>
  );
}

function BackgroundBox() {
  return <div className="w-full blue-gradient-tl h-48" />;
}
