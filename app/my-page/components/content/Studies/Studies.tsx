// coponent
import ErrorContainer from "../ErrorContainer";
import StudiesMap from "./StudiesMap";
import MyPageComponentHeader from "../ComponentHeader";
// type
import { UserStudies } from "@/types/userStudy";
// icon
import { faBook } from "@fortawesome/free-solid-svg-icons";
// constant
import { APP_URL } from "@/constants/url";

export default async function Studies() {
  const userStudiesResponse = await fetch(`${APP_URL}/api/user/study`, {
    cache: "force-cache",
  });

  const userStudies: UserStudies = await userStudiesResponse.json();

  if (!userStudiesResponse.ok) {
    return <ErrorContainer label="내 스터디" />;
  }

  return (
    <section className="p-4 px-8">
      <MyPageComponentHeader icon={faBook} label="내 스터디" />
      <StudiesMap userStudies={userStudies} />
    </section>
  );
}
