import React from "react";
import MaxContainer from "../MaxContainer";
import { cn } from "@/lib/utils";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import NavUserIcon from "./NavUserIcon";
import NavWishlist from "./NavWishlist";
import NavCart from "./NavCart";

const Navbar = () => {
  return (
    <div className="hidden border-b bg-transparent py-2 md:block">
      <MaxContainer
        className={cn("relative flex items-center justify-between")}
      >
        <NavLogo />
        <NavSearch />

        <div className="flex items-center gap-5">
          <NavUserIcon />
          <NavWishlist />
          <NavCart />
        </div>
      </MaxContainer>
    </div>
  );
};

export default Navbar;
