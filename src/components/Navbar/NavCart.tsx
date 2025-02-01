"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useModal } from "@/app/Stores/ModalStore";
import { useCartStore } from "@/app/Stores/CartStore";
import Image from "next/image";
import { AllProducts } from "@/lib/products";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import CartItem from "./CartItem";

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
          <SheetDescription className="flex w-full flex-col gap-5">
            {cartItems.map((Item, idx) => {
              return <CartItem id={Item.id} count={Item.count} />;
            })}
          </SheetDescription>
        </SheetHeader>
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
