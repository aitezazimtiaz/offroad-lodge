import PencilIcon from "@/components/icons/PencilIcon";
import RatingIcon from "@/components/icons/RatingIcon";
import TrashIcon from "@/components/icons/TrashIcon";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface Place {
  image: StaticImageData[]; // an array of string paths to images
  profileAvatar: StaticImageData;

  //rating: string; // string representing the rating (e.g., "4.8")
  location: string;
  price: string;
}

const PlaceDisplayCard: React.FC<{ place: Place }> = ({ place }) => {
  return (
    <div className="">
      <div className="w-64 h-54 rounded-xl outline-none mt-10 relative cursor-pointer">
        <Carousel>
          <CarouselPrevious />
          <Link href={"host-home-page/12"}>
            <CarouselContent>
              {place.image.map((image, index) => (
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

        <div className="absolute top-1 flex gap-3 justify-end p-4 w-full">
          <Link href={"/places/place-info"}>
            <div className="rounded-full p-2 bg-primary flex justify-center items-center">
              <PencilIcon stroke="white" />
            </div>
          </Link>

          <div className="rounded-full p-2 bg-primary flex justify-center items-center">
            <TrashIcon />
          </div>
        </div>

        <div className=" absolute bottom-5 flex w-full px-4 justify-end">
          {/* <div className="flex items-center gap-2">
            <RatingIcon />
            <span className="text-titleheading font-bold">{place.rating}</span>
          </div> */}
          <Image
            src={place.profileAvatar}
            alt="profile_avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-bold text-heading">{place.location}</span>

        <span className="font-bold text-heading">
          <span className="text-red-500 font-bold">{place.price}</span>/night
        </span>
      </div>
    </div>
  );
};

export default PlaceDisplayCard;
