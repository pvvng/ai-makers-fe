export default function SignInPasswordInput() {
  return (
    <input
      type="password"
      name="password"
      className="w-full h-12 p-2 border rounded"
      minLength={8}
      placeholder="비밀번호"
    />
  );
}
