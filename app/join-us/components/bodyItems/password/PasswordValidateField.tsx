// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// validation functions
import {
  changeValidationIconType,
  changeValidationTextColor,
  validatePasswordConfirm,
  validatePasswordHasSpace,
  validatePasswordLength,
  validatePasswordRegex,
} from "@/util/function/validation/joinUs";

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
      message: "비밀번호는 8자 이상이어야 합니다.",
    },
    {
      isValid: validatePasswordRegex(password),
      message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
    },
    {
      isValid: validatePasswordHasSpace(password),
      message: "비밀번호에는 공백이 포함될 수 없습니다.",
    },
    {
      isValid: validatePasswordConfirm(password, confirmPassword),
      message: "비밀번호가 일치하지 않습니다.",
    },
  ];

  return (
    <div className="w-full bg-white border mt-2 p-3">
      {validationResults.map((validationResult, index) => (
        <ValidationMessage
          key={index}
          isValid={validationResult.isValid}
          message={validationResult.message}
        />
      ))}
    </div>
  );
}

function ValidationMessage({
  isValid,
  message,
}: {
  isValid: boolean;
  message: string;
}) {
  return (
    <p className={changeValidationTextColor(isValid)}>
      <FontAwesomeIcon icon={changeValidationIconType(isValid)} /> {message}
    </p>
  );
}
