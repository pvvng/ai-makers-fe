"use client";

// components
import PasswordInput from "./PasswordInput";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";
import PasswordCheckInput from "./PasswordCheckInput";
import PasswordValidateField from "./PasswordValidateField";
// react
import { useState } from "react";

// constants
export type PasswordType = typeof VISIBLE_STATE | typeof UNVISIBLE_STATE;
export const VISIBLE_STATE = "text";
export const UNVISIBLE_STATE = "password";

export default function PasswordInputBox() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordType, setPasswordType] =
    useState<PasswordType>(UNVISIBLE_STATE);

  return (
    <div id="password-box">
      <div className="w-full flex justify-center items-center mt-2">
        <PasswordInput passwordType={passwordType} setPassword={setPassword} />
        <PasswordVisibilityToggle setPasswordType={setPasswordType} />
      </div>
      <PasswordCheckInput setConfirmPassword={setConfirmPassword} />
      <PasswordValidateField
        password={password}
        confirmPassword={confirmPassword}
      />
    </div>
  );
}
