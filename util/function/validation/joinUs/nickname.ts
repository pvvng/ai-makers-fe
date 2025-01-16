// func
import getValidateResultObject from "../getValidateResultObject";
// constant
import {
  NICKNAME_INVALID_ERROR_MESSAGE,
  NICKNAME_LENGTH_ERROR_MESSAGE,
  NICKNAME_RULE_ERROR_MESSAGE,
} from "@/constants/validation/errorMessage";
import {
  MAX_NICKNAME_LENGTH,
  MIN_NICKNAME_LENGTH,
} from "@/constants/validation/length/nicknameLength";

const nicgkNameRegex = /^(?!\d+$)[a-zA-Z0-9가-힣]+$/;

export default function validateNickname(nickname: string) {
  const nicknameValidationResults = [
    validateNicknameExist(nickname),
    validateNicknameRegex(nickname),
    validateNicknameLength(nickname),
  ];

  const errorObject = nicknameValidationResults.find((v) => !v.ok);

  if (errorObject) {
    return errorObject;
  }

  return getValidateResultObject(true, "nickname 인증 성공");
}


function validateNicknameExist(nickname: string) {
  const nicknameExistValidation = !nickname;

  return getValidateResultObject(
    !nicknameExistValidation,
    NICKNAME_INVALID_ERROR_MESSAGE
  );
}

function validateNicknameRegex(nickname: string) {
  const nicknameRegexValidation = nicgkNameRegex.test(nickname);

  return getValidateResultObject(
    nicknameRegexValidation,
    NICKNAME_RULE_ERROR_MESSAGE
  );
}

function validateNicknameLength(nickname: string) {
  const nicknameLengthValidation =
    nickname.length >= MIN_NICKNAME_LENGTH ||
    nickname.length <= MAX_NICKNAME_LENGTH;

  return getValidateResultObject(
    nicknameLengthValidation,
    NICKNAME_LENGTH_ERROR_MESSAGE
  );
}
