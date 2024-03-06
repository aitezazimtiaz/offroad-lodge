import Image from "next/image";

import { HostAvatar } from "./HostAvatar";

const Header = () => {
  return (
    <div className="flex max-sm:flex-col items-center border-b-2 border-[#3BC8C0] p-5  w-full justify-between">
      <Image src={"/assets/logo.svg"} alt="logo" width={100} height={100} />
      <HostAvatar />
    </div>
  );
};

export default Header;
