import ImagesGrid from "./_components/ImagesGrid";
import CabinFacilities from "./_components/CabinFacilities";

import Maps from "./_components/Maps";

import CabinAbout from "./_components/CabinAbout";

import LocationCard from "./_components/LocationCard";
import ThingsToKnow from "./_components/ThingsToKnow";
import BackButton from "@/components/ui/BackButton";

export default function CabinDetails() {
  return (
    <div className="flex flex-col p-4 w-full">
      <BackButton />
      <div>
        <LocationCard />
      </div>
      <div className="flex w-full max-lg:flex-col">
        <div className="w-[50%] max-lg:w-full flex flex-col  gap-5 ">
          <ImagesGrid />
          <CabinFacilities />
          <div className="w-[80%] max-lg:w-full flex flex-col gap-5 justify-center lg:hidden max-lg:p-3">
            <CabinAbout />
            <ThingsToKnow />
          </div>
        </div>
        <div className="w-[50%] max-lg:w-full p-3 flex flex-col  space-y-8 items-center">
          <div className="flex flex-col gap-3 w-full">
            <span className="text-heading font-bold text-2xl lg:hidden">
              Location on Map Place
            </span>

            <Maps />
          </div>

          <div className="w-[80%] max-2xl:w-[90%] max-md:w-full flex flex-col gap-5 justify-center max-lg:hidden ">
            <CabinAbout />
            <ThingsToKnow />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-3 mt-5 p-4">
        <span className="text-heading font-bold text-2xl">Similar Places</span>
        <SimilarPlacesListing />
      </div> */}
    </div>
  );
}
