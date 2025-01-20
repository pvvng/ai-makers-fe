"use client";
// store
import useLocationStore, { SelectType } from "@/store/useLocationStore";
// classname
import classNames from "classnames";

export default function LoactionButton({
  value,
  type,
}: {
  value: string;
  type: SelectType;
}) {
  const buttonClassname = getButtonColorClassname(value, type);
  const clickHandler = getClickHandler(type);

  return (
    <button
      type="button"
      className={buttonClassname}
      onClick={() => clickHandler(value)}
    >
      {value}
    </button>
  );
}

function getClickHandler(type: SelectType) {
  const { areaHandler, citiesHandler, districtHandler } = useLocationStore();

  const clickHandlerObject = {
    city: citiesHandler,
    area: areaHandler,
    district: districtHandler,
  };

  return clickHandlerObject[type];
}

function getButtonColorClassname(value: string, type: SelectType) {
  const { getSelectedButtonColor } = useLocationStore();

  const isButtonSelected = getSelectedButtonColor(value, type);

  return classNames(`block w-full p-2 border mb-2`, {
    "bg-blue-500 text-white": isButtonSelected,
  });
}
