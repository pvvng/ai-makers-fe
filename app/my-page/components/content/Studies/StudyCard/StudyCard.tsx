// comonent
import ActiveUsers from "./ActiveUsers";
import StudyCardHeader from "./StudyCardHeader";
import StudyExplain from "./StudyExplain";
import EnterStudyRoom from "./EnterStudyRoom";
// type
import { UserStudy } from "@/types/userStudy";

export default function StudyCard(props: UserStudy) {
  const { dataKey, name, explain, activeUser, isMarked } = props;

  return (
    <div className="w-1/2 px-1 mt-2">
      <div className="w-full p-3 rounded-2xl border shadow relative overflow-hidden transition-all">
        <StudyCardHeader name={name} isMarked={isMarked} />
        <ActiveUsers activeUser={activeUser} />
        <StudyExplain explain={explain} />
        <EnterStudyRoom />
      </div>
    </div>
  );
}
