import { MAX_BIRTH_LENGTH } from "@/constants/validation/length/birthLength";
import GenderSelector from "./selector/GenderSelector";

export default function BirthGenderInputBox() {
  return (
    <div className="flex w-full justify-center items-center mt-2 gap-2">
      <BrithInput />
      <GenderSelector />
    </div>
  );
}

function BrithInput() {
  return (
    <input
      className="border h-12 p-2 w-3/5 shadow"
      type="text"
      placeholder="생년월일 (예시. 20021221)"
      maxLength={MAX_BIRTH_LENGTH}
      required
      name="birth"
    />
  );
}
