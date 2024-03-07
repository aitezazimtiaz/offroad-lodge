import { toursListing } from "@/data/fakebackend";
import TourDisplayCard from "@/features/Cards/TourDisplayCard";

export default function ToursListing() {
  return (
    <>
      <div className="flex flex-col p-5">
        <span className="text-heading text-xl font-bold">
          Guided Tour Listing
        </span>
        <div className="flex flex-wrap gap-10 justify-between items-center max-sm:justify-center">
          {toursListing.map((tour, index) => (
            <TourDisplayCard key={index} tour={tour} />
          ))}
        </div>
      </div>
    </>
  );
}
