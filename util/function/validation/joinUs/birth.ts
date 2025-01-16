// func
import getValidateResultObject from "../getValidateResultObject";
// constant
import {
  BIRTH_INVALID_ERROR_MESSAGE,
  BIRTH_LENGTH_ERROR_MESSAGE,
  BIRTH_RANGE_ERROR_MESSAGE,
  BIRTH_RULE_ERROR_MESSAGE,
} from "@/constants/validation/errorMessage";
import {
  MAX_BIRTH_DAY,
  MAX_BIRTH_LENGTH,
  MIN_BITRH_DAY,
} from "@/constants/validation/length/birthLength";

export default function validateBirth(birth: string) {
  const birthValidationResults = [
    validateBirthExist(birth),
    validateBirthLength(birth),
    validateBirthIsNumber(birth),
    validateBirthInExpirationPeriod(birth),
  ];

  const errorObject = birthValidationResults.find((v) => !v.ok);

  if (errorObject) {
    return errorObject;
  }

  return getValidateResultObject(true, "birth 인증 성공");
}

function validateBirthExist(birth: string) {
  const birthExistValidation = !birth;

  return getValidateResultObject(
    !birthExistValidation,
    BIRTH_INVALID_ERROR_MESSAGE
  );
}

function validateBirthLength(birth: string) {
  const birthLengthValidation = birth.length === MAX_BIRTH_LENGTH;

  return getValidateResultObject(
    birthLengthValidation,
    BIRTH_LENGTH_ERROR_MESSAGE
  );
}

function validateBirthIsNumber(birth: string) {
  const parsedBirth = parseInt(birth);
  const isBirthNumber = Number.isInteger(parsedBirth);

  return getValidateResultObject(isBirthNumber, BIRTH_RULE_ERROR_MESSAGE);
}

function validateBirthInExpirationPeriod(birth: string) {
  const parsedBirth = parseInt(birth);

  const isBirthInExpirationPeriod =
    parsedBirth >= MIN_BITRH_DAY && parsedBirth <= MAX_BIRTH_DAY;

  return getValidateResultObject(
    isBirthInExpirationPeriod,
    BIRTH_RANGE_ERROR_MESSAGE
  );
}
