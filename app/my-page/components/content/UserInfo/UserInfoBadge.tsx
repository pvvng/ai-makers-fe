// constant
import {
  AVAILABLE_DAY_LABEL,
  AVAILABLE_LANGUAGE_LABEL,
  AVAILABLE_LOCATION_LABEL,
} from "@/constants/validation/selectValueLabel";

interface PropsType {
  language: string[];
  location: string[];
  day: string[];
}

export default function UserInfoBadge(props: PropsType) {
  const { language, location, day } = props;
  
  const badgeDataArray = [
    { label: AVAILABLE_LANGUAGE_LABEL, data: language },
    { label: AVAILABLE_LOCATION_LABEL, data: location },
    { label: AVAILABLE_DAY_LABEL, data: day },
  ];

  return (
    <div className="mt-4">
      <hr />
      {badgeDataArray.map((badgeData) => (
        <div key={badgeData.label} className="mt-4">
          <p className="mt-4 mb-2 font-semibold">{badgeData.label}</p>
          <BadgeContainer badgeValue={badgeData.data} />
        </div>
      ))}
    </div>
  );
}

function BadgeContainer({ badgeValue }: { badgeValue: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-start items-center">
      {badgeValue.map((data) => (
        <Badge key={data} badgeData={data} />
      ))}
    </div>
  );
}

function Badge({ badgeData }: { badgeData: string }) {
  return (
    <span className="p-1 px-2 rounded border shadow transition cursor-pointer hover:bg-blue-500 hover:text-white">
      {badgeData}
    </span>
  );
}
