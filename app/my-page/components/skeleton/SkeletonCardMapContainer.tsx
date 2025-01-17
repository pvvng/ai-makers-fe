export default function SkeletonCardMapContainer() {
  const skeletonArray = Array.from({ length: 4 }).map((_, i) => i + 1);

  return (
    <div className="flex flex-wrap justify-start items-center">
      {skeletonArray.map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="w-1/2 px-1 mt-2">
      <div className="w-full h-[160px] rounded-2xl border shadow bg-gray-200 animate-pulse" />
    </div>
  );
}
