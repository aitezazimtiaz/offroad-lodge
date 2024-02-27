import Image from "next/image";

interface Topbar {
  text: string;
  showText: boolean;
}

const Topbar = ({ text, showText }: Topbar) => {
  return (
    <div className="flex items-center border-b-2 border-[#3BC8C0] p-3 w-full">
      <Image src={"/assets/logo.svg"} alt="logo" width={90} height={90} />
      <div className=" flex flex-col gap-4 mt-5  justify-center items-center w-full">
        <div className="h-10">
          {showText && (
            <span className="text-4xl font-bold">Welcome to Offroad Lodge</span>
          )}
        </div>
        <span className="text-primary font-bold text-xl">{text}</span>
      </div>
    </div>
  );
};

export default Topbar;
