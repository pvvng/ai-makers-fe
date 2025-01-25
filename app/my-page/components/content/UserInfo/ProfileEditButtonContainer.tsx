"use client";
// icon
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileEditButtonContainer() {
  return (
    <div className="w-1/5">
      <ProfileEditButton />
      <div className="clear-both" />
    </div>
  );
}

function ProfileEditButton() {
  return (
    <button
      className="float-end p-2 px-3 rounded-full bg-blue-500 border-white shadow-lg"
      onClick={() => console.log(123)}
    >
      <FontAwesomeIcon icon={faPenToSquare} className="font-dark text-white" />
    </button>
  );
}
