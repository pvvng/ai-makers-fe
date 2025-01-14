"use client";

import {
  MAX_ID_LENGTH,
  MIN_ID_LENGTH,
} from "@/constants/validation/length/idLength";

export default function IdInput({ setId }: { setId: (id: string) => void }) {
  return (
    <input
      className="border w-full h-12 p-2 mt-2 shadow"
      placeholder="아이디"
      name="id"
      required
      minLength={MIN_ID_LENGTH}
      maxLength={MAX_ID_LENGTH}
      onChange={(e) => setId(e.target.value)}
    />
  );
}
