"use client";
// component
import BadgeBox from "./LocationBadgeBox";
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
