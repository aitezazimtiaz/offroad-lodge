"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="bg-secondary px-4  rounded-xl">
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-5">
          <Link href={"/"} className="cursor-pointer py-6">
            Cabins
          </Link>

          <Link href={"/GuidedTours"} className="cursor-pointer py-6">
            Guided Tours
          </Link>

          <Link href={"/GuidedTours"} className="cursor-pointer py-6">
            ATV Rentals
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
