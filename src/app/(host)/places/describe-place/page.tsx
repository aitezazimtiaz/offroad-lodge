"use client";

import React, { useState } from "react";
import ApartmentIcon from "@/components/icons/ApartmentIcon";
import CabinIcon from "@/components/icons/CabinIcon";
import ContainerIcon from "@/components/icons/ContainerIcon";
import FarmHouseIcon from "@/components/icons/FarmHouseIcon";
import HotelIcon from "@/components/icons/HotelIcon";
import HouseIcon from "@/components/icons/HouseIcon";
import RVIcon from "@/components/icons/RVIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DescribePlace() {
  // Define state to track the selected div
  const [selectedDiv, setSelectedDiv] = useState(-1);

  // Define a click handler to update the selected div
  const handleDivClick = (index: number) => {
    setSelectedDiv(index);
  };

  return (
    <>
      <div className="flex flex-col gap-12 space-y-5  items-center justify-center w-full h-full p-4">
        <span className="font-bold text-2xl mt-16 max-sm:text-center">
          Describe your Place
        </span>

        <div className="flex flex-col gap-4 w-1/2 max-xl:w-3/4 max-sm:w-full">
          <div className="flex flex-wrap gap-5 rounded-2xl bg-secondary p-8 max-sm:justify-center ">
            <div
              className={`rounded-2xl flex flex-col w-32 gap-6 items-center  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 0
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(0)}
            >
              <HouseIcon />
              <span className=" text-lg">Home</span>
            </div>
            <div
              className={`rounded-2xl flex flex-col gap-6 w-32 items-center  div-drop-shadow py-5 px-8 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 1
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(1)}
            >
              <ApartmentIcon />
              <span className=" text-lg">Apartment</span>
            </div>

            <div
              className={`rounded-2xl flex flex-col gap-6 w-32 items-center  div-drop-shadow py-5 px-8 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 2
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(2)}
            >
              <HotelIcon />
              <span className=" text-lg">Hotel</span>
            </div>

            <div
              className={`rounded-2xl flex flex-col gap-6 w-38 items-center  div-drop-shadow py-5 px-3 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 3
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(3)}
            >
              <FarmHouseIcon />
              <span className="text-lg text-center">Farm House</span>
            </div>

            <div
              className={`rounded-2xl flex flex-col gap-6 w-32 items-center  div-drop-shadow py-5 px-8 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 4
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(4)}
            >
              <CabinIcon />
              <span className=" text-lg">Cabin</span>
            </div>

            <div
              className={`rounded-2xl flex flex-col gap-6 w-32 items-center  div-drop-shadow py-5 px-8 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 5
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(5)}
            >
              <ContainerIcon />
              <span className=" text-lg">Container</span>
            </div>

            <div
              className={`rounded-2xl flex flex-col gap-6 w-32 items-center  div-drop-shadow py-5 px-4 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 6
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(6)}
            >
              <RVIcon />
              <span className="text-lg">RV</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-10 mb-10">
            <Link href={"/places/describe-place-2"}>
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
