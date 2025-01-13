import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full p-4 pt-10 pb-10 px-8">
      <h3 className="text-3xl font-black">
        <Image
          src="/banner/rocket-login.webp"
          alt="로고"
          width={100}
          height={100}
        />
      </h3>
      <Link
        href="https://kr.freepik.com"
        target="_blank"
        className="text-gray-500 font-medium"
      >
        3D 이미지 출처 / freepik
      </Link>
    </div>
  );
}
