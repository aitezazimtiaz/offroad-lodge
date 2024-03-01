"use client";

import { useRouter } from "next/navigation";
import LeftArrowIcon from "../icons/LeftArrow";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleBack}
      >
        <LeftArrowIcon />
        <span className="font-bold text-lg">Back</span>
      </div>
    </>
  );
};

export default BackButton;
