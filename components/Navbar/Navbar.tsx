import NavLogo from "./NavLogo";
import NavSearchInput from "./NavSearch";
import NavLinks from "./Links";

export default function Navbar() {
  return (
    <div className="w-full bg-white p-2 px-6 flex gap-3 justify-center items-center h-[80px] shadow-md">
      <NavLogo />
      <NavSearchInput />
      <NavLinks />
    </div>
  );
}
