// type
import { Metadata } from "next";
// components
import GoMainLink from "./components/GoMainLink";
import LogoField from "./components/LogoField";
import SignInField from "./components/SignInField";

export const metadata: Metadata = {
  title: "로그인",
};

export default function SignInPage() {
  return (
    <div className="px-36">
      <GoMainLink />
      <div className="w-full bg-white p-4 flex gap-2 justify-center items-center min-h-[500px]">
        <LogoField />
        <SignInField />
      </div>
    </div>
  );
}
