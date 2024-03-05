"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import RoomIcon from "@/components/icons/RoomIcon";
import SharedRoomIcon from "@/components/icons/SharedRoomIcon";
import SmallHouseIcon from "@/components/icons/SmallHouseIcon";
import Link from "next/link";

export default function DescribePlace2() {
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
          Type of place will guests have?
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
              <div className="flex flex-col gap-1">
                <span className="text-heading font-bold text-xl">
                  An entire place
                </span>
                <span className="text-subheading">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <SmallHouseIcon />
            </div>

            <div
              className={`rounded-2xl flex w-full max-sm:flex-col max-sm:justify-center max-sm:text-center gap-6 items-center justify-between  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 1
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(1)}
            >
              <div className="flex flex-col gap-1">
                <span className="text-heading font-bold text-xl">A Room</span>
                <span className="text-subheading">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <RoomIcon />
            </div>

            <div
              className={`rounded-2xl flex w-full gap-6 max-sm:flex-col max-sm:justify-center max-sm:text-center items-center justify-between  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 2
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(2)}
            >
              <div className="flex flex-col gap-1">
                <span className="text-heading font-bold text-xl">
                  A Shared Room
                </span>
                <span className="text-subheading">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <SharedRoomIcon />
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-10 mb-10 gap-5">
            <Link href={"/places/describe-place"}>
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
