import { Metadata } from "next";
import JoinUsBody from "./components/Body";
import JoinUsHeader from "./components/Header";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function SignInPage() {
  return (
    <div className="px-48 bg-gray-100 p-5">
      <JoinUsHeader />
      <JoinUsBody />
    </div>
  );
}
