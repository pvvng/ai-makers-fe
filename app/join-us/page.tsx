import { Metadata } from "next";
import JoinButton from "./components/JoinButton";
import JoinUsBody from "./components/Body";
import JoinUsHeader from "./components/Header";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function SignInPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 lg:px-48 sm:px-14">
      <JoinUsHeader />
      <JoinUsBody />
    </div>
  );
}
