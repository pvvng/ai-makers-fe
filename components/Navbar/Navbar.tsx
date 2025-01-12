"use client";
// components
import NavLogo from "./NavLogo";
import NavSearchInput from "./NavSearch";
import NavLinks from "./Links";
// react
import { usePathname } from "next/navigation";
// constants
import { hiddenNavbarPath } from "@/constants/hiddenNavbarPath";
// classname bind
import classNames from "classnames";

export default function Navbar() {
  const path = usePathname();

  return (
    <div className={getNavbarClass(path)}>
      <NavLogo />
      <NavSearchInput />
      <NavLinks />
    </div>
  );
}

function getNavbarClass(path: string | null) {
  if (path && hiddenNavbarPath.includes(path)) {
    return classNames(
      "hidden " +
        "w-full bg-white p-2 px-6 flex gap-3 justify-center items-center h-[80px] shadow-md"
    );
  }

  return "w-full bg-white p-2 px-6 flex gap-3 justify-center items-center h-[80px] shadow-md";
}
