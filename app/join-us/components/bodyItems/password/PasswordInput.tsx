// type
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/constants/validation/length/passwordLength";
import { PasswordType } from "./PasswordInputBox";

export default function PasswordInput({
  passwordType,
  setPassword,
}: {
  passwordType: PasswordType;
  setPassword: (password: string) => void;
}) {
  return (
    <input
      className="border h-12 p-2 w-8/12 shadow"
      placeholder="비밀번호"
      type={passwordType}
      required
      minLength={MIN_PASSWORD_LENGTH}
      maxLength={MAX_PASSWORD_LENGTH}
      name="password"
      onChange={(e) => setPassword(e.currentTarget.value)}
    />
  );
}
