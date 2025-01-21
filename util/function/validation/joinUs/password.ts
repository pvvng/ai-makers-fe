// func
import getValidateResultObject from "../getValidateResultObject";
// constant
import {
  PASSWORD_CONFIRM_ERROR_MESSAGE,
  PASSWORD_INVALID_ERROR_MESSAGE,
  PASSWORD_LENGTH_ERROR_MESSAGE,
  PASSWORD_RULE_ERROR_MESSAGE,
  PASSWORD_SPACE_ERROR_MESSAGE,
} from "@/constants/validation/errorMessage";
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/constants/validation/length/passwordLength";

export const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

export default function validatePassword(password: string, confirmPassword: string) {
  const passwordValidationResult = [
    validatePasswordExist(password),
    validatePasswordRegex(password),
    validatePasswordLength(password),
    validatePasswordHasSpace(password),
    validatePasswordConfirm(password, confirmPassword),
  ];

  const errorObject = passwordValidationResult.find((v) => !v.ok);

  if (errorObject) {
    return errorObject;
  }

  return getValidateResultObject(true, "password 인증 성공");
}

export function validatePasswordExist(password: string) {
  const passwordExistValidation = !password;

  return getValidateResultObject(
    !passwordExistValidation,
    PASSWORD_INVALID_ERROR_MESSAGE
  );
}

export function validatePasswordRegex(password: string) {
  const passwordRegexValidation = passwordRegex.test(password);

  return getValidateResultObject(
    passwordRegexValidation,
    PASSWORD_RULE_ERROR_MESSAGE
  );
}

export function validatePasswordLength(password: string) {
  const passwordLengthValidation =
    password.length >= MIN_PASSWORD_LENGTH &&
    password.length <= MAX_PASSWORD_LENGTH;

  return getValidateResultObject(
    passwordLengthValidation,
    PASSWORD_LENGTH_ERROR_MESSAGE
  );
}

export function validatePasswordHasSpace(password: string) {
  const passwordHasSpace = password.includes(" ");

  return getValidateResultObject(
    !passwordHasSpace,
    PASSWORD_SPACE_ERROR_MESSAGE
  );
}

export function validatePasswordConfirm(password: string, confirmPassword: string) {
  let isPasswordConfirmed = password === confirmPassword;

  if (password === "" || confirmPassword === "") {
    isPasswordConfirmed = false;
  }

  return getValidateResultObject(
    isPasswordConfirmed,
    PASSWORD_CONFIRM_ERROR_MESSAGE
  );
}
