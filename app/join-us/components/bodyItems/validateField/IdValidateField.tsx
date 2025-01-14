// validation func
import {
  validateIdHasSpace,
  validateIdLength,
  validateIdRegex,
} from "@/util/function/validation/joinUs/id";
// component
import ValidationResultCard from "./ValidationResultCard";
// type
import { ValidationResultType } from "@/types/joinUs";

export default function IdValidateField({ id }: { id: string }) {
  const validationResults: ValidationResultType = [
    validateIdHasSpace(id),
    validateIdLength(id),
    validateIdRegex(id),
  ];

  return (
    <div className="w-full bg-white border mt-2 p-3 shadow">
      <ValidationResultCard validationResults={validationResults} />
    </div>
  );
}
