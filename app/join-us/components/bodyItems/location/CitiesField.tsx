'use client';

import LoactionButton from "./LoactionButton";
import useLocationStore from "@/store/useLocationStore";
import { getCities } from "@/util/function/location/getAreaData";

export default function CitiesField() {
  const { selectedArea, selectedCity, citiesHandler } = useLocationStore();

  const selectedButtonColor = (value: string) =>
    selectedCity === value ? "bg-blue-500 text-white" : "";

  return (
    <div className="w-3/12 border p-2 overflow-scroll">
      {selectedArea &&
        getCities(selectedArea).map((city) => (
          <LoactionButton
            key={city}
            value={city}
            selectedButtonColor={() => selectedButtonColor(city)}
            clickHandler={citiesHandler}
          />
        ))}
    </div>
  );
}
