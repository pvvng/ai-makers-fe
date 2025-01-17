// component
import ScrapedCard from "./ScrapedCard";
// type
import { CarouselData } from "@/types/carousel";

export default function ScarpCardMap({
  scrapedData,
}: {
  scrapedData: CarouselData[];
}) {
  return (
    <div className="flex flex-wrap justify-start items-start">
      {scrapedData.map((v) => (
        <ScrapedCard key={v.dataKey} />
      ))}
    </div>
  );
}
