// type
import { FormFieldName, FormValues } from "@/types/form";
// validation functions
import {
  validateBirth,
  validateId,
  validateLanguageDayLocationValue,
  validateNickname,
  validatePassword,
  validatePasswordConfirmInForm,
  validateSelectValue,
} from "./joinUsForm";

export function validateFormValues(formValues: FormValues) {
  const formObject = createFormObject(formValues);

  const validationResults = getValidationResults(formObject);

  return loopValidationResults(validationResults);
}

function createFormObject(formValues: FormValues) {
  return formValues.reduce((acc, { name, value }) => {
    acc[name] = value;
    return acc;
  }, {} as Record<FormFieldName, string>);
}

function getValidationResults(formObject: Record<FormFieldName, string>) {
  return [
    validateId(formObject.id),
    validatePassword(formObject.password),
    validatePasswordConfirmInForm(
      formObject.password,
      formObject.confirmPassword
    ),
    validateNickname(formObject.nickname),
    validateBirth(formObject.birth),

    validateSelectValue(formObject.gender, "성별"),
    validateSelectValue(formObject.purpose, "가입 목적"),
    validateSelectValue(formObject.interest, "관심 주제"),
    validateSelectValue(formObject.contest, "공모전 참가 횟수"),

    validateLanguageDayLocationValue(formObject.language, "사용 가능 언어"),
    validateLanguageDayLocationValue(formObject.day, "활동 가능 요일"),
    validateLanguageDayLocationValue(formObject.location, "활동 가능 지역"),
  ];
}

export function loopValidationResults(validationResults: (string | null)[]) {
  let validation = true;

  for (const result of validationResults) {
    if (result) {
      validation = false;
      alert(result);
      break;
    }
  }

  return validation;
}
