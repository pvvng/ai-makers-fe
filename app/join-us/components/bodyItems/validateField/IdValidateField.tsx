// validation func
import {
  validateIdHasSpace,
  validateIdLength,
  validateIdRegex,
} from "@/util/function/validation/joinUs/id";
// function
import { changeValidationIconType } from "@/util/function/validation/password";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ValidationResultType = {
  ok: boolean;
  message: string;
}[];

export default function IdValidateField({ id }: { id: string }) {
  const validationResults: ValidationResultType = [
    validateIdLength(id),
    validateIdRegex(id),
    validateIdHasSpace(id),
  ];

  return (
    <div className="w-full bg-white border mt-2 p-3 shadow">
      <ValidationResultCard validationResults={validationResults} />
    </div>
  );
}

function ValidationResultCard({
  validationResults,
}: {
  validationResults: ValidationResultType;
}) {
  return validationResults.map((validationData, index) => {
    const { ok: isValid, message } = validationData;
    const textColor = isValid ? "text-blue-500" : "text-orange-500";

    return (
      <p key={message + index} className={textColor}>
        <FontAwesomeIcon icon={changeValidationIconType(isValid)} /> {message}
      </p>
    );
  });
}
