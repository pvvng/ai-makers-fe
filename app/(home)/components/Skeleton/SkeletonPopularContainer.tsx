export default function SkeletonPopularContainer() {
  return (
    <div className="w-1/4 p-4 min-h-[450px] bg-white border rounded-2xl shadow flex items-center">
      <div className="w-full">
        <div className="animate-pulse bg-gray-200 shadow h-[28px] w-1/2" />
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonPopularCard key={i} />
        ))}
      </div>
    </div>
  );
}

function SkeletonPopularCard() {
  return (
    <div className="w-full mt-1 mb-1 border rounded animate-pulse bg-gray-200 shadow h-[42px]" />
  );
}
