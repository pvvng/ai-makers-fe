// type
import { CarouselData } from "@/types/carousel";
// components
import PopularCard from "./PopularCard";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopularDataMap({
  popularData,
  name,
  icon,
}: {
  popularData: CarouselData[] | undefined;
  name: string;
  icon: IconDefinition;
}) {
  return (
    <div className="w-1/4 min-h-[450px] p-4 border rounded-2xl shadow bg-white flex items-center">
      <div className="w-full">
        <h6 className="text-md font-bold ml-2 mb-2">
          <FontAwesomeIcon icon={icon} /> <span>{name}</span>
        </h6>
        {popularData?.map((data, index) => (
          <PopularCard key={data.dataKey} title={data.title} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
