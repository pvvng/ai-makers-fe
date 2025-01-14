// constants
import { idRegex, nicgkNameRegex } from "@/constants/validation/regex";
// validation functions
import {
  validatePasswordHasSpace,
  validatePasswordLength,
  validatePasswordRegex,
} from "./password";
// error messages
import {
  BIRTH_INVALID_ERROR_MESSAGE,
  BIRTH_LENGTH_ERROR_MESSAGE,
  BIRTH_RANGE_ERROR_MESSAGE,
  BIRTH_RULE_ERROR_MESSAGE,
  NICKNAME_INVALID_ERROR_MESSAGE,
  NICKNAME_LENGTH_ERROR_MESSAGE,
  NICKNAME_RULE_ERROR_MESSAGE,
  PASSWORD_CONFIRM_ERROR_MESSAGE,
  PASSWORD_INVALID_ERROR_MESSAGE,
  PASSWORD_LENGTH_ERROR_MESSAGE,
  PASSWORD_RULE_ERROR_MESSAGE,
  PASSWORD_SPACE_ERROR_MESSAGE,
  SELECT_REQUIRED_ERROR_MESSAGE,
} from "@/constants/validation/errorMessage";
// constants
import {
  MAX_NICKNAME_LENGTH,
  MIN_NICKNAME_LENGTH,
} from "@/constants/validation/length/nicknameLength";
import {
  MAX_BIRTH_DAY,
  MAX_BIRTH_LENGTH,
  MIN_BITRH_DAY,
} from "@/constants/validation/length/birthLength";
import {
  MAX_ID_LENGTH,
  MIN_ID_LENGTH,
} from "@/constants/validation/length/idLength";
import { INVALID_SPACE, INVALID_STRING } from "@/constants/validation/invalidString";

export function validateId(id: string) {
  if (!id) {
    return "아이디를 입력해주세요.";
  }

  if (id === INVALID_STRING || id.includes(INVALID_SPACE)) {
    return "아이디에 공백을 포함할 수 없습니다.";
  }

  if (!idRegex.test(id)) {
    return "아이디는 특수문자를 제외하고 영문, 숫자를 포함해주세요.";
  }

  if (id.length < MIN_ID_LENGTH || id.length > MAX_ID_LENGTH) {
    return "아이디는 6자 이상 20자 이하로 입력해주세요.";
  }

  return null;
}

export function validatePassword(password: string) {
  if (!password) {
    return PASSWORD_INVALID_ERROR_MESSAGE;
  }

  if (!validatePasswordLength(password)) {
    return PASSWORD_LENGTH_ERROR_MESSAGE;
  }

  if (!validatePasswordRegex(password)) {
    return PASSWORD_RULE_ERROR_MESSAGE;
  }

  if (!validatePasswordHasSpace(password)) {
    return PASSWORD_SPACE_ERROR_MESSAGE;
  }

  return null;
}

export function validatePasswordConfirmInForm(
  password: string,
  confirmPassword: string
) {
  if (password !== confirmPassword) {
    return PASSWORD_CONFIRM_ERROR_MESSAGE;
  }

  return null;
}

export function validateNickname(nickname: string) {
  if (!nickname) {
    return NICKNAME_INVALID_ERROR_MESSAGE;
  }

  if (!nicgkNameRegex.test(nickname)) {
    return NICKNAME_RULE_ERROR_MESSAGE;
  }

  if (
    nickname.length < MIN_NICKNAME_LENGTH ||
    nickname.length > MAX_NICKNAME_LENGTH
  ) {
    return NICKNAME_LENGTH_ERROR_MESSAGE;
  }

  return null;
}

export function validateBirth(birth: string) {
  const parsedBirth = parseInt(birth);

  if (!birth) {
    return BIRTH_INVALID_ERROR_MESSAGE;
  }

  if (birth.length !== MAX_BIRTH_LENGTH) {
    return BIRTH_LENGTH_ERROR_MESSAGE;
  }

  if (isNaN(parsedBirth)) {
    return BIRTH_RULE_ERROR_MESSAGE;
  }

  if (parsedBirth < MIN_BITRH_DAY || parsedBirth > MAX_BIRTH_DAY) {
    return BIRTH_RANGE_ERROR_MESSAGE;
  }

  return null;
}

export function validateSelectValue(value: string, type: string) {
  if (!value) {
    return SELECT_REQUIRED_ERROR_MESSAGE(type);
  }

  return null;
}

export function validateLanguageDayLocationValue(value: string, type: string) {
  const parsedValue = parseStringToArray(value);

  if (isArrayEmpty(parsedValue)) {
    return SELECT_REQUIRED_ERROR_MESSAGE(type);
  }

  return null;
}

function parseStringToArray(strValue: string): string[] {
  return strValue.split(",").filter(Boolean);
}

function isArrayEmpty(arr: string[]) {
  return arr.length === 0;
}
