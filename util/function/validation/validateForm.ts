import { INVALID_FORM_MESSAGE } from "@/constants/validation/invalidForm";
import { FormEvent } from "react";

export default function getForm(e: FormEvent<HTMLButtonElement>) {
  const form = (e.target as HTMLButtonElement).form;

  if (!form) {
    alert(INVALID_FORM_MESSAGE);
    return;
  }

  return form;
}
