import {
  faBook,
  faBookmark,
  faGear,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sideBarItems = [
  { icon: faUser, label: "내 프로필" },
  { icon: faBook, label: "스터디" },
  { icon: faUserGroup, label: "친구" },
  { icon: faBookmark, label: "스크랩" },
  { icon: faGear, label: "설정" },
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
  return sideBarItems.map((item) => (
    <li
      key={item.label}
      className="w-full p-2 text-gray-600 rounded font-bold hover:bg-gray-200"
    >
      <FontAwesomeIcon icon={item.icon} /> {item.label}
    </li>
  ));
}
