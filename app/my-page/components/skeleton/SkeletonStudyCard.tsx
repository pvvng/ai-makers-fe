export default function SkeletonStudies() {
  return (
    <div className="p-4 px-8">
      <div className="flex flex-wrap justify-start items-center">
        <SkeletonStudyCard />
        <SkeletonStudyCard />
        <SkeletonStudyCard />
        <SkeletonStudyCard />
      </div>
    </div>
  );
}

function SkeletonStudyCard() {
  return (
    <div className="w-1/2 px-1 mt-2">
      <div className="w-full h-[152px] rounded-2xl border shadow bg-gray-200 animate-pulse" />
    </div>
  );
}
