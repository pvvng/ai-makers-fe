import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrapedCard from "./ScrapedCard";

export default function Scrap({ type }: { type: "study" | "contest" }) {
  const koreanType = type === "study" ? "스터디" : "공모전";
  const josaTypeByType = type === "study" ? "가" : "이";

  return (
    <div className="p-4 px-8">
      <p className="ml-2 text-xl font-bold text-gray-700">
        <FontAwesomeIcon icon={faBookmark} /> 스크랩한 {koreanType}
      </p>
      <hr className="mt-2 mb-2" />
      <ScarpCardMap
        koreanType={koreanType}
        josaTypeByType={josaTypeByType}
        scrapedData={[1, 2, 3, 4, 5, 6, 7]}
      />
    </div>
  );
}

function ScarpCardMap({
  koreanType,
  josaTypeByType,
  scrapedData,
}: {
  koreanType: string;
  josaTypeByType: string;
  scrapedData: any[];
}) {
  if (scrapedData.length === 0) {
    return (
      <div className="flex flex-wrap justify-center items-center h-[350px] overflow-scroll bg-gray-100 rounded-2xl px-1 pb-2">
        <p className="ml-3 mt-3">
          스크랩한 {koreanType}
          {josaTypeByType} 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-start items-start h-[350px] overflow-scroll bg-gray-100 rounded-2xl px-1 pb-2">
      {scrapedData.map((v) => (
        <ScrapedCard key={v} />
      ))}
    </div>
  );
}
