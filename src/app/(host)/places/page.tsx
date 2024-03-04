import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Places() {
  return (
    <>
      <div className="flex flex-col gap-12 space-y-5  items-center justify-center w-full h-full p-4">
        <span className="font-bold text-2xl mt-16 max-sm:text-center">
          It’s easy to become host of Off-road Lodge
        </span>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 rounded-2xl bg-secondary p-8">
            <div className="flex items-center gap-10 max-sm:flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 max-sm:flex-col">
                  <div className="bg-primary rounded-full text-white font-bold text-xl w-8 text-center h-8">
                    1
                  </div>
                  <span className="font-bold text-lg text-heading ">
                    Tell us about your Place
                  </span>
                </div>
                <span className="text-subheading text-lg pl-10 max-sm:text-center max-sm:pl-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Duis sodales feugiat nibh.
                </span>
              </div>
              <Image
                src={"/assets/started_place1.png"}
                alt="start_place"
                width={80}
                height={80}
              />
            </div>

            {/* Point 2 */}
            <div className="flex items-center gap-10 max-sm:flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 max-sm:flex-col">
                  <div className="bg-primary rounded-full text-white font-bold text-xl w-8 text-center h-8">
                    2
                  </div>
                  <span className="font-bold text-lg text-heading">
                    Make it stand out
                  </span>
                </div>
                <span className="text-subheading text-lg pl-10 max-sm:text-center max-sm:pl-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Duis sodales feugiat nibh.
                </span>
              </div>
              <Image
                src={"/assets/started_place2.png"}
                alt="start_place"
                width={80}
                height={80}
              />
            </div>

            {/* Point 3 */}
            <div className="flex items-center gap-10 max-sm:flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 max-sm:flex-col">
                  <div className="bg-primary rounded-full text-white font-bold text-xl w-8 text-center h-8">
                    3
                  </div>
                  <span className="font-bold text-lg text-heading">
                    Finish up and publish
                  </span>
                </div>
                <span className="text-subheading text-lg pl-10 max-sm:text-center max-sm:pl-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Duis sodales feugiat nibh.
                </span>
              </div>
              <Image
                src={"/assets/started_place3.png"}
                alt="start_place"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-10 mb-10">
            <Link href={"/places/about-place"}>
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
