"use client";
import { useModal } from "@/app/Stores/ModalStore";
import { useCartStore } from "@/app/Stores/CartStore";
import { ShoppingBag } from "lucide-react";
import React from "react";

const AddToCart = ({ id }: { id: number }) => {
  const open = useModal((state) => state.activeModal === "cart");
  const setOpen = useModal((state) => state.setCartActive);
  const addToCart = useCartStore((state) => state.addCartItem);

  return (
    <div
      className="absolute bottom-2 right-2 p-2.5 hover:cursor-pointer"
      onClick={() => {
        setOpen(!open);
        addToCart(id);
      }}
    >
      <ShoppingBag className="text-primary" />
    </div>
  );
};

export default AddToCart;
