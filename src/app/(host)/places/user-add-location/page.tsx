import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import LocationIcon from "@/components/icons/LocationIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import MapsPlace from "./_components/MapsPlace";

export default function PlaceLocation() {
  return (
    <>
      <div className="flex flex-col gap-6 space-y-2  items-center justify-center w-full h-full p-4">
        <span className="font-bold text-2xl mt-16 max-sm:text-center">
          Where’s your place located?
        </span>

        <div className="flex flex-col gap-4 w-full relative items-center p-8 max-sm:p-2">
          <div className="p-2 flex items-center  bg-secondary rounded-full w-[90%] max-md:w-3/4 absolute top-16 z-10">
            <LocationIcon />
            <Input
              placeholder="Enter your location"
              className="bg-transparent border-none outline-none  text-md focus-none w-full"
            />
            <div className="bg-primary p-2 rounded-full flex justify-center items-center">
              <SearchIcon className="w-6 h-6" />
            </div>
          </div>
          <MapsPlace />

          <div className="w-full flex items-center justify-end mt-10 mb-10 gap-5">
            <Link href={"/places/place-details"}>
              <Button className="bg-white border border-primary  text-lg font-bold text-primary  w-32 text-center   hover:bg-secondary">
                Back
              </Button>
            </Link>
            <Link href={"/places/place-basics-info"}>
              <Button className="bg-primary text-lg font-bold text-white  w-32 text-center  ">
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
