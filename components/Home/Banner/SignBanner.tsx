// components
import LinkImage from "./LinkImage";
// constants
import {
  afterSignImagePropsData,
  beforeSignImagePropsData,
} from "@/constants/main/mainBanner";
// next
import Image from "next/image";

export default function SignBanner({
  type,
}: {
  type: "loggedIn" | "loggedOut";
}) {
  const imagePropsData =
    type === "loggedIn" ? afterSignImagePropsData : beforeSignImagePropsData;

  return (
    <section className="w-full p-4 pt-10 pb-5 px-8">
      <div className="flex justify-center items-center gap-2 h-[120px]">
        <AdvertiseImage />
        {imagePropsData.map((imageData) => (
          <LinkImage key={imageData.image} {...imageData} />
        ))}
      </div>
    </section>
  );
}

function AdvertiseImage() {
  return (
    <div className="w-2/3 relative h-full transition-all cursor-pointer">
      <Image
        src="/sample/배너샘플커비.webp"
        alt="배너"
        fill
        priority
        sizes="800px"
        className="object-cover rounded-2xl"
      />
    </div>
  );
}
