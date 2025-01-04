"use client";

import { ColorKey, colorMatch } from "@/constants";

export function Button({
  buttonText,
  color,
  type,
  handleClick,
}: {
  buttonText: string;
  color: ColorKey;
  type?: "submit" | "reset" | "button" | undefined;
  handleClick?: () => void;
}) {
  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2`}
      onClick={handleClick}
      type={type}
    >
      {buttonText}
    </button>
  );
}
