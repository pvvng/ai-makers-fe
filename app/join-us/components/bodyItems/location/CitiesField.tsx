"use client";
// component
import LoactionButton from "./LoactionButton";
// store
import useLocationStore from "@/store/useLocationStore";
// function
import { getCities } from "@/util/function/getAreaData";

export default function CitiesField() {
  return (
    <div className="w-1/4 px-1 border p-2 h-[250px] overflow-scroll shadow">
      <SelectedAreaMap />
    </div>
  );
}

function SelectedAreaMap() {
  const { selectedArea } = useLocationStore();

  if (selectedArea) {
    return getCities(selectedArea).map((city) => (
      <LoactionButton key={city} value={city} type="city" />
    ));
  }

  return null;
}
