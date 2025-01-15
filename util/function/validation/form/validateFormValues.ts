// validation functions
import validateId from "../joinUs/id";
import validatePassword from "../joinUs/password";
import validateNickname from "../joinUs/nickname";
import validateBirth from "../joinUs/birth";
import validateSelectValue from "../joinUs/selectedValue";
import validateLanguageDayLocationValue from "../joinUs/languageDayLocationValue";
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
// type
import { FormFieldName, FormValues } from "@/types/form";
import { ValidationResultType } from "@/types/joinUs";

export function validateFormValues(formValues: FormValues) {
  const formObject = createFormObject(formValues);

  const validationResults: ValidationResultType =
    getValidationResults(formObject);

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
    validatePassword(formObject.password, formObject.confirmPassword),
    validateNickname(formObject.nickname),
    validateBirth(formObject.birth),
    validateSelectValue(formObject.gender, GENDER_LABEL),
    validateSelectValue(formObject.purpose, PURPOSE_LABEL),
    validateSelectValue(formObject.interest, INTEREST_LABEL),
    validateSelectValue(formObject.contest, CONTEST_LABEL),
    validateLanguageDayLocationValue(formObject.language, AVAILABLE_LANGUAGE_LABEL),
    validateLanguageDayLocationValue(formObject.day, AVAILABLE_DAY_LABEL),
    validateLanguageDayLocationValue(formObject.location, AVAILABLE_LOCATION_LABEL),
  ];
}

function loopValidationResults(validationResults: ValidationResultType) {
  let validation = true;

  for (const result of validationResults) {
    if (!result.ok) {
      validation = false;
      alert(result.message);
      break;
    }
  }

  return validation;
}
