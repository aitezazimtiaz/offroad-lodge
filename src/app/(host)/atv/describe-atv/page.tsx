"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import HondaIcon from "@/components/icons/HondaIcon";
import YamahaIcon from "@/components/icons/YamahaIcon";
import FordIcon from "@/components/icons/FordIcon";
import Link from "next/link";

export default function DescribeATV() {
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
          Describe your ATV
        </span>

        <div className="flex flex-col gap-4 w-1/2 max-xl:w-3/4 max-sm:w-full">
          <div className="flex flex-wrap gap-5 rounded-2xl bg-secondary p-8 justify-center ">
            <div
              className={`rounded-2xl flex flex-col w-32 gap-6 items-center  div-drop-shadow py-5 px-8 bg-white   cursor-pointer ${
                selectedDiv === 0
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(0)}
            >
              <HondaIcon />
              <span className=" text-lg">Honda</span>
            </div>
            <div
              className={`rounded-2xl flex flex-col gap-6 w-32 items-center  div-drop-shadow py-5 px-8 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 1
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(1)}
            >
              <YamahaIcon />
              <span className=" text-lg">Yamaha</span>
            </div>

            <div
              className={`rounded-2xl flex flex-col gap-6 w-32 items-center  div-drop-shadow py-5 px-8 bg-white  hover:border-primary cursor-pointer ${
                selectedDiv === 2
                  ? " border border-primary font-bold hover:bg-none"
                  : " border border-titleheading"
              }`}
              onClick={() => handleDivClick(2)}
            >
              <FordIcon />
              <span className=" text-lg">Ford</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-end mt-10 mb-10">
            <Link href={"/atv/atv-info"}>
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
