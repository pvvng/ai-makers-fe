// coponent
import fetchUserStudy from "@/util/function/fetch/fetchUserStudy";
import StudyCard from "./StudyCard/StudyCard";
// type
import { UserStudies } from "@/types/userStudy";

export default async function Studies() {
  const userStudies: UserStudies = await fetchUserStudy();

  return (
    <div className="p-4 px-8">
      <div className="flex flex-wrap justify-start items-center">
        <UserStudiesMap userStudies={userStudies} />
      </div>
    </div>
  );
}

function UserStudiesMap({ userStudies }: { userStudies: UserStudies }) {
  return userStudies.map((study) => (
    <StudyCard key={study.dataKey} {...study} />
  ));
}
