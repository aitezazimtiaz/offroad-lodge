import SearchIcon from "@/components/icons/SearchIcon";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="flex bg-secondary rounded-lg w-72 p-2 justify-between">
      <div>
        <Input
          placeholder="search"
          className="bg-transparent border-none outline-none text-lg focus-none"
        />
      </div>

      <div className="bg-primary p-2 rounded-full flex justify-center items-center">
        <SearchIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
