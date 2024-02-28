import SearchIcon from "@/components/icons/SearchIcon";

const SearchBox = () => {
  return (
    <div className="p-2.5 bg-secondary rounded-xl gap-4 flex ">
      <div className="flex flex-col gap-1 border-primary border-r-2 px-4">
        <span className="font-bold text-black">Where</span>
        <span className="text-subheading">Search Destination</span>
      </div>

      {/* Check In */}
      <div className="flex flex-col gap-1 border-primary border-r-2 px-4">
        <span className="font-bold text-black">Check in</span>
        <span className="text-subheading">Add Date</span>
      </div>

      {/* Check Out*/}
      <div className="flex flex-col gap-1 border-primary border-r-2 px-4">
        <span className="font-bold text-black">Check out</span>
        <span className="text-subheading">Add Date</span>
      </div>

      {/* Add Guest*/}
      <div className="flex flex-col gap-1  px-4">
        <span className="font-bold text-black">Who</span>
        <span className="text-subheading">Add Guest</span>
      </div>

      <div className="flex flex-col  bg-primary rounded-full p-3 cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBox;
