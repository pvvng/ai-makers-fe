import AvailabilityDaysSelector from "./bodyItems/AvailabilityDaysSelector";
import BirthGenderInputBox from "./bodyItems/BirthGenderInputBox";
import IdInput from "./bodyItems/IdInput";
import LanguageSelector from "./bodyItems/LanguageSelector";
import NameInput from "./bodyItems/NameInput";
import PasswordInputBox from "./bodyItems/password/PasswordInputBox";
import PurposeInterestContestSelectBox from "./bodyItems/PurposeInterestContestSelectBox";

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
      {/* 거주지 필드 */}
      {/* kakao api 불러오기 */}
    </form>
  );
}

// 서비스 가입 목적 - 1. 공모전 2. 스터디
// 관심주제 - 로봇/게임/ai/어플 등등
// 사용 가능 언어 - c++/java/python 등등
// 공모전 나간 횟수 - 0/1/2/3/4/5회 이상
// 활동가능요일 - 월/화/수/목/금/토/일
// 거주지