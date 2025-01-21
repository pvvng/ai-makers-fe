// component
import JoinUsBody from "./components/Body";
import JoinUsHeader from "./components/Header";
// type
import { Metadata } from "next";

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
