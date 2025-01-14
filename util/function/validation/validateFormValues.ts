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
// constants
import {
  AVAILABLE_DAY_LABEL,
  AVAILABLE_LANGUAGE_LABEL,
  AVAILABLE_LOCATION_LABEL,
  CONTEST_LABEL,
  GENDER_LABEL,
  INTEREST_LABEL,
  PURPOSE_LABEL,
} from "@/constants/validation/selectValueLabel";

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

    validateSelectValue(formObject.gender, GENDER_LABEL),
    validateSelectValue(formObject.purpose, PURPOSE_LABEL),
    validateSelectValue(formObject.interest, INTEREST_LABEL),
    validateSelectValue(formObject.contest, CONTEST_LABEL),

    validateLanguageDayLocationValue(
      formObject.language,
      AVAILABLE_LANGUAGE_LABEL
    ),
    validateLanguageDayLocationValue(formObject.day, AVAILABLE_DAY_LABEL),
    validateLanguageDayLocationValue(
      formObject.location,
      AVAILABLE_LOCATION_LABEL
    ),
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
