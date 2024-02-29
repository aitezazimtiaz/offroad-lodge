import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { companies } from "@/data/fakebackend";
import Image from "next/image";

export default function CompaniesList() {
  return (
    <div className="px-2">
      {companies.length && (
        <Carousel className={"px-2"}>
          <CarouselPrevious />
          <CarouselContent className="w-full px-2">
            {companies.map((company, index) => (
              <CarouselItem
                className="flex flex-col justify-center items-center   basis-1/3"
                key={index}
              >
                <Image
                  src={company.profileAvatar}
                  alt="company_logo"
                  layout="fixed"
                  objectFit="cover"
                  className="rounded-full"
                />

                <span className="text-center max-sm:text-xs">
                  {company.username}
                </span>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}
