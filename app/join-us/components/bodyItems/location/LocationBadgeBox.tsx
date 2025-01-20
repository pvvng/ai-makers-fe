import useLocationStore from "@/store/useLocationStore";
import LocationBadge from "./LocationBadge";

export default function BadgeBox() {
  const { selectedArea, selectedCity, selectedDistricts } = useLocationStore();

  if (!selectedArea && !selectedCity && selectedDistricts.length === 0) {
    return (
      <div className="ml-1 h-[48px] flex items-center">
        선택된 지역이 없습니다.
      </div>
    );
  }

  return (
    <div className="mb-2">
      <LocationBadge text={selectedArea} />
      {selectedArea && <span className="border border-r mr-2" />}

      <LocationBadge text={selectedCity} />
      {selectedCity && <span className="border border-r mr-2" />}

      {selectedDistricts.map((district) => (
        <LocationBadge key={district} text={district} />
      ))}
    </div>
  );
}
