// constants
import { nicgkNameRegex } from "@/constants/regex";
// validation functions
import { validatePasswordHasSpace, validatePasswordLength, validatePasswordRegex } from "./password";
import { validateIdHasSpace, validateIdLength, validateIdRegex } from "./id";

export function validateId(id: string) {
  if (!id) {
    return "아이디를 입력해주세요.";
  }

  if (!validateIdHasSpace(id)) {
    return "아이디에 공백을 포함할 수 없습니다.";
  }

  if (!validateIdRegex(id)) {
    return "아이디는 특수문자를 제외하고 영문, 숫자를 포함해주세요.";
  }

  if (!validateIdLength(id)) { 
    return "아이디는 6자 이상 20자 이하로 입력해주세요.";
  }

  return null;
}

export function validatePassword(password: string) {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }

  if (!validatePasswordLength(password)) {
    return "비밀번호는 8자 이상으로 입력해주세요.";
  }

  if (!validatePasswordRegex(password)) {
    return "비밀번호는 영문, 숫자, 특수문자를 포함해주세요.";
  }

  if (!validatePasswordHasSpace(password)) {
    return "비밀번호에 공백을 포함할 수 없습니다.";
  }

  return null;
}

export function validatePasswordConfirmInForm(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }

  return null;
}

export function validateNickname(nickname: string) {
  if (!nickname) {
    return "닉네임을 입력해주세요.";
  }

  if (!nicgkNameRegex.test(nickname)) {
    return "닉네임은 특수문자를 제외하고 한글, 영문, 숫자를 포함해주세요.";
  }

  if (nickname.length < 2 || nickname.length > 10) {
    return "닉네임은 2자 이상 10자 이하로 입력해주세요.";
  }

  return null;
}

export function validateBirth(birth: string) {
  const parsedBirth = parseInt(birth);

  if (!birth) {
    return "생년월일을 입력해주세요.";
  }

  if (birth.length !== 8) {
    return "생년월일은 8자리로 입력해주세요.";
  }

  if (isNaN(parsedBirth)) {
    return "생년월일은 숫자로 입력해주세요.";
  }

  if(parsedBirth < 19000101 || parsedBirth > 20211231) {
    return "생년월일은 1900년 1월 1일부터 2021년 12월 31일 사이로 입력해주세요.";
  }

  return null;
}

export function validateSelectValue(value: string, type: string) {
  if (!value) {
    return `${type} 필드는 필수 항목입니다.`;
  }

  return null;
}

export function validateLanguageDayLocationValue(value: string, type: string) {
  const parsedValue = parseStringToArray(value);

  if (isArrayEmpty(parsedValue)) {
    return `${type} 필드는 필수 항목입니다.`;
  }

  return null;
}

function parseStringToArray(strValue: string): string[] {
  return strValue.split(",").filter(Boolean);
}

function isArrayEmpty(arr: string[]) {
  return arr.length === 0;
}
