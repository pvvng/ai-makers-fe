import { FormEvent } from "react";

const INVALID_FORM_MESSAGE = "제출 양식이 확인되지 않습니다. 다시 시도해주세요.";

export default function getForm(e: FormEvent<HTMLButtonElement>) {
  const form = (e.target as HTMLButtonElement).form;

  if (!form) {
    alert(INVALID_FORM_MESSAGE);
    return;
  }

  return form;
}
