"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronsUpDown,
  LogOut,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useModal } from "@/app/Stores/ModalStore";
import { useCartStore } from "@/app/Stores/CartStore";
import CartItem from "./CartItem";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const NavCart = () => {
  const open = useModal((state) => state.activeModal === "cart");
  const setOpen = useModal((state) => state.setCartActive);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <CartTrigger onClick={() => setOpen(!open)} />

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart:</SheetTitle>
          <SheetDescription className="hidden" aria-hidden />
        </SheetHeader>

        <section className="mt-2 flex h-[87%] flex-col gap-5 overflow-auto md:h-[87%]">
          {cartItems.map((Item, idx) => {
            return <CartItem id={Item.id} count={Item.count} />;
          })}
        </section>

        <SheetFooter className="mx-auto mt-5 w-full">
          {/**
           * @todo make this dynamic for login
           */}
          {/* <SheetClose className="w-full">
            <Button className="w-full text-lg">Login</Button>
          </SheetClose> */}
          <Popover>
            <PopoverTrigger className="flex w-full items-center">
              <Avatar className="rounded-lg">
                <AvatarImage src="https://developer-256.github.io/assets/drcoders-lums-ldf.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <span className="ml-3 mr-1 inline-block w-[70%] text-sm font-medium leading-4 sm:w-[80%]">
                <h3 className="truncate text-start">Username</h3>
                <p className="truncate text-start">username@email.com</p>
              </span>

              <ChevronsUpDown size={18} className="" />
            </PopoverTrigger>

            <PopoverContent className="mb-3 flex w-64 flex-col gap-3">
              <span className="flex items-center gap-2.5 font-medium hover:text-primary">
                <BadgeCheck /> Account
              </span>

              <span className="border-t" />

              <span className="flex items-center gap-2.5 font-medium hover:text-primary">
                <LogOut /> Logout
              </span>
            </PopoverContent>
          </Popover>

          <div className="mb-5 border-t" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavCart;

const CartTrigger = ({ onClick }: { onClick?: () => void }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalItems = cartItems?.reduce((sum, { count }) => sum + count, 0) ?? 0;

  return (
    <div className="flex items-center justify-center" onClick={onClick}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative">
              <ShoppingBag className="h-7 w-7 cursor-pointer text-primary" />
              <Badge className="absolute -right-2.5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-primary-foreground">
                {totalItems}
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
};
