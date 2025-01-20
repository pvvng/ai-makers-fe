"use client";
// component
import LoactionButton from "./LoactionButton";
// constant
import { areaKeys } from "@/util/function/getAreaData";

export default function AreaField() {
  return (
    <div className="w-1/4 px-1 border p-2 h-[250px] overflow-scroll shadow">
      <AreaKeysMap />
    </div>
  );
}

function AreaKeysMap() {
  return areaKeys.map((area) => (
    <LoactionButton
      key={area}
      value={area}
      type="area"
    />
  ));
}
