import { atvRentalListing } from "@/data/fakebackend";
import { Button } from "@/components/ui/button";
import RentalDisplayCard from "@/features/Cards/RentalDisplayCard";

export default function ATVRentalsListing() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {atvRentalListing.map((rental, index) => (
            <RentalDisplayCard key={index} rental={rental} />
          ))}
        </div>
        <div className="flex flex-col gap-3 justify-center items-center mt-20">
          <span className="text-heading font-bold text-lg">
            Continue to explore more
          </span>
          <Button className="text-white rounded-xl font-bold py-2">
            Explore More
          </Button>
        </div>
      </div>
    </>
  );
}
