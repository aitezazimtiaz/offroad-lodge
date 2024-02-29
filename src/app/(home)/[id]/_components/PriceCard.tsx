import { Button } from "@/components/ui/button";

export default function PriceCard() {
  return (
    <>
      <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl  justify-end">
        <div>
          <span className="text-red-500 font-bold text-lg">$325</span>
          <span>/night</span>
        </div>
        <Button className="font-bold text-white rounded-lg px-4 min-w-48">
          Reserve
        </Button>
      </div>
    </>
  );
}
