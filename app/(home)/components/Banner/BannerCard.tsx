import { BadgeType } from "@/types/carousel";
import classNames from "classnames";

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
        <Badge type={type} />
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

function Badge({ type }: { type: BadgeType }) {
  function getBadgeClassnames(type: BadgeType) {
    if (type === "new") {
      return "bg-blue-100 border border-blue-500 text-blue-600  ";
    }

    if (type === "hot") {
      return "bg-red-100 border border-red-500 text-red-600  ";
    }

    return "bg-yellow-100 border border-yellow-500 text-yellow-600  ";
  }

  function getBadgeText(type: BadgeType) {
    if (type === "new") {
      return "신규";
    }

    if (type === "hot") {
      return "인기";
    }

    return "추천";
  }

  return (
    <span
      className={classNames(
        getBadgeClassnames(type) +
          "p-1 px-2 rounded-full absolute top-2 right-2 text-sm font-bold"
      )}
    >
      {getBadgeText(type)}
    </span>
  );
}
