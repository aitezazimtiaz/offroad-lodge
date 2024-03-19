"use client";
import React, { useState, type ChangeEvent } from "react";

export default function ATVBasicInfo() {
  const [seats, setSeats] = useState<string>("");

  const handleSeatChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeats(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-heading">How many seats does your ATV have?</span>

        <select
          value={seats}
          onChange={handleSeatChange}
          className="w-full text-subheading h-12 rounded-xl px-5 outline-none"
        >
          <option value="">Select Number of Seats</option>
          <option value="1">1 Seated</option>
          <option value="2">2 Seated</option>
          <option value="4">4 Seated</option>
        </select>
      </div>
    </>
  );
}
