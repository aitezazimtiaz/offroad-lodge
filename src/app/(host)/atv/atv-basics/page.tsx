import { Button } from "@/components/ui/button";
import Link from "next/link";

import ATVBasicInfo from "./_components/ATVBasicInfo";

export default function ATVBasics() {
  return (
    <>
      <div className="flex flex-col gap-12 space-y-5 items-center justify-center w-full h-full p-4">
        <span className="font-bold text-2xl mt-16 max-sm:text-center">
          Let’s start with the basics
        </span>

        <div className="flex flex-col gap-4 w-1/2 max-xl:w-3/4 max-sm:w-full">
          <div className="flex flex-col gap-5 rounded-2xl bg-secondary p-8 ">
            <ATVBasicInfo />
          </div>

          <div className="w-full flex items-center justify-end mt-10 mb-10 gap-5">
            <Link href={"/atv/atv-pricing"}>
              <Button className="bg-white border border-primary  text-lg font-bold text-primary  w-32 text-center   hover:bg-secondary">
                Back
              </Button>
            </Link>
            <Link href={"/atv/atv-instructions"}>
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
