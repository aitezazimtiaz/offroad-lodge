import BackButton from "@/components/ui/BackButton";
import Image from "next/image";

export default function Images() {
  return (
    <>
      <div className="flex flex-col gap-3 p-4">
        <BackButton />
        <div className="flex flex-wrap gap-5 justify-center">
          <Image
            src={"/assets/bed_room1.png"}
            alt="home_image"
            width={420}
            height={420}
            className="flex"
          />
          <Image
            src={"/assets/bed_room2.png"}
            alt="home_image"
            width={420}
            height={420}
            className="flex"
          />
          <Image
            src={"/assets/bed_room3.png"}
            alt="home_image"
            width={420}
            height={420}
            className="flex"
          />
          <Image
            src={"/assets/bed_room4.png"}
            alt="home_image"
            width={420}
            height={420}
          />
          <Image
            src={"/assets/bed_room1.png"}
            alt="home_image"
            width={420}
            height={420}
          />
        </div>
      </div>
    </>
  );
}
