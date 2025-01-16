import { SELECT_REQUIRED_ERROR_MESSAGE } from "@/constants/validation/errorMessage";
import getValidateResultObject from "../getValidateResultObject";

export default function validateLanguageDayLocationValue(
  value: string,
  type: string
) {
  const valueValidationResult = [validateValueIsEmpty(value, type)];

  const errorObject = valueValidationResult.find((v) => !v.ok);

  if (errorObject) {
    return errorObject;
  }

  return getValidateResultObject(true, `${type} 인증 성공`);
}

function validateValueIsEmpty(value: string, type: string) {
  const parsedValue = parseStringToArray(value);
  const isParsedValueEmpty = isArrayEmpty(parsedValue);

  return getValidateResultObject(
    !isParsedValueEmpty,
    SELECT_REQUIRED_ERROR_MESSAGE(type)
  );
}

function parseStringToArray(strValue: string): string[] {
  return strValue.split(",").filter(Boolean);
}

function isArrayEmpty(arr: string[]) {
  return arr.length === 0;
}
