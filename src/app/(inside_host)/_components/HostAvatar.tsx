"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export function HostAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer">
          <Avatar className="h-16 w-16">
            <AvatarImage src={"/assets/dummy_image.png"} alt="@shadcn" />
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-secondary cursor-pointer border-none text-black "
        align="end"
        forceMount
      >
        <Link href={"/my-account"}>
          <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white rounded-md">
            My Account
          </DropdownMenuItem>
        </Link>
        <Link href={"/listing"}>
          <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white rounded-md">
            Listing
          </DropdownMenuItem>
        </Link>
        {/* <Link href={"/community"}> */}
        <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white rounded-md">
          Community
        </DropdownMenuItem>
        {/* </Link> */}
        {/* <Link href={"/chat"}> */}
        <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white rounded-md">
          Messages
        </DropdownMenuItem>
        {/* </Link> */}

        <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white rounded-md">
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
