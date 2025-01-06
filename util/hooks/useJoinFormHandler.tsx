import { useSelectorStore } from "@/store/useSelectorStore";
import { FormEvent } from "react";
import useLocationStore from "@/store/useLocationStore";
import { FormElment, FormFieldName, FormValues } from "@/types/form";
import { validateFormValues } from "../function/validation/validateFormValues";

export default function useJoinFormHandler() {
  const selctorValues = getSelectorValue();
  const locationValues = getLocationValue();

  function joinFormHandler(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    const form = (e.target as HTMLButtonElement).form;

    if (!form) {
      alert("제출 양식이 확인되지 않습니다. 다시 시도해주세요.");
      return;
    }

    const formValues: FormValues = [
      ...getFormValues(form),
      ...selctorValues,
      ...locationValues,
    ];

    const validation = validateFormValues(formValues);

    if (validation) {
      form.submit();
      return;
    }
  }

  return { joinFormHandler };
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

function getSelectorValue(): { name: FormFieldName; value: string }[] {
  const { selectedData } = useSelectorStore();
  const { language, day } = selectedData;

  return [
    { name: "language", value: JSON.stringify(language) },
    { name: "day", value: JSON.stringify(day) },
  ];
}

function getLocationValue(): { name: FormFieldName; value: string }[] {
  const { selectedDistricts } = useLocationStore();

  return [{ name: "location", value: JSON.stringify(selectedDistricts) }];
}
