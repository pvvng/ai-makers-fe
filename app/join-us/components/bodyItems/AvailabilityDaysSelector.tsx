import { days } from "@/constants";
import SelectorButton from "./SelectorButton";

export default function AvailabilityDaysSelector() {
  return (
    <div id="ability-day" className="w-full">
      <h6 className="mt-5">활동 가능 요일</h6>
      <div className="flex flex-wrap w-full mt-2">
        {days.map((day) => (
          <DayCheckbox key={day} day={day} />
        ))}
      </div>
    </div>
  );
}

function DayCheckbox({ day }: { day: string }) {
  return (
    <div className="w-1/4 px-1 pt-1 text-center">
      <SelectorButton text={day} />
    </div>
  );
}
