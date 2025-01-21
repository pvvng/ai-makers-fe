// validation func
import {
  validatePasswordConfirm,
  validatePasswordHasSpace,
  validatePasswordLength,
  validatePasswordRegex,
} from "@/util/function/validation/joinUs/password";
// components
import ValidationResultCard from "./ValidationResultCard";
// type
import { ValidationResultType } from "@/types/joinUs";

export default function PasswordValidateField({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) {
  const validationResults: ValidationResultType = [
    validatePasswordHasSpace(password),
    validatePasswordLength(password),
    validatePasswordRegex(password),
    validatePasswordConfirm(password, confirmPassword),
  ];

  return (
    <div className="w-full bg-white border mt-2 p-3 shadow">
      <ValidationResultCard validationResults={validationResults} />
    </div>
  );
}
