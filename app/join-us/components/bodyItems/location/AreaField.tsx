"use client";
// store
import LoactionButton from "./LoactionButton";
import useLocationStore from "@/store/useLocationStore";
// data get function
import { areaKeys } from "@/util/function/location/getAreaData";

export default function AreaField() {
  const { areaHandler } = useLocationStore();

  return (
    <div className="md:w-3/12 w-1/2 px-1">
      <div className="border p-2 h-[200px] overflow-scroll shadow">
        {areaKeys.map((area) => (
          <LoactionButton
            key={area}
            value={area}
            type="area"
            clickHandler={areaHandler}
          />
        ))}
      </div>
    </div>
  );
}
