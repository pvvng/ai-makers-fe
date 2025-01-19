"use client";
// store
import LoactionButton from "./LoactionButton";
import useLocationStore from "@/store/useLocationStore";
// data get function
import { getCities } from "@/util/function/getAreaData";

export default function CitiesField() {
  const { selectedArea, citiesHandler } = useLocationStore();

  return (
    <div className="w-1/4 px-1">
      <div className="border p-2 h-[250px] overflow-scroll shadow">
        {selectedArea &&
          getCities(selectedArea).map((city) => (
            <LoactionButton
              key={city}
              value={city}
              type="city"
              clickHandler={citiesHandler}
            />
          ))}
      </div>
    </div>
  );
}
