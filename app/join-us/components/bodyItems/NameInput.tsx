import { MAX_NICKNAME_LENGTH, MIN_NICKNAME_LENGTH } from "@/constants/validation/length/nicknameLength";

export default function NameInput() {
  return (
    <input
      className="border w-full h-12 p-2 mt-2 shadow"
      placeholder="이름 / 별명"
      name="nickname"
      minLength={MIN_NICKNAME_LENGTH}
      maxLength={MAX_NICKNAME_LENGTH}
      required
    />
  );
}
