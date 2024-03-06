import ATVListing from "../_components/ATVListing";
import PlacesListing from "../_components/PlacesListing";

export default function HostHomePage() {
  return (
    <div className="flex flex-col p-8 gap-2">
      <span className="text-heading font-bold text-xl"> Your Listing</span>
      <PlacesListing />
      <ATVListing />
    </div>
  );
}
