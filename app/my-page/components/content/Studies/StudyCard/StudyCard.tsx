// comonent
import ActiveUsers from "./ActiveUsers";
import StudyExplain from "./StudyExplain";
import EnterStudyRoom from "./EnterStudyRoom";
// type
import { UserStudy } from "@/types/userStudy";
// constant
import { myPageCardHeight } from "@/constants/myPageCard";

export default function StudyCard(props: UserStudy) {
  const { dataKey, name, explain, activeUser } = props;

  return (
    <div className="w-1/2 px-1 mt-2">
      <div
        className={`w-full h-[${myPageCardHeight}px] p-4 rounded-2xl border shadow relative overflow-hidden transition-all`}
      >
        <p className="text-lg font-semibold truncate">{name}</p>
        <ActiveUsers activeUser={activeUser} />
        <StudyExplain explain={explain} />
        <EnterStudyRoom />
      </div>
    </div>
  );
}
