import ATVIcon from "@/components/icons/ATVIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import Link from "next/link";

export default function OnboardButtons() {
  return (
    <>
      <div className="flex flex-col gap-12 space-y-5  items-center justify-center w-full h-full">
        <span className="font-bold text-2xl mt-20">You are hosting a</span>

        <div className="flex items-center justify-center gap-20 max-sm:flex-col max-sm:gap-10 ">
          {/* Place */}
          <Link href={"/places"}>
            <div className="rounded-2xl flex flex-col gap-6 items-center border border-titleheading div-drop-shadow py-10 px-16 hover:bg-secondary hover:border-primary cursor-pointer">
              <HomeIcon />
              <span className="font-bold text-2xl">Place</span>
            </div>
          </Link>

          {/* ATV */}
          <Link href={"/atv"}>
            <div className="rounded-2xl flex flex-col gap-6 items-center py-10 px-16 border border-titleheading div-drop-shadow hover:bg-secondary hover:border-primary cursor-pointer">
              <ATVIcon />
              <span className="font-bold text-2xl">ATV</span>
            </div>
          </Link>

          <Link href={"/guided-tours"}>
            <div className="rounded-2xl flex flex-col gap-6 items-center border border-titleheading div-drop-shadow py-10 px-8 hover:bg-secondary hover:border-primary cursor-pointer">
              <HomeIcon />
              <span className="font-bold text-2xl">Guided Tours</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
