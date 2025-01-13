// components
import LinkImage from "./LinkImage";
// constants
import {
  afterSignImagePropsData,
  beforeSignImagePropsData,
} from "@/constants/main-banner";
// next
import Image from "next/image";
// classnames
import classNames from "classnames";

export default function SignBanner({
  type,
}: {
  type: "loggedIn" | "loggedOut";
}) {
  const imagePropsData =
    type === "loggedIn" ? afterSignImagePropsData : beforeSignImagePropsData;

  return (
    <div className="w-full p-4 pt-10 pb-5 px-8">
      <div className="flex justify-center items-center gap-2 h-[200px]">
        <AdvertiseImage type={type} />
        {imagePropsData.map((imageData) => (
          <LinkImage key={imageData.image} {...imageData} />
        ))}
      </div>
    </div>
  );
}

function AdvertiseImage({ type }: { type: "loggedIn" | "loggedOut" }) {
  const imageWidthClass = classNames({
    "w-3/6": type === "loggedIn",
    "w-4/6": type === "loggedOut",
  });

  return (
    <div
      className={classNames(
        "relative h-full transition-all cursor-pointer",
        imageWidthClass
      )}
    >
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
