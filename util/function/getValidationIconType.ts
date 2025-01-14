import { faCircleExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function getValidationIconType(isValid: boolean) {
  return isValid ? faCircleExclamation : faTriangleExclamation;
}