"use client";
// component
import MyPageComponentHeader from "../ComponentHeader";
// icon
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Setting() {
  return (
    <div className="p-4 px-8">
      <MyPageComponentHeader icon={faGear} label="설정" />
    </div>
  );
}
