"use client";
// component
import LoactionButton from "./LoactionButton";
// store
import useLocationStore from "@/store/useLocationStore";
// function
import { getDistricts } from "@/util/function/getAreaData";

export default function DistrctField() {
  return (
    <div className="w-1/2 px-1 border p-2 h-[250px] overflow-scroll shadow">
      <div className="flex flex-wrap">
        <DistrictMapBox />
      </div>
    </div>
  );
}

function DistrictMapBox() {
  const { selectedCity, selectedArea } = useLocationStore();

  if (selectedCity && selectedArea) {
    const districtData = getDistricts(selectedArea, selectedCity);

    return districtData.map((district) => (
      <div className="px-1 w-1/2" key={district}>
        <LoactionButton value={district} type="district" />
      </div>
    ));
  }

  return null;
}
