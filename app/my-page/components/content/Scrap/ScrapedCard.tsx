// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// next
import Image from "next/image";

export default function ScrapedCard() {
  return (
    <div className="w-1/2 px-1">
      <div className="bg-white h-[160px] border rounded-2xl shadow p-2 flex gap-3 justify-center relative mt-2">
        <ScrapedCardImage />
        <ScrapedCardContent />
        <FontAwesomeIcon
          icon={faBookmark}
          className="text-gray-400 absolute top-4 right-4"
        />
      </div>
    </div>
  );
}

function ScrapedCardImage() {
  return (
    <div className="w-1/3 h-full relative">
      <Image
        src="/coin/coin.webp"
        alt="test-img"
        fill
        priority
        sizes="130px"
        className="object-cover w-full"
      />
    </div>
  );
}

function ScrapedCardContent() {
  return (
    <div className="w-2/3 flex flex-col gap-2 justify-center">
      <p className="text-lg font-semibold">공모전이름</p>
      <p>기업이름</p>
      <p>내용</p>
    </div>
  );
}
