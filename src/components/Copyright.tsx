export default function Copyright() {
  return (
    <div className="flex justify-between max-sm:flex-col max-sm:gap-3 max-sm:justify-center max-sm:items-center p-4 border-[#D8D8D8] border-t-2">
      <span className="text-subheading max-sm:text-center">
        © 2024 Offroad Lodge. All rights reserved
      </span>
      <div className="flex gap-3 text-subheading">
        <span className="cursor-pointer">Terms & Conditions</span>
        <span className="cursor-pointer">Privacy Policy</span>
      </div>
    </div>
  );
}
