import FiltersIcon from "@/components/icons/FiltersIcon";
import { Switch } from "@/components/ui/switch";

export default function Filters() {
  return (
    <div className="flex p-4 items-center gap-3 bg-secondary rounded-xl">
      {/* <div className="flex border-primary border-r-2 items-center gap-2 pr-4">
            <span>Display total before taxes</span>
            <Switch />
          </div> */}
      <div className="flex items-center gap-2 cursor-pointer">
        <FiltersIcon />
        <span>Filters</span>
      </div>
    </div>
  );
}
