// store
import useLocationStore from "@/store/useLocationStore";
import { useSelectorStore } from "@/store/useSelectorStore";
// types
import { FormElment, FormFieldName, FormValues } from "@/types/form";
import { FormEvent } from "react";
// functions
import { validateFormValues } from "../function/validation/form/validateFormValues";
import fetchJoinUs from "../function/fetch/fetchJoinUs";
import getForm from "../function/validation/form/validateForm";

export default function useJoinFormHandler() {
  const storeValue = useGetStoreValue();

  function joinFormHandler(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    const form = getForm(e);
    if (!form) return;

    const formValues: FormValues = [...getFormValues(form), ...storeValue];

    const validationResult = validateFormValues(formValues);

    if (validationResult) {
      fetchJoinUs(formValues);

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

function useGetStoreValue(): { name: FormFieldName; value: string }[] {
  const { selectedData } = useSelectorStore();
  const { language, day } = selectedData;
  const { selectedDistricts: location } = useLocationStore();

  return [
    createField("language", language),
    createField("day", day),
    createField("location", location),
  ];
}

function createField(name: FormFieldName, value: string[]) {
  return { name, value: stringifyArray(value) };
}

function stringifyArray(arr: string[]) {
  return arr.join(",");
}
