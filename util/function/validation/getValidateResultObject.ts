export default function getValidateResultObject(
  isValid: boolean,
  message: string
) {
  return { ok: isValid, message: message };
}
