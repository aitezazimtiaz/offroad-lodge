import { Button } from "@/components/ui/button";

export default function ATVAbout() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-heading text-2xl font-bold">
            About this ATV
          </span>
          <Button className="font-bold text-white rounded-lg px-4 min-w-32">
            Claim
          </Button>
        </div>
        <div className="bg-secondary rounded-xl p-4 ">
          <span className="text-heading">
            Nestled high in the beautiful mountains of southern West Virginia,
            the Hillside Hangout is a newly renovated house perfectly suited to
            host Hatfield-McCoy Trail riders, their family and friends. With 3
            bedrooms, the Hangout sleeps 8 people.
          </span>
        </div>
      </div>
    </>
  );
}
