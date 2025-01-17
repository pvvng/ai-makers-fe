// component
import StudiesComponentHeader from "../content/Studies/StudiesComponentHeader";

export default function SkeletonStudies() {
  return (
    <div className="p-4 px-8">
      <StudiesComponentHeader />
      <CardMapContainer />
    </div>
  );
}

function CardMapContainer() {
  const skeletonArray = Array.from({ length: 4 }).map((_, i) => i + 1);

  return (
    <div className="flex flex-wrap justify-start items-center">
      {skeletonArray.map((_, i) => (
        <SkeletonStudyCard key={i} />
      ))}
    </div>
  );
}

function SkeletonStudyCard() {
  return (
    <div className="w-1/2 px-1 mt-2">
      <div className="w-full h-[160px] rounded-2xl border shadow bg-gray-200 animate-pulse" />
    </div>
  );
}
