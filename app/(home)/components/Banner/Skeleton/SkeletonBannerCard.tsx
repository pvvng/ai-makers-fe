export default function SkeletonBannerCard() {
  return (
    <div className="w-1/4 px-1">
      <div className="relative p-2 px-4 border rounded w-full h-[230px] shadow-sm flex justify-start items-center transition-all cursor-pointer">
        <SkeletonBannerCardContent />
        <span className="rounded-full absolute top-2 right-2 text-sm bg-gray-200 animate-pulse w-[60px] h-[30px]" />
      </div>
    </div>
  );
}

function SkeletonBannerCardContent() {
  return (
    <div id="card-wrapper">
      <div className="w-[150px] h-[20px] bg-gray-200 animate-pulse rounded" />
      <div className="w-[180px] h-[24px] mt-1 bg-gray-200 animate-pulse rounded" />
      <div className="mt-2 w-[40px] h-[20px] bg-gray-200 animate-pulse rounded" />
    </div>
  );
}
