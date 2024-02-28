"use client";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Define the active tab state
  const [activeTab, setActiveTab] = useState("");

  // Function to update the active tab based on the current route
  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("cabins");
    } else if (pathname === "/GuidedTours") {
      setActiveTab("guidedTours");
    } else if (pathname === "/ATVRentals") {
      setActiveTab("atvRentals");
    }
  }, [pathname]);

  return (
    <NavigationMenu className="bg-secondary px-4  rounded-xl">
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-5">
          <Link
            href={"/"}
            className={`cursor-pointer font-semibold py-6 ${activeTab === "cabins" ? " text-primary  border-t-2 border-primary" : ""}`}
          >
            Cabins
          </Link>

          <Link
            href={"/GuidedTours"}
            className={`cursor-pointer font-semibold py-6 ${activeTab === "guidedTours" ? " text-primary  border-t-2 border-primary" : ""}`}
          >
            Guided Tours
          </Link>

          <Link
            href={"/ATVRentals"}
            className={`cursor-pointer font-semibold py-6 ${activeTab === "atvRentals" ? " text-primary  border-t-2 border-primary" : ""}`}
          >
            ATV Rentals
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
