import { signImagePropsData } from "@/constants/main-banner";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  image: string;
  alt: string;
  link: string;
  label: string;
};

export default function Banner() {
  return (
    <div className="w-full p-4 pt-10 pb-5 px-8">
      <div className="flex justify-center items-center gap-2 h-[200px]">
        <BannerImage />
        {signImagePropsData.map((imageData) => (
          <SignLinkImage key={imageData.image} {...imageData} />
        ))}
      </div>
    </div>
  );
}

function BannerImage() {
  return (
    <div className="relative w-4/6 h-full transition-all cursor-pointer">
      <Image
        src="/배너샘플커비.webp"
        alt="배너"
        fill
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-center">
        큰 배너 이미지 샘플
      </div>
    </div>
  );
}

function SignLinkImage(props: PropsType) {
  const { link, image, label, alt } = props;

  return (
    <div className="relative w-1/6 h-full bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl hover:scale-95 transition-all cursor-pointer">
      <Link href={link}>
        <Image src={image} alt={alt} fill className="object-cover" />
        <h3 className="text-shadow-lg absolute inset-0 flex items-center justify-center text-white text-3xl font-black text-center">
          {label}
        </h3>
      </Link>
    </div>
  );
}
