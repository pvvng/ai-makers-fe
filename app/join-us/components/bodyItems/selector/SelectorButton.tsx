"use client";

import { useSelectorStore } from "@/store/useSelectorStore";
import classNames from "classnames";

export default function SelectorButton({
  text,
  type,
}: {
  text: string;
  type: "language" | "day";
}) {
  const { selectedData, addItem, removeItem } = useSelectorStore();

  const isActive = selectedData[type].includes(text);

  const handleClick = () => {
    isActive ? removeItem(type, text) : addItem(type, text);
  };

  const getSelectorButtonClassname = () => {
    return classNames(
      "w-full h-12 border flex items-center justify-center transition",
      {
        "bg-blue-500 text-white": isActive,
        "bg-white text-black": !isActive,
      }
    );
  };

  return (
    <button
      type="button"
      className={getSelectorButtonClassname()}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
