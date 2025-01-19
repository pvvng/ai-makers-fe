"use client";
// store
import LoactionButton from "./LoactionButton";
import useLocationStore from "@/store/useLocationStore";
// data get function
import { getDistricts } from "@/util/function/getAreaData";

export default function DistrctField() {
  const { selectedCity, selectedArea } = useLocationStore();

  return (
    <div className="w-1/2 px-1 border p-2 h-[250px] overflow-scroll shadow">
      {selectedCity && selectedArea && (
        <DistrictMapBox
          districtData={getDistricts(selectedArea, selectedCity)}
        />
      )}
    </div>
  );
}

function DistrictMapBox({ districtData }: { districtData: string[] }) {
  const { handleDistrictSelect } = useLocationStore();

  return (
    <div className="flex flex-wrap">
      {districtData.map((district) => (
        <div className="px-2 w-1/2" key={district}>
          <LoactionButton
            value={district}
            clickHandler={handleDistrictSelect}
            type="district"
          />
        </div>
      ))}
    </div>
  );
}
