import GuidedTourMaps from "../_components/GuidedTourMaps";
import SearchBar from "../../_components/SearchBar";

export default function GuidedTourLocations() {
  return (
    <div className="w-full p-10 flex flex-col gap-3">
      <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:gap-2">
        <span className="text-xl text-heading font-bold">
          Guided Tours Locations
        </span>
        <SearchBar />
      </div>

      <GuidedTourMaps />
    </div>
  );
}
