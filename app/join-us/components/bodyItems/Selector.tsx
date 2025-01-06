import AvailabilityDaysSelector from "./AvailabilityDaysSelector";
import LanguageSelector from "./LanguageSelector";

export default function Selector({ type }: { type: "language" | "day" }) {
  const renderText = type === "language" ? "사용 가능 언어" : "활동 가능 요일";

  return (
    <div id={type} className="w-full">
      <h6 className="mt-5">{renderText}</h6>
      <div className="flex flex-wrap w-full mt-2">
        {type === "language" ? (
          <LanguageSelector />
        ) : (
          <AvailabilityDaysSelector />
        )}
      </div>
    </div>
  );
}
