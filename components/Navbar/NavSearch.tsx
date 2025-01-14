"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function NavSearchInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleButtonClick() {
    inputRef.current && console.log(inputRef.current.value);
  }

  return (
    <div className="w-6/12">
      <div className="w-full relative max-w-[480px]">
        <input
          ref={inputRef}
          className="h-[40px] rounded border border-blue-500 w-full px-2 pr-10"
          placeholder="공모전 / 스터디 찾기"
          onKeyDown={(e) => {
            e.key === "Enter" && handleButtonClick();
          }}
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-xl"
          aria-label="검색"
          onClick={handleButtonClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
