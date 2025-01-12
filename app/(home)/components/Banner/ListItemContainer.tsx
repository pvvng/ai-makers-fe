"use client";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBook,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
// react
import { Dispatch, SetStateAction, useState } from "react";
// classnames
import classNames from "classnames";

const bannerList = [
  { icon: faLightbulb, label: "AI 추천" },
  { icon: faAward, label: "공모전" },
  { icon: faBook, label: "스터디" },
];

export default function ListItemContainer({
  listState,
  setListState,
}: {
  listState: number;
  setListState: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="w-2/12">
      <ul className="p-2 cursor-pointer text-gray-600">
        <ListMap listState={listState} setListState={setListState} />
      </ul>
    </div>
  );
}

function ListMap({
  listState,
  setListState,
}: {
  listState: number;
  setListState: Dispatch<SetStateAction<number>>;
}) {
  return bannerList.map((listItem, index) => {
    const isActive = index === listState;

    return (
      <li
        key={listItem.label}
        className={classNames("mb-2 p-2 px-4 font-bold transition-all", {
          "rounded bg-blue-500 text-white shadow-lg": isActive,
        })}
        onClick={() => setListState(index)}
      >
        <FontAwesomeIcon icon={listItem.icon} /> {listItem.label}
      </li>
    );
  });
}
