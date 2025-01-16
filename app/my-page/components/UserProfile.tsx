import Image from "next/image";

export default function UserProfile({ profile }: { profile: string }) {
  return (
    <div className="w-1/4">
      <div className="relative rounded-full overflow-hidden w-[180px] h-[180px] border-4 bg-gray-100 border-white shadow-lg -mt-10 mx-auto">
        <Image
          src={`/user/${profile}.webp`}
          alt={profile}
          sizes="200px"
          className="object-contain"
          fill
          priority
        />
      </div>
    </div>
  );
}
