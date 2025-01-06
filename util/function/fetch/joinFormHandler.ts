import { FormElment, FormFieldName, FormValues } from "@/types/form";
import { FormEvent } from "react";
import { validateFormValues } from "../validation/validateFormValues";

const REDIRECT_PAGE = "/login";

export function joinFormHandler(e: FormEvent<HTMLButtonElement>) {
  e.preventDefault();

  const form = (e.target as HTMLButtonElement).form;

  if (!form) {
    alert("제출 양식이 확인되지 않습니다. 다시 시도해주세요.");
    return;
  }

  const formValues: FormValues = [...getFormValues(form)];

  const validation = validateFormValues(formValues);

  if (validation) {
    form.submit();

    window.location.href = REDIRECT_PAGE;

    return;
  }
}

function getFormValues(
  form: HTMLFormElement
): { name: FormFieldName; value: string }[] {
  return Array.from(form.elements)
    .filter(
      (element): element is FormElment =>
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement ||
        element instanceof HTMLSelectElement
    )
    .filter((element) => element.name) // name 속성이 있는 요소만 필터링
    .map((element) => ({
      name: element.name as FormFieldName, // 타입 단언
      value: element.value.trim(), // 공백 제거
    }));
}
