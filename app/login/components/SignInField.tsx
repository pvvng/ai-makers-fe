import SignInForm from "./signForm/SignInForm";
import SignInLinks from "./signForm/SignInLinks";
import SignInPersistenceCheckBox from "./signForm/SignInPersistenceCheckBox";

export default function SignInField() {
  return (
    <div className="sm:w-8/12 w-full sm:px-8 px-0 sm:mt-0 mt-4">
      <h6 className="text-xl font-semibold">로그인</h6>
      <SignInForm />
      <SignInPersistenceCheckBox />
      <hr className="mt-2" />
      <SignInLinks />
    </div>
  );
}
