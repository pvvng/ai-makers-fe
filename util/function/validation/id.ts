import { idRegex } from "@/constants/regex";

export function validateIdLength(id: string) {
  return id.length >= 6 && id.length <= 20;
}

export function validateIdRegex(id: string) {
  return idRegex.test(id);
}

export function validateIdHasSpace(id: string) {
  if (id === "") {
    return false;
  }

  return !id.includes(" ");
}
