import { GuidedtoursListing } from "@/data/fakebackend";
import { Button } from "@/components/ui/button";

import GuidedTourDisplayCard from "@/features/Cards/GuidedTourDisplayCard";

export default function GuidedToursListing() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {GuidedtoursListing.map((tour, index) => (
            <GuidedTourDisplayCard key={index} tour={tour} />
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
