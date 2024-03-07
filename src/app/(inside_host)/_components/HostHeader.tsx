import Image from "next/image";

import { HostAvatar } from "./HostAvatar";
import BagIcon from "@/components/icons/BagIcon";
import Link from "next/link";
const HostHeader = () => {
  return (
    <div className="flex max-sm:flex-col items-center border-b-2 border-[#3BC8C0] p-5 gap-5 w-full justify-between">
      <Image src={"/assets/logo.svg"} alt="logo" width={100} height={100} />
      <div className="flex items-center gap-5">
        <Link href={"/"}>
          <div className="bg-secondary p-4 gap-4 rounded-xl flex items-center cursor-pointer">
            <BagIcon />
            <span className="text-heading">Switch to travel</span>
          </div>
        </Link>
        <HostAvatar />
      </div>
    </div>
  );
};
export default HostHeader;
