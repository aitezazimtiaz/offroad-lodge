import GuidedTourMaps from "./_components/GuidedTourMaps";
import SearchBar from "./_components/SearchBar";

export default function GuidedTours() {
  return (
    <div className="w-full p-10 flex flex-col gap-3">
      <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:gap-2">
        <span className="text-xl text-heading font-bold">
          Recommended Guided Tour
        </span>
        <SearchBar />
      </div>

      <GuidedTourMaps />
    </div>
  );
}
