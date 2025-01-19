"use client";
// icon
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// next
import Image from "next/image";

export default function UserProfile({ profile }: { profile: string }) {
  return (
    <div className="w-1/4">
      <div className="relative rounded-full w-[180px] h-[180px] bg-gray-100 border-white shadow-lg -mt-10 mx-auto">
        <Image
          src={`/user/${profile}.webp`}
          alt={profile}
          sizes="200px"
          className="object-contain overflow-hidden rounded-full"
          fill
          priority
        />
        <ProfileEditButton />
      </div>
    </div>
  );
}

function ProfileEditButton({}: {}) {
  return (
    <button className="absolute p-2 px-3 rounded-full bg-blue-500 border-4 border-white shadow-lg bottom-0 right-0">
      <FontAwesomeIcon icon={faPenToSquare} className="font-dark text-white" />
    </button>
  );
}
