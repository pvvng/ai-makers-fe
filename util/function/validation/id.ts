import { MAX_ID_LENGTH, MIN_ID_LENGTH } from "@/constants/validation/length/idLength";
import { INVALID_SPACE, INVALID_STRING } from "@/constants/validation/invalidString";
import { idRegex } from "@/constants/validation/regex";

export function validateIdLength(id: string) {
  return id.length >= MIN_ID_LENGTH && id.length <= MAX_ID_LENGTH;
}

export function validateIdRegex(id: string) {
  return idRegex.test(id);
}

export function validateIdHasSpace(id: string) {
  if (id === INVALID_STRING) {
    return false;
  }

  return !id.includes(INVALID_SPACE);
}
