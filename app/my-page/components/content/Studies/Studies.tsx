// coponent
import fetchUserStudy from "@/util/function/fetch/fetchUserStudy";
import StudyCard from "./StudyCard/StudyCard";
import StudiesComponentHeader from "./StudiesComponentHeader";
// type
import { UserStudies, UserStudy } from "@/types/userStudy";
// constant
import { myPageCardHeight } from "@/constants/myPageCard";

export default async function Studies() {
  const userStudies: UserStudies = await fetchUserStudy();

  return (
    <div className="p-4 px-8">
      <StudiesComponentHeader studyCount={userStudies.length} />
      <div className="flex flex-wrap justify-start items-center">
        <UserStudiesMap userStudies={userStudies} />
      </div>
    </div>
  );
}

function UserStudiesMap({ userStudies }: { userStudies: UserStudies }) {
  const fillUndefiendStudies: (UserStudy | undefined)[] = [];

  for (let i = 0; i < 4; i++) {
    fillUndefiendStudies.push(userStudies[i]);
  }

  return fillUndefiendStudies.map((study, i) => {
    return study ? (
      <StudyCard key={study.dataKey} {...study} />
    ) : (
      <NullStudyCard key={i} />
    );
  });
}

function NullStudyCard() {
  return (
    <div className="w-1/2 px-1 mt-2">
      <div
        className={`w-full h-[${myPageCardHeight}px] rounded-2xl border shadow flex justify-center items-center`}
      >
        가입한 스터디가 없습니다.
      </div>
    </div>
  );
}
