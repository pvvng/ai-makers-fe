import AvailabilityDaysSelector from "./bodyItems/AvailabilityDaysSelector";
import BirthGenderInputBox from "./bodyItems/BirthGenderInputBox";
import IdInput from "./bodyItems/IdInput";
import LanguageSelector from "./bodyItems/LanguageSelector";
import NameInput from "./bodyItems/NameInput";
import PasswordInputBox from "./bodyItems/password/PasswordInputBox";
import PurposeInterestContestSelectBox from "./bodyItems/PurposeInterestContestSelectBox";
import AvailabilityLocation from "./bodyItems/Location";

export default function JoinUsBody() {
  return (
    <form className="bg-white p-5 sm:p-10 mt-5 border">
      <p className="text-lg">회원가입하고 다양한 해택을 누리세요!</p>
      <IdInput />
      <PasswordInputBox />
      <NameInput />
      <BirthGenderInputBox />
      <PurposeInterestContestSelectBox />
      <LanguageSelector />
      <AvailabilityDaysSelector />
      <AvailabilityLocation />
    </form>
  );
}