'use client';

import LoactionButton from "./LoactionButton";
import useLocationStore from "@/store/useLocationStore";
import { getDistricts } from "@/util/function/location/getAreaData";

export default function DistrctField() {
  const {
    selectedCity,
    selectedArea,
    selectedDistricts,
    handleDistrictSelect,
  } = useLocationStore();

  const selectedButtonColor = (value: string) =>
    selectedDistricts.includes(value) ? "bg-blue-500 text-white" : "";

  return (
    <div className="w-6/12 border p-2 overflow-scroll">
      {selectedCity && selectedArea && (
        <div className="flex flex-wrap">
          {getDistricts(selectedArea, selectedCity).map((district) => (
            <div className="px-2 w-1/2" key={district}>
              <LoactionButton
                value={district}
                clickHandler={handleDistrictSelect}
                selectedButtonColor={() => selectedButtonColor(district)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
