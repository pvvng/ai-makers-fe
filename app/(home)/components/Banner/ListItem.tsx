"use client";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBook,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import classNames from "classnames";

const bannerList = [
  { icon: faLightbulb, label: "AI 추천" },
  { icon: faAward, label: "공모전" },
  { icon: faBook, label: "스터디" },
];

const defaultListState = [true, false, false];

export default function ListItem() {
  const [listState, setListState] = useState(defaultListState);

  const listStateHandler = (index: number) => {
    setListState(listState.map((_, i) => i === index));
  };

  const getListItemsClassnameByListState = (index: number) => {
    return classNames(
      listState[index]
        ? "mb-2 p-2 px-4 font-bold rounded bg-blue-500 text-white shadow-lg transition-all"
        : "mb-2 p-2 px-4 font-bold"
    );
  };

  return (
    <div className="w-2/12">
      <ul className="p-2 cursor-pointer text-gray-600">
        {bannerList.map((listItem, index) => (
          <li
            key={listItem.label}
            className={getListItemsClassnameByListState(index)}
            onClick={() => listStateHandler(index)}
          >
            <FontAwesomeIcon icon={listItem.icon} /> {listItem.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
