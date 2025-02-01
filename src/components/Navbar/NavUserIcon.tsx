"use client";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const NavUserIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative cursor-pointer">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={(e) => e.preventDefault()}
          className="!outline-none !ring-0"
        >
          <Avatar className="mt-1.5 h-[30px] w-[30px]">
            <AvatarImage src="https://developer-256.github.io/assets/drcoders-lums-ldf.svg" />
            <AvatarFallback>OC</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          // alignOffset={-5}
          sideOffset={-3}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="w-32 border-0 bg-transparent px-0 py-0 pt-3 shadow-none"
        >
          <div className="text-base-blue flex h-full w-full flex-col gap-1 rounded-lg border bg-white px-4 py-2 shadow-md">
            <Link
              href={"#"}
              className="text-primary transition-all hover:font-semibold hover:text-primary/90"
            >
              Register
            </Link>
            <Link
              href={"#"}
              className="text-primary transition-all hover:font-semibold hover:text-primary/90"
            >
              Login
            </Link>
            {/* profile when logged in */}
            <Link
              href={"#"}
              className="text-primary transition-all hover:font-semibold hover:text-primary/90"
            >
              Checkout
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavUserIcon;
