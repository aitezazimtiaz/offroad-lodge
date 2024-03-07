import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex w-full    mt-8" >
      
      
     <div className="w-full relative "
  >

<div className="flex  flex-col w-[40%] gap-5 absolute z-10 pl-10 max-lg:w-[100%] max-lg:justify-center max-lg:p-10" >
        <p className="text-heading font-bold text-6xl max-lg:text-center ">About<br className="max-lg:hidden"/> Us</p>
        <div className="bg-secondary opacity-80 flex justify-center p-4 items-center h-full max-lg:rounded-2xl"  >
        <p className="text-heading text-left ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque, turpis vel tempor vehicula, tellus elit gravida massa,
          sit amet imperdiet nulla lorem non ligula.Integer dictum, sapien
          scelerisque viverra lobortis, purus diam eleifend magna, id maximus
          justo ipsum vel sapien.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent pellentesque, turpis vel tempor vehicula,
          tellus elit gravida massa, sit amet imperdiet nulla lorem non
          ligula.Integer dictum, sapien scelerisque viverra lobortis, purus diam
          eleifend magna, id maximus justo ipsum vel sapien.
        </p>
      </div>
      </div>
      <div className="w-full justify-end relative">
     <Image
        src={"/assets/about_us.png"}
        width={900}
        height={1000}
        className="px-3 absolute right-10 max-lg:hidden"
        alt="avatar"
      />  
      </div>
      </div>
    </div>
  );
}
