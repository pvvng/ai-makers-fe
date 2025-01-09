// function
import getForm from "../function/validation/validateForm";
// store
import useCheckboxStore from "@/store/useCheckBoxStore";
// type
import { FormEvent } from "react";
// custom hook
import useIDLocalStorage from "./useIDLocalStorage";

export default function useSignInHandler() {
  const { rememberId } = useIDLocalStorage();

  function signInhandler(e: FormEvent<HTMLButtonElement>) {
    const { rememberIdChecked, autoLoginChecked } = getCheckedState();

    e.preventDefault();

    const form = getForm(e);
    if (!form) return;

    const id = getNamedItemValue(form, "id");
    const password = getNamedItemValue(form, "password");

    rememberId(id, rememberIdChecked);

    form.submit();
  }

  return { signInhandler };
}

function getCheckedState() {
  const checkedState = useCheckboxStore.getState().checkedStates;
  const { rememberId, autoLogin } = checkedState;

  return { rememberIdChecked: rememberId, autoLoginChecked: autoLogin };
}

function getNamedItemValue(form: HTMLFormElement, name: string): string {
  return (form.elements.namedItem(name) as HTMLInputElement)?.value;
}
