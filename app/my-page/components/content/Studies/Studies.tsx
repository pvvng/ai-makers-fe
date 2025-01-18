// coponent
import StudyCard from "./StudyCard/StudyCard";
import ErrorContainer from "../ErrorContainer";
import MyPageComponentHeader from "../MyPageComponentHeader";
// type
import { UserStudies, UserStudy } from "@/types/userStudy";
// icon
import { faBook } from "@fortawesome/free-solid-svg-icons";
// constant
import { APP_URL } from "@/constants/url";

export default async function Studies() {
  const userStudiesResponse = await fetch(`${APP_URL}/api/user/study`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  const userStudies: UserStudies = await userStudiesResponse.json();

  if (!userStudiesResponse.ok) {
    return <ErrorContainer label="내 스터디" />;
  }

  return (
    <div className="p-4 px-8">
      <MyPageComponentHeader icon={faBook} label="내 스터디" />
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
      <div className="w-full h-[160px] rounded-2xl border shadow flex justify-center items-center">
        가입한 스터디가 없습니다.
      </div>
    </div>
  );
}
