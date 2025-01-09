// component
import CheckBox from "./CheckBox";
// type
import { autoLogin, rememberId } from "@/types/signInCheckBox";
// constant
import { AUTO_LOGIN, REMEMBER_ID } from "@/constants/signInCheckBox";

export default function SignInCheckBoxContainer() {
  const checkBoxes: [rememberId, autoLogin] = [REMEMBER_ID, AUTO_LOGIN];

  return (
    <div className="flex gap-2 justify-end items-center mb-3">
      {checkBoxes.map((id) => (
        <CheckBox key={id} id={id} />
      ))}
    </div>
  );
}
