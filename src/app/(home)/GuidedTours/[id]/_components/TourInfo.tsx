import PencilIcon from "@/components/icons/PencilIcon";
import RatingIcon from "@/components/icons/RatingIcon";
import SaveIcon from "@/components/icons/SaveIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import Link from "next/link";

export default function TourInfo() {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col ">
          <span className="text-heading text-2xl font-bold">
            Hillside Hangout
          </span>

          <div className="text-subheading flex gap-4">
            <div>
              <span className="text-red-500 font-bold text-lg">$325</span>
              <span>/per Day</span>
            </div>
            {/* <div className="space-x-2 flex items-center">
              <RatingIcon />
              <span className="text-titleheading">4.8</span>
            </div> */}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-full bg-secondary p-2 cursor-pointer">
            <ShareIcon />
          </div>
          <div className="rounded-full bg-secondary p-2 cursor-pointer">
            <SaveIcon />
          </div>
        </div>
      </div>
    </>
  );
}
