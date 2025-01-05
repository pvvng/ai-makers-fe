import Image from "next/image";

export default function LogoField() {
  return (
    <div className="sm:w-4/12 px-3 sm:border-r text-center w-full h-full relative">
      <Image
        src="/세균.webp"
        alt="site-logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full m-auto rounded object-fill max-w-[240px]"
        priority
      />
    </div>
  );
}
