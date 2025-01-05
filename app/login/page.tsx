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
    <div className="px-3 sm:px-8 md:px-10 lg:px-20">
      <GoMainLink />
      <div className="w-full bg-white md:p-20 sm:p-10 p-4 flex flex-wrap justify-center items-center min-h-[500px]">
        <LogoField />
        <SignInField />
      </div>
    </div>
  );
}
