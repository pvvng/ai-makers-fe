import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "마이페이지",
};

export default function Contest() {
  return (
    <div className="w-full p-4 pt-10 pb-5 px-8">
      <UserProfile />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="relative rounded-full overflow-hidden w-[200px] h-[200px] border-4 border-white shadow-lg blue-gradient-tl">
      <Image
        src="/user/user-queen.webp"
        alt="user-image"
        sizes="200px"
        className="object-contain"
        fill
        priority
      />
    </div>
  );
}
