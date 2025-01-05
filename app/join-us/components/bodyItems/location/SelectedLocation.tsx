"use client";
// store
import useLocationStore from "@/store/useLocationStore";
// fontawesome
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectedLocation() {
  return (
    <div className="mt-4 border mx-1 p-2 shadow">
      <Explain />
      <hr className="border mt-2" />
      <BadgeBox />
    </div>
  );
}

function Explain() {
  return (
    <div className="text-blue-500">
      <FontAwesomeIcon icon={faLocationDot} /> 버튼을 클릭하여 지역을
      선택하세요.
    </div>
  );
}

function BadgeBox() {
  const { selectedArea, selectedCity, selectedDistricts } = useLocationStore();

  if (!selectedArea && !selectedCity && selectedDistricts.length === 0) {
    return <p className="mt-3 mb-2 ml-1">선택된 지역이 없습니다.</p>;
  }

  return (
    <div className="mt-3 mb-2">
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

function LocationBadge({ text }: { text: string | null }) {
  if (!text) {
    return;
  }

  return (
    <span className="bg-blue-500 text-white p-1 px-2 rounded-lg mr-2 mt-2 inline-block whitespace-nowrap">
      {text}
    </span>
  );
}
