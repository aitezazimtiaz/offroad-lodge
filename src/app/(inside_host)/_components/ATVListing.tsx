import { atvListing } from "@/data/fakebackend";
import RentalDisplayCard from "@/features/Cards/RentalDisplayCard";

export default function ATVListing() {
  return (
    <>
      <div className="flex flex-col gap-4 p-5 ">
        <span className="text-heading text-xl font-bold">
          ATV Rental Listing
        </span>
        <div className="flex flex-wrap gap-10 justify-between items-center max-sm:justify-center">
          {atvListing.map((rental, index) => (
            <RentalDisplayCard key={index} rental={rental} showIcons={true} />
          ))}
        </div>
      </div>
    </>
  );
}
