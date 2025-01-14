import SignInIdInput from "./SignInIdInput";
import SignInLoginButton from "./SignInLoginButton";
import SignInPasswordInput from "./SignInPasswordInput";

export default function SignInForm() {
  return (
    <form className="flex gap-2 mt-2" action="/api/login" method="GET">
      <div className="flex gap-2 flex-col w-2/3">
        <SignInIdInput />
        <SignInPasswordInput />
      </div>
      <SignInLoginButton />
    </form>
  );
}