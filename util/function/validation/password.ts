// contants
import { INVALID_SPACE, INVALID_STRING } from "@/constants/validation/invalidString";
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/constants/validation/length/passwordLength";
import { passwordRegex } from "@/constants/validation/regex";
// icons
import {
  faCircleExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

// ui paaword validation
export function validatePasswordLength(password: string) {
  return (
    password.length >= MIN_PASSWORD_LENGTH &&
    password.length <= MAX_PASSWORD_LENGTH
  );
}

export function validatePasswordRegex(password: string) {
  return passwordRegex.test(password);
}

export function validatePasswordConfirm(
  password: string,
  confirmPassword: string
) {
  if (password === INVALID_STRING || confirmPassword === INVALID_STRING) {
    return false;
  }

  return password === confirmPassword;
}

export function validatePasswordHasSpace(password: string) {
  if (password === INVALID_STRING) {
    return false;
  }

  return !password.includes(INVALID_SPACE);
}

export function changeValidationIconType(isValid: boolean) {
  return isValid ? faCircleExclamation : faTriangleExclamation;
}
