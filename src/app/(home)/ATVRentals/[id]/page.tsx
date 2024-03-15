import ATVFacilities from "./_components/ATVFacilities";
import ATVHostDetails from "./_components/ATVHostDetails";
import ATVPriceCard from "./_components/ATVPriceCard";
import ATVAbout from "./_components/ATVAbout";
import RentalImageGrid from "./_components/RentalImageGrid";
import RentalLocationCard from "./_components/RentalLocationCard";
import Maps from "./_components/Maps";

export default function ATVRentalDetails() {
  return (
    <div className="flex flex-col p-4 w-full">
      <div>
        <RentalLocationCard />
      </div>
      <div className="flex w-full max-lg:flex-col">
        <div className="w-[50%] max-lg:w-full flex flex-col  gap-5 ">
          <RentalImageGrid />
          <div className="w-full max-lg:hidden">
            <ATVFacilities />
          </div>
          <div className="w-[80%] max-lg:w-full flex flex-col gap-5 justify-center lg:hidden max-lg:p-3">
            <div className="flex flex-col gap-3 w-full">
              <span className="text-heading font-bold text-2xl lg:hidden">
                Location on Map
              </span>

              <Maps />
            </div>
            <ATVAbout />
            <ATVHostDetails />
            <ATVFacilities />
            <div className="w-full flex justify-end">
              <ATVPriceCard />
            </div>
          </div>
        </div>
        <div className="w-[50%] max-lg:w-full p-3 flex flex-col  space-y-8 items-center">
          <div className="w-full flex flex-col gap-5 justify-center max-lg:hidden p-4">
            <div className="flex flex-col gap-3 w-full">
              <span className="text-heading font-bold text-2xl lg:hidden">
                Location on Map
              </span>

              <Maps />
            </div>
            <div className="w-full flex justify-end">
              <ATVPriceCard />
            </div>
            <ATVAbout />
            <ATVHostDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
