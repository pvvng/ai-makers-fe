// validation functions
import {
  validatePasswordConfirm,
  validatePasswordHasSpace,
  validatePasswordLength,
  validatePasswordRegex,
} from "@/util/function/validation/password";
// components
import ValidationFieldBox from "./ValidationFieldBox";

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
      message: "비밀번호는 8자 이상 20자 이하로 입력해주세요.",
    },
    {
      isValid: validatePasswordRegex(password),
      message: "비밀번호는 영문, 숫자, 특수문자를 포함해주세요.",
    },
    {
      isValid: validatePasswordHasSpace(password),
      message: "비밀번호에 공백을 포함할 수 없습니다.",
    },
    {
      isValid: validatePasswordConfirm(password, confirmPassword),
      message: "비밀번호가 일치하지 않습니다.",
    },
  ];

  return <ValidationFieldBox validationResults={validationResults} />;
}

