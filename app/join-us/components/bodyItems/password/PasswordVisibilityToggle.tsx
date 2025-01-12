// type, contants
import { PasswordType, UNVISIBLE_STATE, VISIBLE_STATE } from "./PasswordInputBox";

export default function PasswordVisibilityToggle({
  setPasswordType,
}: {
  setPasswordType: (type: PasswordType) => void;
}) {
  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkBox = e.currentTarget;

    if (checkBox.checked) {
      setPasswordType(VISIBLE_STATE);
      return;
    }

    setPasswordType(UNVISIBLE_STATE);
  };

  return (
    <div className="w-4/12 text-center">
      <input
        id="check-button"
        className="mx-2"
        type="checkbox"
        onChange={checkBoxHandler}
      />
      <label htmlFor="check-button" className="text-sm">
        표시
      </label>
    </div>
  );
}
