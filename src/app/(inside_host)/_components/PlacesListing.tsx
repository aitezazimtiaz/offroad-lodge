import { placesListing } from "@/data/fakebackend";

import PlaceDisplayCard from "@/features/Cards/PlaceDisplayCard";

export default function PlacesListing() {
  return (
    <>
      <div className="flex flex-col p-5">
        <div className="flex flex-wrap gap-10 justify-between items-center max-sm:justify-center">
          {placesListing.map((place, index) => (
            <PlaceDisplayCard key={index} place={place} />
          ))}
        </div>
      </div>
    </>
  );
}
