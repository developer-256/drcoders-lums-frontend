import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Heart } from "lucide-react";

const NavWishlist = () => {
  return (
    <div className="hidden items-center justify-center md:flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href={"/wishlist"}>
              <Heart className="h-7 w-7 cursor-pointer text-primary" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Wishlist</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default NavWishlist;
