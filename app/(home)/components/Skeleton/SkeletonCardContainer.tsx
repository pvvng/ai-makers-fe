// components
import SkeletonCarouselCard from "./SkeletonCarouselCard";

export default function SkeletonCardContainer() {
  return (
    <div className="flex justify-start items-center relative w-full transition-transform duration-500">
      {Array.from({length : 4}).map((_, i) => (
        <SkeletonCarouselCard key={i} />
      ))}
    </div>
  );
}