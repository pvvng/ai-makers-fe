export default function PasswordInputBox() {
  return (
    <div className="w-full flex justify-center items-center mt-2">
      <PasswordInput />
      <PasswordVisibilityToggle />
    </div>
  );
}

function PasswordInput() {
  return (
    <input
      className="border h-12 p-2 sm:w-10/12 w-8/12"
      placeholder="비밀번호"
      type="password"
      required
    />
  );
}

function PasswordVisibilityToggle() {
  return (
    <div className="sm:w-2/12 w-4/12 text-center">
      <input id="check-button" className="mx-2" type="checkbox" required />
      <label htmlFor="check-button" className="text-sm">
        표시
      </label>
    </div>
  );
}
