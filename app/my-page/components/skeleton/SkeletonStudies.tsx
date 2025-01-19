// component
import MyPageComponentHeader from "../content/ComponentHeader";
import SkeletonCardMapContainer from "./SkeletonCardMapContainer";
// icon
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function SkeletonStudies() {
  return (
    <section className="p-4 px-8">
      <MyPageComponentHeader icon={faBook} label="내 스터디" />
      <SkeletonCardMapContainer />
    </section>
  );
}
