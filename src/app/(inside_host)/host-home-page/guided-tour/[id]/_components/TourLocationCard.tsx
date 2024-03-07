import LocationIcon from "@/components/icons/LocationIcon";

import TourInfo from "./TourInfo";

export default function TourLocationCard() {
  return (
    <div className="w-full flex max-md:flex-col justify-between p-2 items-center max-md:gap-3">
      <div className="flex w-[50%] max-md:w-full max-md:order-2 gap-2 text-xl items-center text-heading font-bold pl-10 max-md:pl-0">
        <LocationIcon />
        Williamson
      </div>

      <div className="w-[50%] max-md:w-full max-md:order-1 ml-10 max-md:ml-0">
        <TourInfo />
      </div>
    </div>
  );
}
