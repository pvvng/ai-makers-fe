"use client";
// store
import useLocationStore, { SelectType } from "@/store/useLocationStore";

export default function LoactionButton({
  value,
  type,
  clickHandler,
}: {
  value: string;
  type: SelectType;
  clickHandler: (value: string) => void;
}) {
  const { selectButtonColor } = useLocationStore();

  return (
    <button
      type="button"
      className={`block w-full p-2 border mb-2 ${selectButtonColor(
        value,
        type
      )}`}
      onClick={() => clickHandler(value)}
    >
      {value}
    </button>
  );
}
