export default function PasswordCheckInput({
  setConfirmPassword,
}: {
  setConfirmPassword: (password: string) => void;
}) {
  return (
    <input
      className="border h-12 p-2 w-full mt-2"
      placeholder="비밀번호 확인"
      type="password"
      minLength={8}
      onChange={(e) => setConfirmPassword(e.currentTarget.value)}
    />
  );
}
