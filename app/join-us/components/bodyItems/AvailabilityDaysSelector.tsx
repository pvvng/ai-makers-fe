import { days } from "@/constants";

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
    <div className="w-1/4 px-1 pt-1">
      <div key={day} className="w-full text-center">
        <input id={day} type="checkbox" className="hidden peer" />
        <label
          htmlFor={day}
          className="w-full lg:h-18 md:h-16 sm:h-14 h-12 border cursor-pointer 
        peer-checked:bg-blue-500 peer-checked:text-white 
        flex items-center justify-center transition"
        >
          {day}
        </label>
      </div>
    </div>
  );
}
