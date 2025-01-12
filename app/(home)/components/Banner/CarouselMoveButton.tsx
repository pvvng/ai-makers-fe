"use client";
// constants
import {
  MAX_CAROUSEL_NUMBER,
  MIN_CAROUSEL_NUMBER,
} from "@/constants/bannerCarousel";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// classname
import classNames from "classnames";

export default function CarouselMoveButton({
  translateState,
  type,
  onClick,
}: {
  translateState: number;
  type: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button className={getClassname(type, translateState)} onClick={onClick}>
      <FontAwesomeIcon icon={type === "left" ? faAngleLeft : faAngleRight} />
    </button>
  );
}

const getClassname = (type: "left" | "right", translateState: number) => {
  return classNames(
    "absolute top-1/2 transform -translate-y-1/2 p-2 bg-gray-400 text-white rounded-full transition-all opacity-50 hover:opacity-100",
    {
      hidden:
        (type === "left" && translateState === MIN_CAROUSEL_NUMBER) ||
        (type === "right" && translateState === -MAX_CAROUSEL_NUMBER),
      block:
        !(type === "left" && translateState === MIN_CAROUSEL_NUMBER) &&
        !(type === "right" && translateState === -MAX_CAROUSEL_NUMBER),
      "-left-2": type === "left",
      "-right-2": type === "right",
    }
  );
};
