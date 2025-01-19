// components
import SelectOption from "./SelectOption";
// constant
import {
  contestOptions,
  interestOptions,
  purposeOptions,
} from "@/constants/options";

export default function PurposeInterestContestSelectBox() {
  const selectData = [
    {
      name: "purpose",
      label: "서비스 가입 목적",
      options: purposeOptions,
    },
    {
      name: "interest",
      label: "관심 주제",
      options: interestOptions,
    },
    {
      name: "contest",
      label: "공모전 참가 횟수",
      options: contestOptions,
    },
  ];

  return (
    <div className="flex w-full justify-center items-center mt-2 gap-2">
      {selectData.map((data) => (
        <SelectOption key={data.name} {...data} />
      ))}
    </div>
  );
}
