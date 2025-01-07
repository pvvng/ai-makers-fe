// constants
import { nicgkNameRegex } from "@/constants/validation/regex";
// validation functions
import {
  validatePasswordHasSpace,
  validatePasswordLength,
  validatePasswordRegex,
} from "./password";
import { validateIdHasSpace, validateIdLength, validateIdRegex } from "./id";
// error messages
import {
  BIRTH_INVALID_ERROR_MESSAGE,
  BIRTH_LENGTH_ERROR_MESSAGE,
  BIRTH_RANGE_ERROR_MESSAGE,
  BIRTH_RULE_ERROR_MESSAGE,
  ID_INVALID_ERROR_MESSAGE,
  ID_LENGTH_ERROR_MESSAGE,
  ID_RULE_ERROR_MESSAGE,
  ID_SPACE_ERROR_MESSAGE,
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
import { MAX_BIRTH_DAY, MIN_BITRH_DAY } from "@/constants/validation/length/birthLength";

export function validateId(id: string) {
  if (!id) {
    return ID_INVALID_ERROR_MESSAGE;
  }

  if (!validateIdHasSpace(id)) {
    return ID_SPACE_ERROR_MESSAGE;
  }

  if (!validateIdRegex(id)) {
    return ID_RULE_ERROR_MESSAGE;
  }

  if (!validateIdLength(id)) {
    return ID_LENGTH_ERROR_MESSAGE;
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

  if (birth.length !== 8) {
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
