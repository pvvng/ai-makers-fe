import { contestOptions, interestOptions, purposeOptions } from "@/constants";

export default function PurposeInterestContestSelectBox() {
  return (
    <div className="flex w-full justify-center items-center mt-2 gap-2">
      <PurposeSelect />
      <InterestSelect />
      <ContestSelect />
    </div>
  );
}

function PurposeSelect() {
  return (
    <select className="border h-12 p-2 w-1/3" required defaultValue="" name="purpose">
      <option value="" disabled>
        서비스 가입 목적
      </option>
      {purposeOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function InterestSelect() {
  return (
    <select className="border h-12 p-2 w-1/3" required defaultValue="" name="interest">
      <option value="" disabled>
        관심 주제
      </option>
      {interestOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function ContestSelect() {
  return (
    <select className="border h-12 p-2 w-1/3" required defaultValue="" name="contest">
      <option value="" disabled>
        공모전 참가 횟수
      </option>
      {contestOptions.map((option, value) => (
        <option key={option} value={value}>
          {option}
        </option>
      ))}
    </select>
  );
}
