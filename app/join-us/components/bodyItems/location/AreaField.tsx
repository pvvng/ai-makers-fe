'use client';

import LoactionButton from "./LoactionButton";
import useLocationStore from "@/store/useLocationStore";
import { areaKeys } from "@/util/function/location/getAreaData";

export default function AreaField() {
  const { selectedArea, areaHandler } = useLocationStore();

  const selectedButtonColor = (value: string) =>
    selectedArea === value ? "bg-blue-500 text-white" : "";

  return (
    <div className="w-3/12 border p-2 overflow-scroll">
      {areaKeys.map((area) => (
        <LoactionButton
          key={area}
          value={area}
          selectedButtonColor={() => selectedButtonColor(area)}
          clickHandler={areaHandler}
        />
      ))}
    </div>
  );
}
