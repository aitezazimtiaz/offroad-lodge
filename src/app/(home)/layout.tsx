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
import Copyright from "./_components/Copyright";
import Footer from "./_components/Footer";

const HomeLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      <div className="p-4 space-y-8">
        <div className="w-full flex gap-4 items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              alt="logo"
              width={110}
              height={110}
              className="cursor-pointer"
            />
          </Link>

          <div className="flex gap-40 max-xl:gap-20 justify-evenly max-lg:justify-center max-lg:items-center max-lg:flex-col max-lg:gap-5 max-sm:hidden">
            <Navbar />
            <SearchBox />
          </div>

          <ProfileAvatar />
        </div>
        <div className="flex gap-40 max-xl:gap-20 justify-evenly max-lg:flex-col max-lg:gap-5 sm:hidden max-sm:w-full max-sm:justify-center max-sm:items-center">
          <Navbar />
          <SearchBox />
        </div>
        <div className="flex gap-4 justify-between max-lg:flex-col ">
          <div className="p-2  bg-secondary rounded-xl max-lg:order-2 max-lg:hidden">
            <Filters />
          </div>
          <div className="bg-secondary p-2 rounded-xl max-lg:order-1">
            <CompaniesList />
          </div>

          <div className="flex w-full justify-center items-center gap-5 max-lg:order-2 lg:hidden">
            <div className="  bg-secondary rounded-xl max-lg:order-2">
              <Filters />
            </div>
            <div className="flex items-center gap-3 bg-secondary p-4 rounded-xl cursor-pointer max-lg:order-2">
              <HostIcon />
              <span>Become a Host</span>
            </div>
          </div>

          {/* Host Component */}
          <div className="flex items-center gap-3 bg-secondary p-4 rounded-xl cursor-pointer max-lg:hidden">
            <HostIcon />
            <span>Become a Host</span>
          </div>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
      <Footer />
      <Copyright />

      <div className="flex max-sm:hidden bg-primary w-64 justify-between rounded-3xl gap-1   fixed -rotate-90 top-[50%] -right-32 z-10 pb-12">
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
