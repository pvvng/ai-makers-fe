export const ID_INVALID_ERROR_MESSAGE = "아이디를 입력해주세요.";
export const ID_SPACE_ERROR_MESSAGE = "아이디에 공백을 포함할 수 없습니다.";
export const ID_RULE_ERROR_MESSAGE = "아이디는 특수문자를 제외하고 영문, 숫자를 포함해주세요.";
export const ID_LENGTH_ERROR_MESSAGE = "아이디는 6자 이상 20자 이하로 입력해주세요.";

export const PASSWORD_INVALID_ERROR_MESSAGE = "비밀번호를 입력해주세요.";
export const PASSWORD_LENGTH_ERROR_MESSAGE = "비밀번호는 8자 이상 20자 이하로 입력해주세요.";
export const PASSWORD_RULE_ERROR_MESSAGE = "비밀번호는 영문, 숫자, 특수문자를 포함해주세요.";
export const PASSWORD_SPACE_ERROR_MESSAGE = "비밀번호에 공백을 포함할 수 없습니다.";
export const PASSWORD_CONFIRM_ERROR_MESSAGE = "비밀번호가 일치하지 않습니다.";

export const NICKNAME_INVALID_ERROR_MESSAGE = "닉네임을 입력해주세요.";
export const NICKNAME_RULE_ERROR_MESSAGE = "닉네임은 특수문자를 제외하고 한글, 영문, 숫자를 포함해주세요.";
export const NICKNAME_LENGTH_ERROR_MESSAGE = "닉네임은 2자 이상 10자 이하로 입력해주세요.";

export const BIRTH_INVALID_ERROR_MESSAGE = "생년월일을 입력해주세요.";
export const BIRTH_LENGTH_ERROR_MESSAGE = "생년월일은 8자리로 입력해주세요.";
export const BIRTH_RULE_ERROR_MESSAGE = "생년월일은 숫자로 입력해주세요.";
export const BIRTH_RANGE_ERROR_MESSAGE = "생년월일은 1900년 1월 1일부터 2021년 12월 31일 사이로 입력해주세요.";

export const SELECT_REQUIRED_ERROR_MESSAGE = (type: string) => `${type} 필드는 필수 항목입니다.`;