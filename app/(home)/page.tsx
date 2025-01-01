import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
      <Link className="hover:underline text-blue-900" href="/auth/login">
        로그인
      </Link>
      <br />
      <Link className="hover:underline text-blue-900" href="/auth/join-us">
        회원가입
      </Link>
    </div>
  );
}
