// component
import { Suspense } from "react";
import SideBar from "./components/SideBar";
import ContentContainer from "./components/content/ContentContainer";
// type
import { Metadata } from "next";
import SkeletonContent from "./components/skeleton/SkeletonContent";

export const metadata: Metadata = {
  title: "마이페이지",
};

export default function Contest() {
  return (
    <div className="w-full p-4 pt-14 pb-10 px-24">
      <div className="flex justify-center items-start gap-10">
        <SideBar />
        <Suspense fallback={<SkeletonContent />}>
          <ContentContainer />
        </Suspense>
      </div>
    </div>
  );
}
