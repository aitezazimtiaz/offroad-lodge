import { Button } from "@/components/ui/button";

export default function TourPriceCard() {
  return (
    <>
      <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl  justify-end max-sm:flex-wrap max-sm:justify-center">
        <div>
          <span className="text-red-500 font-bold text-lg">$325</span>
          <span>/per Day</span>
        </div>
        <Button className="font-bold text-white rounded-lg px-4 min-w-48">
          Reserve
        </Button>
      </div>
    </>
  );
}
