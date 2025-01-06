import BirthGenderInputBox from "./bodyItems/BirthGenderInputBox";
import IdInput from "./bodyItems/IdInput";
import NameInput from "./bodyItems/NameInput";
import PasswordInputBox from "./bodyItems/password/PasswordInputBox";
import PurposeInterestContestSelectBox from "./bodyItems/PurposeInterestContestSelectBox";
import AvailabilityLocation from "./bodyItems/Location";
import JoinButton from "./JoinButton";
import Selector from "./bodyItems/Selector";

export default function JoinUsBody() {
  return (
    <form action="/api/join" method="POST">
      <div className="bg-white p-5 sm:p-10 mt-5 border">
        <p className="text-lg">회원가입하고 다양한 해택을 누리세요!</p>
        <IdInput />
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
