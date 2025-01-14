import {
  ID_INVALID_ERROR_MESSAGE,
  ID_LENGTH_ERROR_MESSAGE,
  ID_RULE_ERROR_MESSAGE,
  ID_SPACE_ERROR_MESSAGE,
} from "@/constants/validation/errorMessage";
import {
  MAX_ID_LENGTH,
  MIN_ID_LENGTH,
} from "@/constants/validation/length/idLength";

export const idRegex = /^(?![0-9]+$)(?=[a-zA-Z0-9]*$)(?=.*[a-zA-Z])(?=.*\d).+$/;

export function validateId(id: string) {
  const idValidationResult = [
    validateIdExist(id),
    validateIdLength(id),
    validateIdRegex(id),
    validateIdHasSpace(id),
  ];

  const errorObject = idValidationResult.find((v) => !v.ok);

  if (errorObject) {
    return errorObject;
  }

  return getValidateResultObject(true, "id 인증 성공");
}

export function validateIdExist(id: string) {
  const idExistValidation = !!id;

  return getValidateResultObject(!idExistValidation, ID_INVALID_ERROR_MESSAGE);
}

export function validateIdLength(id: string) {
  const idLengthValidation =
    id.length >= MIN_ID_LENGTH && id.length <= MAX_ID_LENGTH;

  return getValidateResultObject(idLengthValidation, ID_LENGTH_ERROR_MESSAGE);
}

export function validateIdRegex(id: string) {
  const idRegexValidation = idRegex.test(id);

  return getValidateResultObject(idRegexValidation, ID_RULE_ERROR_MESSAGE);
}

export function validateIdHasSpace(id: string) {
  const idHasSpaceValidation = !id.includes(" ");

  return getValidateResultObject(idHasSpaceValidation, ID_SPACE_ERROR_MESSAGE);
}

export function getValidateResultObject(isValid: boolean, message: string) {
  return { ok: isValid, message: message };
}
