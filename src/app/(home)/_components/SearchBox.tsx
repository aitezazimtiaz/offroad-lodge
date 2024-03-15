import SearchIcon from "@/components/icons/SearchIcon";

const SearchBox = () => {
  return (
    <div className="p-2.5 bg-secondary rounded-xl gap-4 flex max-w-[380px] max-sm:p-1 max-sm:flex max-sm:items-center">
      <div className="flex flex-col gap-1  px-4 max-sm:px-1">
        <span className="font-bold text-black">Where</span>
        <span className="text-subheading">Search Destination</span>
      </div>

      {/* Add Guest
      <div className="flex flex-col gap-1  px-4 max-sm:px-1">
        <span className="font-bold text-black">Who</span>
        <span className="text-subheading">Add Guest</span>
      </div> */}

      <div className="flex flex-col justify-center items-center  bg-primary rounded-full p-3 max-sm:p-2 h-12 w-12 cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBox;
