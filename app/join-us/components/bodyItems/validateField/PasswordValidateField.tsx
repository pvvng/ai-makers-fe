// validation functions
import {
  validatePasswordConfirm,
  validatePasswordHasSpace,
  validatePasswordLength,
  validatePasswordRegex,
} from "@/util/function/validation/password";
// components
import ValidationFieldBox from "./ValidationFieldBox";
// error messages
import {
  PASSWORD_CONFIRM_ERROR_MESSAGE,
  PASSWORD_LENGTH_ERROR_MESSAGE,
  PASSWORD_RULE_ERROR_MESSAGE,
  PASSWORD_SPACE_ERROR_MESSAGE,
} from "@/constants/validation/errorMessage";

export default function PasswordValidateField({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) {
  const validationResults = [
    {
      isValid: validatePasswordLength(password),
      message: PASSWORD_LENGTH_ERROR_MESSAGE,
    },
    {
      isValid: validatePasswordRegex(password),
      message: PASSWORD_RULE_ERROR_MESSAGE,
    },
    {
      isValid: validatePasswordHasSpace(password),
      message: PASSWORD_SPACE_ERROR_MESSAGE,
    },
    {
      isValid: validatePasswordConfirm(password, confirmPassword),
      message: PASSWORD_CONFIRM_ERROR_MESSAGE,
    },
  ];

  return <ValidationFieldBox validationResults={validationResults} />;
}
