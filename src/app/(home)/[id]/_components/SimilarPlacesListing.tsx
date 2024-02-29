import DisplayCard from "@/features/Cards/DisplayCard";
import {  similarPlacesListing } from "@/data/fakebackend";


export default function SimilarPlacesListing() {
  return (
    <>
      
        <div className="flex flex-wrap gap-20 ">
          {similarPlacesListing.map((cabin, index) => (
            <DisplayCard key={index} cabin={cabin} />
          ))}
        </div>
      
    </>
  );
}
