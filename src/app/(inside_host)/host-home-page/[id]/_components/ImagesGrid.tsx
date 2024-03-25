import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImagesGrid() {
  return (
    <>
      <div className="flex flex-col max-lg:justify-center max-lg:items-center gap-5 ml-5 max-sm:ml-0 max-sm:hidden">
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

      <div className="w-full sm:hidden">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {" "}
              <Image
                src={"/assets/bed_room1.png"}
                alt="home_image"
                width={620}
                height={600}
              />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Image
                src={"/assets/bed_room2.png"}
                alt="home_image"
                width={620}
                height={600}
              />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Image
                src={"/assets/bed_room3.png"}
                alt="home_image"
                width={620}
                height={600}
              />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Image
                src={"/assets/bed_room4.png"}
                alt="home_image"
                width={620}
                height={600}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
