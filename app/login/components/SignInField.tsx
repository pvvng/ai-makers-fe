import SignInForm from "./signForm/SignInForm";
import SignInLinks from "./signForm/SignInLinks";
import SignInCheckBoxContainer from "./checkBox/SignInCheckBoxContainer";

export default function SignInField() {
  return (
    <section className="w-2/3 mt-4 px-4">
      <p className="text-xl font-semibold">로그인</p>
      <SignInForm />
      <SignInCheckBoxContainer />
      <hr className="mt-2" />
      <SignInLinks />
    </section>
  );
}
