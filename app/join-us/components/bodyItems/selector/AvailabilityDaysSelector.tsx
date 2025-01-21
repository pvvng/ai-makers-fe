import { days } from "@/constants/joinUs/options";
import SelectorButton from "./SelectorButton";

export default function AvailabilityDaysSelector() {
  return days.map((day) => <DayCheckbox key={day} day={day} />);
}

function DayCheckbox({ day }: { day: string }) {
  return (
    <div className="w-1/4 px-1 pt-1 text-center">
      <SelectorButton text={day} type="day" />
    </div>
  );
}
