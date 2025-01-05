// coponenets
import LocationHeader from "./location/LocationHeader";
import AreaField from "./location/AreaField";
import CitiesField from "./location/CitiesField";
import DistrctField from "./location/DistrctField";
import SelectedLocation from "./location/SelectedLocation";

export default function AvailabilityLocation() {
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


