// contants
import { passwordRegex } from "@/constants/regex";
// icons
import {
  faCircleExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

// ui paaword validation
export function validatePasswordLength(password: string) {
  return password.length >= 8 && password.length <= 20;
}

export function validatePasswordRegex(password: string) {
  return passwordRegex.test(password);
}

export function validatePasswordConfirm(
  password: string,
  confirmPassword: string
) {
  if (password === "" || confirmPassword === "") {
    return false;
  }

  return password === confirmPassword;
}

export function validatePasswordHasSpace(password: string) {
  if (password === "") {
    return false;
  }

  return !password.includes(" ");
}

export function changeValidationIconType(isValid: boolean) {
  return isValid ? faCircleExclamation : faTriangleExclamation;
}
