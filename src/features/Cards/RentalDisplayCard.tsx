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

interface Rental {
  image: StaticImageData[]; // an array of string paths to images
  profileAvatar: StaticImageData;

  rating: string; // string representing the rating (e.g., "4.8")
  location: string;
  price: string;
}

const RentalDisplayCard: React.FC<{ rental: Rental; showIcons: boolean }> = ({
  rental,
  showIcons,
}) => {
  return (
    <div className="">
      <div className="w-64 h-54 rounded-xl outline-none mt-10 relative cursor-pointer">
        <Carousel>
          <CarouselPrevious />
          <Link href={"/host-home-page/atv/12"}>
            <CarouselContent>
              {rental.image.map((image, index) => (
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

        {showIcons && (
          <div className="absolute top-1 flex gap-3 justify-end p-4 w-full">
            <Link href={"/atv/atv-info"}>
              <div className="rounded-full p-2 bg-primary flex justify-center items-center">
                <PencilIcon stroke="white" />
              </div>
            </Link>
            <div className="rounded-full p-2 bg-primary flex justify-center items-center">
              <TrashIcon />
            </div>
          </div>
        )}

        <div className=" absolute bottom-5 flex w-full px-4 justify-between">
          <div className="flex items-center gap-2">
            <RatingIcon />
            <span className="text-titleheading font-bold">{rental.rating}</span>
          </div>
          <Image
            src={rental.profileAvatar}
            alt="profile_avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-semibold text-heading">{rental.location}</span>

        <span className="font-semibold text-heading">
          <span className="text-red-500 font-semibold">{rental.price}</span>/Day
        </span>
      </div>
    </div>
  );
};

export default RentalDisplayCard;
