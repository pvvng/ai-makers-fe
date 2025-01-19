import { REMEMBER_ID } from "@/constants/signInCheckBox";

export default function useIDLocalStorage() {
  function rememberId(id: string, checked: boolean) {
    if (checked && id) {
      localStorage.setItem(REMEMBER_ID, id);
    } else {
      localStorage.removeItem(REMEMBER_ID);
    }
  }

  function getRememberedId(): string {
    return localStorage.getItem(REMEMBER_ID) || "";
  }

  return { rememberId, getRememberedId };
}
