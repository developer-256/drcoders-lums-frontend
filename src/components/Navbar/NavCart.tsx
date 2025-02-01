"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useModal } from "@/app/Stores/ModalStore";

const NavCart = () => {
  const open = useModal((state) => state.activeModal === "cart");
  const setOpen = useModal((state) => state.setCartActive);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <CartTrigger onClick={() => setOpen(!open)} />

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavCart;

const CartTrigger = ({ onClick }: { onClick?: () => void }) => (
  <div className="flex items-center justify-center" onClick={onClick}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="relative">
            <ShoppingBag className="h-7 w-7 cursor-pointer text-primary" />
            <Badge className="absolute -right-2.5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-primary-foreground">
              2
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Cart</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);
