// type
import { CarouselData } from "@/types/carousel";
// components
import PopularCard from "./PopularCard";
// icon
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropsType {
  popularData: CarouselData[];
  name: string;
  icon: IconDefinition;
}

export default function PopularDataMap({ popularData, name, icon }: PropsType) {
  return (
    <div className="w-1/4 min-h-[450px] p-4 border rounded-2xl shadow bg-white flex items-center">
      <DataMap icon={icon} name={name} popularData={popularData} />
    </div>
  );
}

function DataMap({ icon, name, popularData }: PropsType) {
  return (
    <div className="w-full">
      <HeadTitle icon={icon} name={name} />
      <Content popularData={popularData} />
    </div>
  );
}

function HeadTitle({ icon, name }: { icon: IconDefinition; name: string }) {
  return (
    <p className="text-md font-bold ml-2 mb-2">
      <FontAwesomeIcon icon={icon} /> <span>{name}</span>
    </p>
  );
}

function Content({ popularData }: { popularData: CarouselData[] }) {
  return popularData.map((data, index) => (
    <PopularCard key={data.dataKey} title={data.title} rank={index + 1} />
  ));
}
