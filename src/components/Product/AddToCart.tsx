"use client";
import { useModal } from "@/app/Stores/ModalStore";
import { ShoppingBag } from "lucide-react";
import React from "react";

const AddToCart = () => {
  const open = useModal((state) => state.activeModal === "cart");
  const setOpen = useModal((state) => state.setCartActive);

  return (
    <div
      className="absolute bottom-2 right-2 p-2.5 hover:cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <ShoppingBag className="text-primary" />
    </div>
  );
};

export default AddToCart;
