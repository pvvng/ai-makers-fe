import { BadgeType } from "@/types/carousel";
import BannerCardBadge from "./Badge";

interface PropsType {
  type: BadgeType;
  title: string;
  content: string;
}

export default function BannerCard({ type, title, content }: PropsType) {
  return (
    <div className="w-1/4 px-1">
      <div className="relative p-2 px-4 border rounded w-full h-[230px] shadow-sm hover:shadow-lg flex justify-start items-center transition-all cursor-pointer">
        <CardContent title={title} content={content} />
        <BannerCardBadge type={type} />
      </div>
    </div>
  );
}

function CardContent({ title, content }: { title: string, content : string }) {
  return (
    <div id="card-wrapper">
      <p className="text-sm text-gray-500">(주) 김동우 컴퍼니</p>
      <p className="text-lg font-medium">{title}</p>
      <p className="mt-2">{content}</p>
    </div>
  );
}
