import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutATV() {
  return (
    <>
      <div className="flex flex-col gap-12 space-y-5  items-center justify-center w-full h-full p-4">
        <span className="font-bold text-2xl mt-16 max-sm:text-center">
          Tell us about your ATV
        </span>

        <div className="flex flex-col gap-4 w-1/2 max-xl:w-3/4 max-sm:w-full">
          <div className="flex  gap-5 rounded-2xl bg-secondary p-8  ">
            <div className="flex gap-5 max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <span className="text-subheading text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sodales feugiat nibh.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis sodales feugiat nibh. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Duis sodales feugiat
                nibh.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis sodales feugiat nibh.
              </span>
              <Image
                src={"/assets/tell_about_atv.png"}
                alt="place"
                width={200}
                height={200}
                className="pt-20 max-sm:pt-5"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-10 mb-10">
            <Link href={"/atv/describe-atv"}>
              <Button className="bg-primary text-lg font-bold text-white  w-32 text-center  ">
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
