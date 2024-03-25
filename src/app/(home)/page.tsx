import { Button } from "@/components/ui/button";
import Link from "next/link";
import MapIcon from "@/components/icons/MapIcon";
import CabinsListing from "./_components/CabinsListing";

export default function HomePage() {
  return (
    <>
      <div className="sm:fixed left-1/2 sm:transform sm:-translate-x-1/2 z-10 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-3 ">
        <Link href="/cabins-locations">
          <Button className="text-white py-2 w-32 rounded-3xl font-bold cursor-pointer bg-primary">
            <MapIcon className="mr-2" /> Show Map
          </Button>
        </Link>
      </div>

      <div className="p-4 space-y-8">
        <CabinsListing />
      </div>
    </>
  );
}
