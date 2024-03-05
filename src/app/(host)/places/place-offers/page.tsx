"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import WifiIcon from "@/components/icons/WifiIcon";
import TVIcon from "@/components/icons/TVIcon";
import ACIcon from "@/components/icons/ACIcon";
import HeatingIcon from "@/components/icons/HeatingIcon";

export default function PlaceOffers() {
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
          Your place is offering
        </span>

        <div className="flex flex-col gap-4 w-1/2 max-xl:w-3/4 max-sm:w-full">
          <div className="flex flex-col gap-5 rounded-2xl bg-secondary p-8  ">
            <div
              className={`rounded-2xl flex max-sm:flex-col max-sm:justify-center max-sm:text-center w-full gap-6 items-center justify-between  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 0
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(0)}
            >
              <span className="text-heading text-xl">Wifi</span>

              <WifiIcon />
            </div>

            <div
              className={`rounded-2xl flex max-sm:flex-col max-sm:justify-center max-sm:text-center w-full gap-6 items-center justify-between  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 1
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(1)}
            >
              <span className="text-heading text-xl">TV</span>

              <TVIcon />
            </div>

            <div
              className={`rounded-2xl flex max-sm:flex-col max-sm:justify-center max-sm:text-center w-full gap-6 items-center justify-between  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 2
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(2)}
            >
              <span className="text-heading text-xl">AirConditioner</span>

              <ACIcon />
            </div>

            <div
              className={`rounded-2xl flex max-sm:flex-col max-sm:justify-center max-sm:text-center w-full gap-6 items-center justify-between  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 3
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(3)}
            >
              <span className="text-heading text-xl">Heating</span>

              <HeatingIcon />
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-10 mb-10 gap-5">
            <Link href={"/places/places-instructions"}>
              <Button className="bg-white border border-primary  text-lg font-bold text-primary  w-32 text-center   hover:bg-secondary">
                Back
              </Button>
            </Link>
            <Link href={"/places/place-info"}>
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
