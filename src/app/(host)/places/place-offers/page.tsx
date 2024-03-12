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
     <div className="flex flex-col gap-12 space-y-5 items-center justify-center w-full h-full p-4">
        <span className="font-bold text-2xl mt-16 max-sm:text-center">
          Your place is offering
        </span>

        <div className="flex flex-wrap justify-center gap-4 w-3/4 max-xl:w-full max-sm:w-full">
          {[
            { label: "Wifi", icon: <WifiIcon /> },
            { label: "TV", icon: <TVIcon /> },
            { label: "AirConditioner", icon: <ACIcon /> },
            { label: "Heating", icon: <HeatingIcon /> },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl flex flex-col justify-center items-center w-[45%] max-sm:w-full gap-6 div-drop-shadow py-5 px-8 bg-white cursor-pointer ${
                selectedDiv === index
                  ? "border border-primary font-bold hover:bg-none"
                  : "border border-titleheading"
              }`}
              onClick={() => handleDivClick(index)}
            >
              <span className="text-heading text-xl">{item.label}</span>
              {item.icon}
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-end mt-10 mb-10 gap-5 max-md:justify-center">
          <Link href={"/places/place-instructions"}>
            <Button className="bg-white border border-primary text-lg font-bold text-primary w-32 text-center hover:bg-secondary">
              Back
            </Button>
          </Link>
          <Link href={"/places/upload-places-images"}>
            <Button className="bg-primary text-lg font-bold text-white w-32 text-center">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
