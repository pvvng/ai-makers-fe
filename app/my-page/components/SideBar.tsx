"use client";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookmark,
  faGear,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useMyPageScrollStore } from "@/store/useMyPageScrollStore";
// classnames
import classNames from "classnames";

const sideBarItems = [
  { icon: faUser, label: "내 프로필", id: "userInfo" },
  { icon: faBook, label: "스터디", id: "studies" },
  // { icon: faUserGroup, label: "친구" },
  { icon: faBookmark, label: "스크랩한 스터디", id: "scrapedStudy" },
  { icon: faBookmark, label: "스크랩한 공모전", id: "scrapedContest" },
  { icon: faGear, label: "설정", id: "setting" },
];

export default function SideBar() {
  return (
    <div className="w-1/6 sticky top-14">
      <ul className="w-full flex flex-col gap-4 justify-center items-center cursor-pointer">
        <SideBarItemsMap />
      </ul>
    </div>
  );
}

function SideBarItemsMap() {
  const sections = useMyPageScrollStore((state) => state.sections);
  const activeSection = useMyPageScrollStore((state) => state.activeSection);

  const handleScroll = (id: string) => {
    const targetRef = sections[id]?.current;
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const listClassname = (id: string) =>
    classNames(
      `w-full p-2 rounded font-bold ${
        activeSection === id
          ? "bg-blue-500 text-white"
          : "text-gray-600 hover:bg-gray-200"
      }`
    );

  return sideBarItems.map((item) => (
    <li
      key={item.label}
      className={listClassname(item.id)}
      onClick={() => handleScroll(item.id)}
    >
      <FontAwesomeIcon icon={item.icon} /> {item.label}
    </li>
  ));
}
