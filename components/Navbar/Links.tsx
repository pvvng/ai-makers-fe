import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="w-4/12 text-end flex gap-2 justify-end items-center">
      <Link className="font-medium text-gray-800" href="/login">
        로그인
      </Link>
      <Link className="font-medium text-gray-800" href="join-us">
        회원가입
      </Link>
      <Link
        href="/about-us"
        className="ml-2 p-1 px-2 border border-gray-600 text-gray-600 font-medium rounded"
      >
        더 알아보기
      </Link>
    </div>
  );
}
