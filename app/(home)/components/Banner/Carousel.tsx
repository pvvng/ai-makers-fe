"use client";
// icons
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// card
import BannerCard from "./BannerCard";
// react
import { useState } from "react";
// classnames
import classNames from "classnames";

const MIN_CAROUSEL_NUMBER = 0;
const MAX_CAROUSEL_NUMBER = 50;

export default function Carousel() {
  const [translateState, setTranslateState] = useState(0);

  const handleLeftClick = () => {
    setTranslateState((prev) =>
      Math.min(prev + MAX_CAROUSEL_NUMBER, MIN_CAROUSEL_NUMBER)
    );
  };

  const handleRightClick = () => {
    setTranslateState((prev) =>
      Math.max(prev - MAX_CAROUSEL_NUMBER, -MAX_CAROUSEL_NUMBER)
    );
  };

  const moveButtonData: {
    handler: () => void;
    type: "left" | "right";
  }[] = [
    { handler: handleLeftClick, type: "left" },
    { handler: handleRightClick, type: "right" },
  ];

  return (
    <div className="w-10/12 relative overflow-hidden">
      <div
        className="flex justify-start items-center relative w-[200%] transition-transform duration-500"
        style={{ transform: `translateX(${translateState}%)` }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <BannerCard key={i} data={i} />
        ))}
      </div>
      {moveButtonData.map((data) => (
        <CarouselMoveButton
          key={data.type}
          translateState={translateState}
          type={data.type}
          onClick={data.handler}
        />
      ))}
    </div>
  );
}

function CarouselMoveButton({
  translateState,
  type,
  onClick,
}: {
  translateState: number;
  type: "left" | "right";
  onClick: () => void;
}) {
  const getClassname = () => {
    return classNames(
      "absolute top-1/2 transform -translate-y-1/2 p-2 bg-gray-400 text-white rounded-full transition-all",
      {
        hidden:
          (type === "left" && translateState === MIN_CAROUSEL_NUMBER) ||
          (type === "right" && translateState === -MAX_CAROUSEL_NUMBER),
        block:
          !(type === "left" && translateState === MIN_CAROUSEL_NUMBER) &&
          !(type === "right" && translateState === -MAX_CAROUSEL_NUMBER),
        "left-2": type === "left",
        "right-2": type === "right",
      }
    );
  };

  return (
    <button className={getClassname()} onClick={onClick}>
      <FontAwesomeIcon icon={type === "left" ? faAngleLeft : faAngleRight} />
    </button>
  );
}
