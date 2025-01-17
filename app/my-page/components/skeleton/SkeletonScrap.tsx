// component
import MyPageComponentHeader from "../content/MyPageComponentHeader";
import SkeletonCardMapContainer from "./SkeletonCardMapContainer";
// icon
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function SkeletonScrap({ label }: { label: string }) {
  return (
    <div className="p-4 px-8">
      <MyPageComponentHeader icon={faBookmark} label={label} />
      <SkeletonCardMapContainer />
    </div>
  );
}
