// components
import BannerCardBadge from "./Badge";
// type
import { CarouselData } from "@/types/carousel";

export default function BannerCard({ cardData }: { cardData: CarouselData }) {
  const { title, content, type, dataKey } = cardData;

  return (
    <div className="w-1/4 px-1">
      <div className="bg-white relative p-2 px-4 border rounded w-full h-[230px] shadow-sm flex justify-start items-center transition-all cursor-pointer">
        <CardContent title={title} content={content} />
        <BannerCardBadge type={type} />
      </div>
    </div>
  );
}

function CardContent({ title, content }: { title: string; content: string }) {
  return (
    <div id="card-wrapper">
      <p className="text-sm text-gray-500">(주) 김동우 컴퍼니</p>
      <p className="text-md font-medium">{title}</p>
      <p className="text-sm mt-2">{content}</p>
    </div>
  );
}
