import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-4 pt-10 pb-10 px-8">
      <h3 className="text-3xl font-black">LOGO</h3>
      <Link
        href="https://kr.freepik.com"
        target="_blank"
        className="text-gray-500 font-medium"
      >
        3D 이미지 출처 / freepik
      </Link>
    </footer>
  );
}
