import Image from "next/image";

export default function TourImageGrid() {
  return (
    <>
      <div className="flex flex-col max-lg:justify-center max-lg:items-center gap-5 ml-5 max-sm:ml-0">
        <Image
          src={"/assets/bed_room1.png"}
          alt="home_image"
          width={620}
          height={600}
        />
        <div className="flex flex-wrap max-lg:justify-center max-lg:items-center gap-5 w-full ">
          <Image
            src={"/assets/bed_room2.png"}
            alt="home_image"
            width={280}
            height={280}
            className="flex"
          />
          <Image
            src={"/assets/bed_room3.png"}
            alt="home_image"
            width={280}
            height={280}
            className="flex"
          />
          <Image
            src={"/assets/bed_room4.png"}
            alt="home_image"
            width={280}
            height={280}
          />
          <Image
            src={"/assets/bed_room1.png"}
            alt="home_image"
            width={280}
            height={280}
          />
        </div>
        {/* <div className="flex flex-wrap gap-5 w-full ">
         
        </div> */}
      </div>
    </>
  );
}
