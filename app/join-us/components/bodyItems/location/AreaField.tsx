"use client";
// store
import LoactionButton from "./LoactionButton";
import useLocationStore from "@/store/useLocationStore";
// data get function
import { areaKeys } from "@/util/function/getAreaData";

export default function AreaField() {
  const { areaHandler } = useLocationStore();

  return (
    <div className="w-1/4 px-1 border p-2 h-[250px] overflow-scroll shadow">
      {areaKeys.map((area) => (
        <LoactionButton
          key={area}
          value={area}
          type="area"
          clickHandler={areaHandler}
        />
      ))}
    </div>
  );
}
