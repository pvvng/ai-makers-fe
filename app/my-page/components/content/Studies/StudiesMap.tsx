// component
import StudyCard from "./StudyCard/StudyCard";
// type
import { UserStudies, UserStudy } from "@/types/userStudy";
// constant
const MIN_STUDIED_LENGTH = 4;

export default function StudiesMap({
  userStudies,
}: {
  userStudies: UserStudies;
}) {
  const fillUndefiendStudies: (UserStudy | undefined)[] = [];

  for (let i = 0; i < MIN_STUDIED_LENGTH; i++) {
    fillUndefiendStudies.push(userStudies[i]);
  }

  return (
    <div className="flex flex-wrap justify-start items-center">
      {fillUndefiendStudies.map((study, i) =>
        study ? (
          <StudyCard key={study.dataKey} {...study} />
        ) : (
          <UndefiendStudyCard key={i} />
        )
      )}
    </div>
  );
}

function UndefiendStudyCard() {
  return (
    <div className="w-1/2 px-1 mt-2 h-[160px] rounded-2xl border shadow flex justify-center items-center">
      가입한 스터디가 없습니다.
    </div>
  );
}
