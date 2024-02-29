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
import Link from "next/link";

interface Props {
  className?: string;
}
export function ProfileAvatar({ className }: Props) {
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
        className="w-56 bg-secondary cursor-pointer border-none text-black sm:hidden"
        align="end"
        forceMount
      >
        <Link href={"/login"}>
          <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white rounded-md">
            Login
          </DropdownMenuItem>
        </Link>
        <Link href={"/register"}>
          <DropdownMenuItem className="cursor-pointer hover:bg-primary hover:text-white rounded-md">
            Signup
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
