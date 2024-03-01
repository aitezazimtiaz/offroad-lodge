import RatingIcon from "@/components/icons/RatingIcon";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface Cabin {
  image: StaticImageData[]; // an array of string paths to images
  profileAvatar: StaticImageData;

  rating: string; // string representing the rating (e.g., "4.8")
  location: string;
  price: string;
  hostName: string;
}

const DisplayCard: React.FC<{ cabin: Cabin }> = ({ cabin }) => {
  return (
    <div className="">
      <div className="w-64 h-54 rounded-xl outline-none mt-10 relative cursor-pointer">
        <Carousel>
          <CarouselPrevious />
          <Link href={"/12"}>
            <CarouselContent>
              {cabin.image.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={image}
                    alt="home_image"
                    width={600}
                    height={600}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Link>
          <CarouselNext />
        </Carousel>

        <div className=" absolute bottom-5 flex w-full px-4 justify-between">
          <div className="flex items-center gap-2">
            <RatingIcon />
            <span className="text-titleheading font-bold">{cabin.rating}</span>
          </div>
          <Image
            src={cabin.profileAvatar}
            alt="profile_avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-bold text-heading">{cabin.location}</span>
        <span className="text-subheading font-bold">
          Stay with {cabin.hostName}
        </span>
        <span className="font-bold text-heading">
          <span className="text-red-500 font-bold">{cabin.price}</span>/night
        </span>
      </div>
    </div>
  );
};

export default DisplayCard;
