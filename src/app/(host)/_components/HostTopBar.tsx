import Image from "next/image";

const HostTopbar = () => {
  return (
    <div className="flex max-sm:flex-col items-center border-b-2 border-[#3BC8C0] p-10 w-full">
      <Image src={"/assets/logo.svg"} alt="logo" width={150} height={150} />
    </div>
  );
};

export default HostTopbar;
