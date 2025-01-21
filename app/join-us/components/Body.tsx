import BirthGenderInputBox from "./bodyItems/BirthGenderInputBox";
import NameInput from "./bodyItems/NameInput";
import PasswordInputBox from "./bodyItems/password/PasswordInputBox";
import PurposeInterestContestSelectBox from "./bodyItems/selector/PurposeInterestContestSelectBox";
import AvailabilityLocation from "./bodyItems/location/Location";
import Selector from "./bodyItems/selector/Selector";
import IdInputBox from "./bodyItems/id/IdInputBox";
import BodyExplain from "./bodyItems/BodyExplain";
import SubmitButton from "./SubmitButton";

export default function JoinUsBody() {
  return (
    <form action="/api/join" method="POST">
      <UserFormField />
      <SubmitButton />
    </form>
  );
}

function UserFormField() {
  return (
    <div className="bg-white p-5 mt-5 px-10 border">
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
  );
}
