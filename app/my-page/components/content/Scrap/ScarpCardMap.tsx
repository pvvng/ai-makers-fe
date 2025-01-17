// component
import ScrapedCard from "./ScrapedCard";
// type
import { CarouselData } from "@/types/carousel";

export default function ScarpCardMap({
  scrapedData,
}: {
  scrapedData: CarouselData[];
}) {
  console.log(scrapedData);

  return (
    <div className="flex flex-wrap justify-start items-start">
      {scrapedData.map((data) => (
        <ScrapedCard key={data.dataKey} {...data} />
      ))}
    </div>
  );
}
