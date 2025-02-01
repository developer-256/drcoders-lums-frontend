"use client";
import React from "react";
import MaxContainer from "../../MaxContainer";
import NavLogo from "../NavLogo";
import { Menu, ShoppingBag, UserCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useModal } from "@/app/Stores/ModalStore";
import NavSearch from "../NavSearch";

const MobileNavbar = () => {
  const open = useModal((state) => state.activeModal === "mobileSiderbar");
  const setOpen = useModal((state) => state.setCartActive);

  return (
    <MaxContainer className="py-3 md:hidden">
      <div className="flex items-center justify-between">
        <NavLogo />

        <div className="flex items-center gap-4">
          {/* <NavUserIcon /> */}
          <UserCircle size={25} className="text-primary" />
          <ShoppingBag size={24} className="text-primary" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu size={26} className="text-primary" />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <NavSearch />
    </MaxContainer>
  );
};

export default MobileNavbar;
