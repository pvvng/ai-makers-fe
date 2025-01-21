import { SELECT_REQUIRED_ERROR_MESSAGE } from "@/constants/validation/errorMessage";
import getValidateResultObject from "../getValidateResultObject";

export default function validateSelectValue(value: string, type: string) {
  const selectedValueValidationResult = [
    validateSelectedValueExist(value, type),
  ];

  const errorObject = selectedValueValidationResult.find((v) => !v.ok);

  if (errorObject) {
    return errorObject;
  }

  return getValidateResultObject(true, `${type} 인증 성공`);
}

function validateSelectedValueExist(value: string, type: string) {
  const selectedValueExist = !value;

  return getValidateResultObject(
    !selectedValueExist,
    SELECT_REQUIRED_ERROR_MESSAGE(type)
  );
}
