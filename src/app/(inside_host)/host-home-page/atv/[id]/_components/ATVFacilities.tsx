export default function ATVFacilities() {
  return (
    <>
      <div className="flex flex-col p-4 space-y-8">
        {/* The Space */}
        <div className="flex flex-col  gap-3">
          <span className="text-2xl font-bold text-heading">More info</span>

          <div className="rounded-xl  bg-secondary p-4">
            <div className="flex justify-between  items-center max-sm:flex-wrap px-8 ">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Rider Age
                  </span>
                  <span className="text-subheading text-lg ">
                    ADULTs 21 YRs +
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Single Messangers
                  </span>
                  <span className="text-subheading text-lg ">
                    ADULT Sport Utility
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    ATV Experience
                  </span>
                  <span className="text-subheading text-lg ">Any</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Damage Deposit
                  </span>
                  <span className="text-subheading text-lg ">
                    Refundable <span className="text-red-500">$250</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <span className="text-subheading text-lg">
            Helmet, Goggles, Gloves, Fuel & Park Pass are INCLUDED Rates are
            PLUS Liability and Sales Tax, Required by State
          </span>
        </div>
      </div>
    </>
  );
}
