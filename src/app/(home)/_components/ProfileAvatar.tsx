"use client";

import { cn } from "@/utils/cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}
export function ProfileAvatar({ className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <Avatar className="h-16 w-16">
            <AvatarImage src={"/assets/dummy_image.png"} alt="@shadcn" />
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-greendarkest cursor-pointer border-none text-black"
        align="end"
        forceMount
      >
        <DropdownMenuItem className="cursor-pointer">Login</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Signup</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
