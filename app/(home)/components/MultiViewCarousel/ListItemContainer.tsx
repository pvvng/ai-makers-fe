"use client";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBook,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
// classnames
import classNames from "classnames";

export default function ListItemContainer({
  listState,
  setListState,
}: {
  listState: number;
  setListState: React.Dispatch<React.SetStateAction<number>>;
}) {
  const bannerList = [
    { icon: faLightbulb, label: "AI 추천" },
    { icon: faAward, label: "공모전" },
    { icon: faBook, label: "스터디" },
  ];

  const getListClassnames = (index: number) => {
    const isActive = index === listState;
    const listClassname = classNames(
      "p-3 px-4 font-bold transition-all rounded hover:bg-gray-200",
      { "blue-gradient-tl text-white": isActive }
    );

    return listClassname;
  };

  return (
    <ul className="p-2 cursor-pointer text-gray-600 flex flex-col justify-center gap-2 h-[180px]">
      {bannerList.map((listItem, index) => (
        <li
          key={listItem.label}
          className={getListClassnames(index)}
          onClick={() => setListState(index)}
        >
          <FontAwesomeIcon icon={listItem.icon} /> {listItem.label}
        </li>
      ))}
    </ul>
  );
}
