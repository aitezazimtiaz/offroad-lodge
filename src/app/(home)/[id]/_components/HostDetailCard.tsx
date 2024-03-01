import PlacesIcon from "@/components/icons/PlacesIcon";
import Image from "next/image";
export default function HostDetailCard() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-heading text-xl font-bold">Meet the host</span>

        <div className="flex  justify-between items-center max-sm:flex-col max-sm:gap-4 bg-secondary rounded-xl p-4 ">
          <div className="flex  gap-3 items-center ">
            <Image
              src={"/assets/host_profile4.png"}
              alt="host_profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-heading text-xl font-bold ">John Doe</span>
          </div>

          <div className="w-[1px] h-14 bg-titleheading max-sm:hidden"></div>

          <div className="flex gap-3 items-center">
            <PlacesIcon />
            <span className="text-heading text-lg font-semibold">
              Hosting two places
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
