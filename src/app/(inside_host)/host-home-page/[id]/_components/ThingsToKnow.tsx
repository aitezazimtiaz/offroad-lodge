import CheckinIcon from "@/components/icons/CheckinIcon";
import CheckoutIcon from "@/components/icons/CheckoutIcon";
import StrictIcon from "@/components/icons/StrictIcon";

export default function ThingsToKnow() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-2xl font-bold text-heading">Things to know</span>

        <div className="rounded-xl  bg-secondary p-4">
          <div className="flex justify-between max-sm:flex-wrap ">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <span className="text-heading text-lg font-semibold">
                  Hours rules
                </span>
                <div className="flex gap-3 items-center">
                  <CheckinIcon />
                  <span className="text-subheading"> Check in after: 3PM</span>
                </div>
                <div className="flex gap-3 items-center">
                  <CheckoutIcon />
                  <span className="text-subheading"> Check out after: 3PM</span>
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
    </>
  );
}
