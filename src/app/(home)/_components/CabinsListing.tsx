import DisplayCard from "@/features/Cards/DisplayCard";
import { cabinsListing } from "@/data/fakebackend";

export default function CabinsListing() {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {cabinsListing.map((cabin, index) => (
          <DisplayCard key={index} cabin={cabin} />
        ))}
      </div>
    </>
  );
}
