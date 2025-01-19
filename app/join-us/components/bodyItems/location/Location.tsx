// coponenets
import LocationHeader from "./LocationHeader";
import AreaField from "./AreaField";
import CitiesField from "./CitiesField";
import DistrctField from "./DistrctField";
import SelectedLocation from "./SelectedLocation";

export default function AvailabilityLocation() {
  // 굳이 이 컴포넌트가 서버일 이유는 없음
  return (
    <div id="ability-day" className="w-full">
      <LocationHeader />
      <div className="flex flex-wrap justify-center mt-2">
        <AreaField />
        <CitiesField />
        <DistrctField />
      </div>
      <SelectedLocation />
    </div>
  );
}


