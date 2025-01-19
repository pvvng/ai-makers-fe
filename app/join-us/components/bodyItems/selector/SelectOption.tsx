import { Options } from "@/types/options";

interface SelectOptionPropsType {
  name: string;
  label: string;
  options: Options;
}

export default function SelectOption({
  name,
  label,
  options,
}: SelectOptionPropsType) {
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
