import { BannerPropsType } from "@/types/mainBanner";
import Image from "next/image";
import Link from "next/link";

export default function LinkImage(props: BannerPropsType) {
  return (
    <div
      className="relative w-1/12 h-full rounded-2xl overflow-hidden cursor-pointer
    bg-gradient-to-br from-blue-300 to-blue-800  
    hover:scale-95 transition-all "
    >
      <Link href={props.link}>
        <BannerImage {...props} />
      </Link>
    </div>
  );
}

function BannerImage({ image, alt, label }: BannerPropsType) {
  return (
    <>
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="200px"
          className="object-cover"
        />
      </div>
      <h3 className="text-shadow-xl absolute inset-0 flex items-center justify-center text-white text-lg font-extrabold text-center">
        {label}
      </h3>
    </>
  );
}
