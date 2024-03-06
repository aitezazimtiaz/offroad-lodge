import PlacesListing from "../_components/PlacesListing";

export default function HostHomePage() {
  return (
    <div className="flex flex-col p-4 gap-2">
      <span className="text-heading font-bold text-xl">Your Places</span>
      <PlacesListing />
    </div>
  );
}
