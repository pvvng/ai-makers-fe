import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "홈",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl">AI-Makers</h1>
        <Link className="hover:underline text-blue-900" href="/auth/login">
          로그인
        </Link>
        <span> | </span>
        <Link className="hover:underline text-blue-900" href="/auth/join-us">
          회원가입
        </Link>
      </div>
    </div>
  );
}
