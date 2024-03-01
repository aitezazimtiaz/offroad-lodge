export default function CabinAbout() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-heading text-2xl font-bold">
            About this place
          </span>
          <span className="text-red-500 underline cursor-pointer">
            Report this listing
          </span>
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
