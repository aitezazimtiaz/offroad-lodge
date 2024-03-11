import DisplayCard from "@/features/Cards/DisplayCard";
import { cabinsListing } from "@/data/fakebackend";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MapIcon from "@/components/icons/MapIcon";

export default function CabinsListing() {
  return (
    <>
      <div className="flex flex-col">
      
        <div className="flex flex-wrap gap-10 justify-center items-center">
       
          {cabinsListing.map((cabin, index) => (
            <DisplayCard key={index} cabin={cabin} />
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
