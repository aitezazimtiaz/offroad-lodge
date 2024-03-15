import ShowATVMap from "../../_components/ShowATVMap";
import SearchBar from "../../_components/SearchBar";

export default function ATVLocations() {
  return (
    <div className="w-full p-10 flex flex-col gap-3">
      <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:gap-2">
        <span className="text-xl text-heading font-bold">ATV Locations</span>
        <SearchBar />
      </div>

      <ShowATVMap />
    </div>
  );
}
