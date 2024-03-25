import { Button } from "@/components/ui/button";

import Link from "next/link";

import Faq from "./_components/Faq";
export default function Feed() {
  return (
    <div className="flex w-full  justify-between max-md:flex-col mt-6 max-md:w-full">
      <div className="w-full  flex max-md:w-full  ">
        <Faq />
      </div>
      <div className="flex flex-col p-8 gap-3  max-md:flex max-md:w-full max-md:justify-center ">
        <div className="text-center  flex flex-col items-center gap-3 ">
          <span className="text-heading font-bold text-center text-xl  ">
            Need Help?
          </span>
          <Link href="/ContactUs">
            <Button className="text-white rounded-3xl   font-bold px-10 w-40 ">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
