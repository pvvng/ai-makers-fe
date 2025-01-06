// type
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
      className="border h-12 p-2 sm:w-10/12 w-8/12 shadow"
      placeholder="비밀번호"
      type={passwordType}
      required
      minLength={8}
      name="password"
      onChange={(e) => setPassword(e.currentTarget.value)}
    />
  );
}
