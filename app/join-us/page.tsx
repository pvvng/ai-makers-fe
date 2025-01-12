import { Metadata } from "next";
import JoinUsBody from "./components/Body";
import JoinUsHeader from "./components/Header";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function SignInPage() {
  return (
    <div className="max-w-screen-xl px-36">
      <JoinUsHeader />
      <JoinUsBody />
    </div>
  );
}
