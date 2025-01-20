// coponenets
import LocationHeader from "./LocationHeader";
import AreaField from "./AreaField";
import CitiesField from "./CitiesField";
import DistrctField from "./DistrctField";
import SelectedLocation from "./SelectedLocation";

export default function AvailabilityLocation() {
  return (
    <div id="ability-day" className="w-full">
      <LocationHeader />
      <LocationField />
      <SelectedLocation />
    </div>
  );
}

function LocationField() {
  return (
    <div className="flex gap-2 justify-center mt-2">
      <AreaField />
      <CitiesField />
      <DistrctField />
    </div>
  );
}
