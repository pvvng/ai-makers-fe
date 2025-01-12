// components
import SkeletonBannerCard from "./SkeletonBannerCard";

export default function SkeletonCardContainer() {
  return (
    <div className="flex justify-start items-center relative w-full transition-transform duration-500">
      {Array.from({length : 4}).map((_, i) => (
        <SkeletonBannerCard key={i} />
      ))}
    </div>
  );
}