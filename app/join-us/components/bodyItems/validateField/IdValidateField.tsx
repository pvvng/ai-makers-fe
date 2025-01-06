// validation
import {
  validateIdHasSpace,
  validateIdLength,
  validateIdRegex,
} from "@/util/function/validation/id";
// components
import ValidationFieldBox from "./ValidationFieldBox";

export default function IdValidateField({ id }: { id: string }) {
  const validationResults = [
    {
      isValid: validateIdLength(id),
      message: "아이디는 6자 이상 20자 이하로 입력해주세요.",
    },
    {
      isValid: validateIdRegex(id),
      message: "아이디는 특수문자를 제외하고 영문, 숫자를 포함해주세요.",
    },
    {
      isValid: validateIdHasSpace(id),
      message: "아이디에는 공백이 포함될 수 없습니다.",
    },
  ];

  return <ValidationFieldBox validationResults={validationResults} />;
}
