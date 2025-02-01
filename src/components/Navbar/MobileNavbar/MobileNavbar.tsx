"use client";
import React from "react";
import MaxContainer from "../../MaxContainer";
import NavLogo from "../NavLogo";
import { Menu, ShoppingBag, UserCircle } from "lucide-react";
import { useModal } from "@/app/Stores/ModalStore";
import NavSearch from "../NavSearch";

const MobileNavbar = () => {
  const open = useModal((state) => state.activeModal === "cart");
  const setOpen = useModal((state) => state.setCartActive);

  return (
    <MaxContainer className="py-3 md:hidden">
      <div className="flex items-center justify-between">
        <NavLogo />

        <div className="flex items-center gap-4">
          <UserCircle size={25} className="text-primary" />
          <ShoppingBag
            size={24}
            className="text-primary"
            onClick={() => setOpen(!open)}
          />
          <Menu size={26} className="text-primary" />
        </div>
      </div>

      <NavSearch />
    </MaxContainer>
  );
};

export default MobileNavbar;
