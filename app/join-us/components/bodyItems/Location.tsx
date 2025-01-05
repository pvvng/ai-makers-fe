// coponenets
import LocationHeader from "./location/LocationHeader";
import AreaField from "./location/AreaField";
import CitiesField from "./location/CitiesField";
import DistrctField from "./location/DistrctField";

export default function AvailabilityLocation() {
  return (
    <div id="ability-day" className="w-full">
      <LocationHeader />
      <div className="flex justify-center gap-1 mt-2 px-1 h-[300px]">
        <AreaField />
        <CitiesField />
        <DistrctField />
      </div>
    </div>
  );
}

      {/* 선택된 값 출력 */}
      {/* <div className="mt-4">
        <h6>선택된 지역:</h6>
        <p>1단계: {selectedArea || "선택 안됨"}</p>
        <p>2단계: {selectedCity || "선택 안됨"}</p>
        <p>
          3단계:{" "}
          {selectedDistricts.length > 0
            ? selectedDistricts.join(", ")
            : "선택 안됨"}
        </p>
      </div> */}
