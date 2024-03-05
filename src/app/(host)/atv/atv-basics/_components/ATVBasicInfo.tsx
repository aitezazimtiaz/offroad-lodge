"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ATVBasicInfo() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-heading">How many seats your ATV have?</span>

        <div className="flex justify-between items-center">
          <span className="text-subheading">1 Seated</span>
          <Checkbox id="1-seated" />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-subheading">2 Seated</span>
          <Checkbox id="2-seated" />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-subheading">4 Seated</span>
          <Checkbox id="4-seated" />
        </div>
      </div>
    </>
  );
}
