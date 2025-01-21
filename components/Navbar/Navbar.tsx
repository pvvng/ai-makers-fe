"use client";
// components
import NavLogo from "./NavLogo";
import NavSearchInput from "./NavSearch";
import NavLinks from "./Links";
// react
import { usePathname } from "next/navigation";
// classname bind
import classNames from "classnames";

const hiddenNavbarPath = ["/login", "/join-us"];

export default function Navbar() {
  const path = usePathname();
  const isHidden = path && hiddenNavbarPath.includes(path);

  const getNavbarClassnames = () => {
    return classNames(
      "w-full bg-white p-2 px-10 flex gap-3 justify-center items-center min-h-[80px] shadow-md",
      { hidden: isHidden }
    );
  };
  
  return (
    <nav className={getNavbarClassnames()}>
      <NavLogo />
      <NavSearchInput />
      <NavLinks />
    </nav>
  );
}
