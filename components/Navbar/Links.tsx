import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="w-4/12 text-end flex gap-2 justify-end items-center">
      <Link
        href="/about-us"
        className="ml-2 p-1 px-3 border border-gray-600 text-gray-600 font-medium rounded-full"
      >
        더 알아보기
      </Link>
    </div>
  );
}
