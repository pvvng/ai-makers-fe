import { BadgeType } from "@/types/carousel";
import classNames from "classnames";

export default function BannerCardBadge({ type }: { type: BadgeType }) {
  const badgeClassnames = classNames(
    getBadgeClassnames(type) +
      "border p-1 px-2 rounded-full absolute top-4 right-4 text-sm font-bold"
  );
  
  return <span className={badgeClassnames}>{getBadgeText(type)}</span>;
}

function getBadgeClassnames(type: BadgeType) {
  if (type === "new") {
    return "bg-blue-100  border-blue-500 text-blue-600  ";
  }

  if (type === "hot") {
    return "bg-red-100 border-red-500 text-red-600  ";
  }

  return "bg-yellow-100  border-yellow-500 text-yellow-600  ";
}

function getBadgeText(type: BadgeType) {
  if (type === "new") return "신규";

  if (type === "hot") return "인기";

  return "AI 추천";
}
