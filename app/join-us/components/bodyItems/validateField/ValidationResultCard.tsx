// func
import getValidationIconType from "@/util/function/getValidationIconType";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// type
import { ValidationResultType } from "@/types/joinUs";

export default function ValidationResultCard({
  validationResults,
}: {
  validationResults: ValidationResultType;
}) {
  return validationResults.map((validationData, index) => {
    const { ok: isValid, message } = validationData;
    const textColor = isValid ? "text-blue-500" : "text-orange-500";

    return (
      <p key={message + index} className={textColor}>
        <FontAwesomeIcon icon={getValidationIconType(isValid)} /> {message}
      </p>
    );
  });
}
