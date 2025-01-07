import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/constants/validation/length/passwordLength";

export default function PasswordCheckInput({
  setConfirmPassword,
}: {
  setConfirmPassword: (password: string) => void;
}) {
  return (
    <input
      className="border h-12 p-2 w-full mt-2 shadow"
      placeholder="비밀번호 확인"
      type="password"
      minLength={MIN_PASSWORD_LENGTH}
      maxLength={MAX_PASSWORD_LENGTH}
      name="confirmPassword"
      required
      onChange={(e) => setConfirmPassword(e.currentTarget.value)}
    />
  );
}
