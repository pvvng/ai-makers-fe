// function
import { changeValidationIconType } from "@/util/function/validation/password";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// classNames
import classNames from "classnames";

export default function ValidationFieldBox({
  validationResults,
}: {
  validationResults: { isValid: boolean; message: string }[];
}) {
  return (
    <div className="w-full bg-white border mt-2 p-3 shadow">
      {validationResults.map((validationResult, index) => (
        <ValidationMessage
          key={index}
          isValid={validationResult.isValid}
          message={validationResult.message}
        />
      ))}
    </div>
  );
}

function ValidationMessage({
  isValid,
  message,
}: {
  isValid: boolean;
  message: string;
}) {
  return (
    <p
      className={classNames({
        "text-blue-500": isValid,
        "text-orange-500": !isValid,
      })}
    >
      <FontAwesomeIcon icon={changeValidationIconType(isValid)} /> {message}
    </p>
  );
}
