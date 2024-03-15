"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function BasicInfo() {
  const [guestCount, setGuestCount] = useState(0); // State for guest count
  const [bedroomCount, setBedroomCount] = useState(0); // State for bedroom count
  const [bedCount, setBedCount] = useState(0); // State for bed count

  const handleDecrement = (
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setCount((prevCount: number) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleIncrement = (
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setCount((prevCount: number) => prevCount + 1);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-heading">How many people can stay here?</span>
        <div className="flex items-center justify-between border-b border-primary">
          <span className="text-subheading">Guests</span>
          <div className="flex items-center my-3 gap-4">
            <Button
              className="w-6 h-6 p-2 border border-primary rounded-md bg-transparent text-center text-lg hover:bg-transparent"
              onClick={() => handleDecrement(setGuestCount)}
            >
              -
            </Button>
            <span className="text-heading">{guestCount}</span>
            <Button
              className="w-6 h-6 p-2 border border-primary rounded-md bg-transparent text-center hover:bg-transparent text-lg"
              onClick={() => handleIncrement(setGuestCount)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex items-center  justify-between border-b border-primary">
          <span className="text-subheading">Bedroom</span>
          <div className="flex items-center my-3 gap-4">
            <Button
              className="w-6 h-6 p-2 border border-primary rounded-md bg-transparent text-center text-lg hover:bg-transparent"
              onClick={() => handleDecrement(setBedroomCount)}
            >
              -
            </Button>
            <span className="text-heading">{bedroomCount}</span>
            <Button
              className="w-6 h-6 p-2 border border-primary rounded-md bg-transparent text-center hover:bg-transparent text-lg"
              onClick={() => handleIncrement(setBedroomCount)}
            >
              +
            </Button>
          </div>
        </div>

        <span className="text-heading">How many beds are in each room?</span>
        <div className="flex items-center  justify-between border-b border-primary ">
          <span className="text-subheading">Beds</span>
          <div className="flex items-center gap-4 my-3">
            <Button
              className="w-6 h-6 p-2 border border-primary rounded-md bg-transparent text-center text-lg hover:bg-transparent"
              onClick={() => handleDecrement(setBedCount)}
            >
              -
            </Button>
            <span className="text-heading">{bedCount}</span>
            <Button
              className="w-6 h-6 p-2 border border-primary rounded-md bg-transparent text-center hover:bg-transparent text-lg"
              onClick={() => handleIncrement(setBedCount)}
            >
              +
            </Button>
          </div>
        </div>

        <span className="text-heading">Size of beds?</span>
        <div className="flex items-center my-2 gap-4">
          <div className="flex gap-2 items-center">
            <span className="text-subheading">King size</span>
            <Checkbox id="king-size" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-subheading">Single size</span>
            <Checkbox id="single-size" />
          </div>
        </div>

        <span className="text-heading">Does every bedroom have a lock?</span>
        <RadioGroup defaultValue="yes">
          <div className="flex items-center my-2 gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-subheading">Yes</span>
              <RadioGroupItem value="yes" id="no" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-subheading">No</span>
              <RadioGroupItem value="no" id="no" />
            </div>
          </div>
        </RadioGroup>
      </div>
    </>
  );
}
