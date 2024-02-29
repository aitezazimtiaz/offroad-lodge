import Image from "next/image";

export default function ImagesGrid() {
  return (
    <>
      <div className="flex flex-col  gap-5">
        <Image
          src={"/assets/bed_room1.png"}
          alt="home_image"
          width={620}
          height={600}
        />
        <div className="flex gap-5 w-full ">
          <Image
            src={"/assets/bed_room2.png"}
            alt="home_image"
            width={300}
            height={300}
          />
          <Image
            src={"/assets/bed_room3.png"}
            alt="home_image"
            width={300}
            height={300}
          />
        </div>
        <div className="flex gap-5 w-full ">
          <Image
            src={"/assets/bed_room4.png"}
            alt="home_image"
            width={300}
            height={300}
          />
          <Image
            src={"/assets/bed_room1.png"}
            alt="home_image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
