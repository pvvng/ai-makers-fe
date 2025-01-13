import { afterSignImagePropsData } from "@/constants/main-banner";
import Image from "next/image";
import LinkImage from "./LinkImage";

export default function AfterSignBanner() {
  return (
    <div className="w-full p-4 pt-10 pb-5 px-8">
      <div className="flex justify-center items-center gap-2 h-[200px]">
        <AdvertiseImage />
        {afterSignImagePropsData.map((imageData) => (
          <LinkImage key={imageData.image} {...imageData} />
        ))}
      </div>
    </div>
  );
}

function AdvertiseImage() {
  return (
    <div className="relative w-3/6 h-full transition-all cursor-pointer">
      <Image
        src="/sample/배너샘플커비.webp"
        alt="배너"
        fill
        priority
        sizes="800px"
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-center">
        큰 배너 이미지 샘플
      </div>
    </div>
  );
}
