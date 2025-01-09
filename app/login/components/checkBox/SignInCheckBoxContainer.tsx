import RememberIdCheckbox from "./RememberIdCheckbox";
import SignInPersistenceCheckBox from "./SignInPersistenceCheckBox";

export default function SignInCheckBoxContainer() {
  return (
    <div className="flex gap-2 justify-end items-center mb-3">
      <RememberIdCheckbox />
      <SignInPersistenceCheckBox />
    </div>
  );
}