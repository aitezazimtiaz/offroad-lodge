import LocationIcon from "@/components/icons/LocationIcon";
import ImagesGrid from "./_components/ImagesGrid";
import CabinFacilities from "./_components/CabinFacilities";
import CabinInfo from "./_components/CabinInfo";
import Maps from "./_components/Maps";
import PriceCard from "./_components/PriceCard";
import CabinAbout from "./_components/CabinAbout";
import HostDetailCard from "./_components/HostDetailCard";
import SimilarPlacesListing from "./_components/SimilarPlacesListing";

export default function CabinDetails() {
  return (
    <div className="flex flex-col p-4 w-full">
      <div className="flex w-full">
        <div className="w-[50%] flex flex-col  gap-5 ">
          <div className="flex gap-2 text-xl items-center text-heading font-bold pl-10">
            <LocationIcon />
            Williamson
          </div>
          <ImagesGrid />
          <CabinFacilities />
        </div>
        <div className="w-[50%] flex flex-col  space-y-8 items-center">
          <CabinInfo />

          <Maps />
          <div className="w-full flex justify-end">
            <PriceCard />
          </div>
          <div className="w-[80%] flex flex-col gap-5 justify-center ">
            <CabinAbout />
            <HostDetailCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5 p-4">
        <span className="text-heading font-bold text-xl">Similar Places</span>
        <SimilarPlacesListing />
      </div>
    </div>
  );
}
