export default function NullScrapedContainer({
  koreanType,
  josaTypeByType,
}: {
  koreanType: string;
  josaTypeByType: string;
}) {
  return (
    <div className="flex flex-wrap justify-center items-center h-[350px] overflow-scroll bg-gray-100 rounded-2xl px-1 pb-2">
      <p className="ml-3 mt-3">
        스크랩한 {koreanType}
        {josaTypeByType} 없습니다.
      </p>
    </div>
  );
}
