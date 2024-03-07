import TourLocationCard from "./_components/TourLocationCard";
import TourImageGrid from "./_components/TourImageGrid";
import TourAbout from "./_components/TourAbout";
import TourFacilities from "./_components/TourFacilities";
import Maps from "./_components/Maps";
import BackButton from "@/components/ui/BackButton";

export default function TourDetails() {
  return (
    <div className="flex flex-col p-4 w-full">
      <BackButton />
      <div>
        <TourLocationCard />
      </div>
      <div className="flex w-full max-lg:flex-col">
        <div className="w-[50%] max-lg:w-full flex flex-col  gap-5 ">
          <TourImageGrid />

          <div className="w-[80%] max-lg:w-full flex flex-col gap-5 justify-center lg:hidden max-lg:p-3">
            <TourAbout />
            <div className="flex flex-col gap-3 w-full lg:hidden">
              <span className="text-heading font-bold text-2xl ">
                Location on Map
              </span>

              <Maps />
            </div>

            <TourFacilities />
          </div>
        </div>
        <div className="w-[50%] max-lg:w-full p-3 flex flex-col  space-y-8 items-center">
          <div className="w-full flex flex-col gap-5 justify-center max-lg:hidden p-4">
            <Maps />

            <TourAbout />
            <TourFacilities />
          </div>
        </div>
      </div>
    </div>
  );
}
