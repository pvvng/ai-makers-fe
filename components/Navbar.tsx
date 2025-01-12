import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white p-2 px-3 flex flex-wrap justify-center items-center h-[80px]">
      <div className="w-2/12 px-2">
        <Image
          src="/세균.webp"
          alt="LOGO"
          width={50}
          height={50}
          className="rounded"
        />
      </div>
      <div className="w-6/12 px-2 relative">
        <input
          className="h-[40px] rounded border border-blue-500 w-full px-2 pr-10"
          placeholder="공모전 / 스터디 찾기"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
        />
      </div>
      <div className="w-4/12 px-2 text-end flex gap-2 justify-end items-center">
        <Link className="font-medium text-gray-800" href="/login">
          로그인
        </Link>
        <Link className="font-medium text-gray-800" href="join-us">
          회원가입
        </Link>
        <Link href="/about-us" className="ml-2 p-1 px-2 border border-gray-600 text-gray-600 font-medium">
          더 알아보기
        </Link>
      </div>
    </div>
  );
}
