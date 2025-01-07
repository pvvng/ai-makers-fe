// validation
import {
  validateIdHasSpace,
  validateIdLength,
  validateIdRegex,
} from "@/util/function/validation/id";
// components
import ValidationFieldBox from "./ValidationFieldBox";
// error messages
import {
  ID_LENGTH_ERROR_MESSAGE,
  ID_RULE_ERROR_MESSAGE,
  ID_SPACE_ERROR_MESSAGE,
} from "@/constants/validation/errorMessage";

export default function IdValidateField({ id }: { id: string }) {
  const validationResults = [
    {
      isValid: validateIdLength(id),
      message: ID_LENGTH_ERROR_MESSAGE,
    },
    {
      isValid: validateIdRegex(id),
      message: ID_RULE_ERROR_MESSAGE,
    },
    {
      isValid: validateIdHasSpace(id),
      message: ID_SPACE_ERROR_MESSAGE,
    },
  ];

  return <ValidationFieldBox validationResults={validationResults} />;
}
