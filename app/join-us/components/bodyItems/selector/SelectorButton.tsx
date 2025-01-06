"use client";

import { useSelectorStore } from "@/store/useSelectorStore";

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
    if (isActive) {
      removeItem(type, text);

      return;
    }

    addItem(type, text);
  };

  return (
    <button
      type="button"
      className={`w-full lg:h-18 md:h-16 sm:h-14 h-12 border flex items-center justify-center transition ${
        isActive ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
