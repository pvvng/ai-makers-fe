'use client';

import useLocationStore from "@/store/useLocationStore";
import { useSelectorStore } from "@/store/useSelectorStore";

export default function HiddenInput() {
  const { selectedData } = useSelectorStore();
  const { selectedDistricts } = useLocationStore();

  return (
    <>
      <input name="language" className="hidden" defaultValue={stringifyArray(selectedData.language)} />
      <input name="day" className="hidden" defaultValue={stringifyArray(selectedData.day)} />
      <input name="location" className="hidden" defaultValue={stringifyArray(selectedDistricts)} />
    </>
  );
}

function stringifyArray(arr: string[]) {
  return arr.join(",");
}
