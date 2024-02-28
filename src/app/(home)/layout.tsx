import type { PropsWithChildren } from "react";
import HostIcon from "@/components/icons/HostIcon";
import Filters from "./_components/Filters";
import Navbar from "./_components/Navbar";
import { ProfileAvatar } from "./_components/ProfileAvatar";

import SearchBox from "./_components/SearchBox";
import Image from "next/image";
import CompaniesList from "./_components/CompaniesList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      <div className="p-4 space-y-8">
        <div className="w-full flex gap-4 items-center justify-between">
          <Image src={"/assets/logo.svg"} alt="logo" width={110} height={110} />
          <Navbar />
          <SearchBox />
          <ProfileAvatar />
        </div>
        <div className="flex gap-4 justify-between ">
          <Filters />
          <div className="bg-secondary p-2 rounded-xl">
            <CompaniesList />
          </div>

          {/* Host Component */}
          <div className="flex items-center gap-3 bg-secondary p-4 rounded-xl cursor-pointer">
            <HostIcon />
            <span>Become a Host</span>
          </div>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
      <div className="flex  bg-primary w-64 justify-between rounded-3xl gap-1   fixed -rotate-90 top-[50%] -right-32 z-10 pb-12">
        <Link href={"/register"} className="w-full">
          <Button className="text-white w-full rounded-l-3xl  font-bold cursor-pointer">
            Sign up
          </Button>
        </Link>
        <div className="h-10 mt-1 bg-white w-[1px]"></div>
        <Link href={"/login"} className="w-full">
          <Button className="text-white w-full rounded-r-3xl font-bold cursor-pointer">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeLayout;
