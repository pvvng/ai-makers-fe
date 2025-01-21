// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// constant
import { CarouselData } from "@/types/carousel";
// next
import Image from "next/image";

export default function ScrapedCard(props: CarouselData) {
  return (
    <div className="w-1/2 px-1">
      <div className="bg-white h-[160px] border rounded-2xl shadow p-2 flex gap-3 justify-center relative mt-2">
        <ScrapedCardImage />
        <ScrapedCardContent name={props.title} content={props.content} />
        <BookMarkButton />
      </div>
    </div>
  );
}

function ScrapedCardImage() {
  return (
    <div className="w-1/3 h-full relative">
      <Image
        src="/banner/rocket-login.webp"
        alt="test-img"
        fill
        priority
        sizes="130px"
        className="object-cover w-full"
      />
    </div>
  );
}

function ScrapedCardContent({
  name,
  content,
}: {
  name: string;
  content: string;
}) {
  return (
    <div className="w-2/3 flex flex-col gap-2 justify-center">
      <div>
        <p className="text-lg font-semibold truncate">{name}</p>
        <p className="text-sm text-gray-600 truncate">(주)김동우 컴퍼니</p>
      </div>
      <p className="truncate">{content}</p>
    </div>
  );
}

function BookMarkButton() {
  return (
    <button className="text-amber-400 absolute top-4 right-4">
      <FontAwesomeIcon icon={faBookmark} />
    </button>
  );
}
