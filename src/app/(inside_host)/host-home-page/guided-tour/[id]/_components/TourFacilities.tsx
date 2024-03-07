export default function TourFacilities() {
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
                    Tour Duration
                  </span>
                  <span className="text-subheading text-lg ">15 Days</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Start Location
                  </span>
                  <span className="text-subheading text-lg ">Hillside</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Start Time
                  </span>
                  <span className="text-subheading text-lg ">10:00 AM</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Number of People
                  </span>
                  <span className="text-subheading text-lg ">28</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold">
                    Group Type
                  </span>
                  <span className="text-subheading text-lg ">Public</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-heading text-lg font-semibold"></span>
                  <span className="text-subheading text-lg "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
