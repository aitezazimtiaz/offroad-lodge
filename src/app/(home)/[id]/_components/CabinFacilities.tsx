import BathIcon from "@/components/icons/BathIcon";
import BedIcon from "@/components/icons/BedIcon";
import CheckinIcon from "@/components/icons/CheckinIcon";
import CheckoutIcon from "@/components/icons/CheckoutIcon";
import EssentialsIcon from "@/components/icons/EssentialsIcon";
import GuestIcon from "@/components/icons/GuestIcon";
import StrictIcon from "@/components/icons/StrictIcon";

export default function CabinFacilities() {
  return (
    <>
      <div className="flex flex-col p-4 space-y-8">
        <div className="flex items-center gap-16 max-sm:flex-wrap max-sm:gap-8">
          {/* Bathroom Count */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center relative">
              <div className="flex items-center  justify center rounded-full p-2 bg-secondary">
                <BathIcon />
              </div>
              <div className=" absolute -z-10 -right-0 rounded-2xl flex bg-secondary justify-center items-center px-4 text-heading">
                1
              </div>
            </div>
            <span className="text-subheading ">Bathroom</span>
          </div>

          {/* Bed Count */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center relative">
              <div className="flex items-center  justify center rounded-full p-2 bg-secondary">
                <BedIcon />
              </div>
              <div className=" absolute -z-10 -right-0 rounded-2xl flex bg-secondary justify-center items-center px-4 text-heading">
                1
              </div>
            </div>
            <span className="text-subheading ">Bedroom</span>
          </div>

          {/* Guests Count */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center relative">
              <div className="flex items-center  justify center rounded-full p-2 bg-secondary">
                <GuestIcon />
              </div>
              <div className=" absolute -z-10 -right-5 rounded-2xl flex bg-secondary justify-center items-center px-4 text-heading">
                2
              </div>
            </div>
            <span className="text-subheading ">Guests</span>
          </div>
        </div>

        {/* Amenitites */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-heading">Amenities</span>
          <div className="flex items-center gap-2">
            <EssentialsIcon />
            <span className="text-subheading text-lg">Essentials</span>
          </div>
        </div>

        {/* The Space */}
        <div className="flex flex-col  gap-3">
          <span className="text-2xl font-bold text-heading">The Space</span>

          <div className="rounded-xl  bg-secondary p-4">
            <div className="flex justify-between  items-center max-sm:flex-wrap  ">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Bed Type
                  </span>
                  <span className="text-subheading text-lg ">Queen</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Bedroom
                  </span>
                  <span className="text-subheading text-lg ">1</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Property Type
                  </span>
                  <span className="text-subheading text-lg ">
                    Buffalo Mountain
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Bathroom
                  </span>
                  <span className="text-subheading text-lg ">1</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Accomodates
                  </span>
                  <span className="text-subheading text-lg ">1</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Beds in each room
                  </span>
                  <span className="text-subheading text-lg ">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Things to know */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold text-heading">
            Things to know
          </span>

          <div className="rounded-xl  bg-secondary p-4">
            <div className="flex justify-between max-sm:flex-wrap ">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Hours rules
                  </span>
                  <div className="flex gap-3 items-center">
                    <CheckinIcon />
                    <span className="text-subheading">
                      {" "}
                      Check in after: 3PM
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <CheckoutIcon />
                    <span className="text-subheading">
                      {" "}
                      Check out after: 3PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Cancellation Policy
                  </span>
                  <div className="flex gap-1 items-center">
                    <StrictIcon className="mt-1" />
                    <span className=" text-red-500">Strict</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
