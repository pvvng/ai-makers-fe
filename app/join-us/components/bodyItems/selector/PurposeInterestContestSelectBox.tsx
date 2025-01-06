import {
  contestOptions,
  interestOptions,
  Options,
  purposeOptions,
} from "@/constants";

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

function SelectOption({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: Options;
}) {
  return (
    <select
      className="border h-12 p-2 w-1/3 shadow"
      required
      defaultValue=""
      name={name}
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
