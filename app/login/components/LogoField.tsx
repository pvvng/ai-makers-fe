import Image from "next/image";

export default function LogoField() {
  return (
    <div className="w-1/3 px-3 text-center h-full relative">
      <Image
        src="/banner/rocket-join-us.webp"
        alt="site-logo"
        width={240}
        height={240}
        sizes="100vw"
        className="w-full h-full m-auto rounded object-fill max-w-[240px]"
        priority
      />
    </div>
  );
}
