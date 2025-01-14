// form event validation
export type FormFieldName =
  | "id" | "password"
  | "confirmPassword" | "nickname"
  | "birth" | "gender" | "purpose"
  | "interest" | "contest" | "language"
  | "day" | "location";

export type FormValues = {
  name: FormFieldName;
  value: string;
}[];

export type FormElment = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
