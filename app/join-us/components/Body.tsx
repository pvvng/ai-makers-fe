import BirthGenderInputBox from "./bodyItems/BirthGenderInputBox";
import NameInput from "./bodyItems/NameInput";
import PasswordInputBox from "./bodyItems/password/PasswordInputBox";
import PurposeInterestContestSelectBox from "./bodyItems/selector/PurposeInterestContestSelectBox";
import AvailabilityLocation from "./bodyItems/Location";
import JoinButton from "./JoinButton";
import Selector from "./bodyItems/selector/Selector";
import IdInputBox from "./bodyItems/id/IdInputBox";
import BodyExplain from "./bodyItems/BodyExplain";

export default function JoinUsBody() {
  return (
    <form action="/api/join" method="POST">
      <div className="bg-white p-5 mt-5 border">
        <BodyExplain />
        <IdInputBox />
        <PasswordInputBox />
        <NameInput />
        <BirthGenderInputBox />
        <PurposeInterestContestSelectBox />
        <Selector type="language" />
        <Selector type="day" />
        <AvailabilityLocation />
      </div>
      <JoinButton />
    </form>
  );
}
