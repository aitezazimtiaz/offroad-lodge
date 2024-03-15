import Link from "next/link";
import GuidedToursListing from "../_components/GuidedTourListing";
import { Button } from "@/components/ui/button";
import MapIcon from "@/components/icons/MapIcon";

export default function GuidedTours() {
  return (
    <>
      <div className="fixed left-1/2 transform -translate-x-1/2 z-10  ">
        <Link href="/GuidedTours/guided-tour-locations">
          <Button className="text-white py-2 w-32 rounded-3xl font-bold cursor-pointer bg-primary">
            <MapIcon className="mr-2" /> Show Map
          </Button>
        </Link>
      </div>
      <div className="p-4 space-y-8">
        <GuidedToursListing />
      </div>
    </>
  );
}
