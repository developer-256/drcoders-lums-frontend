"use client";
import MaxContainer from "@/components/MaxContainer";
import { cn } from "@/lib/utils";
import { Circle, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SubNav = () => {
  const pathName = usePathname();
  return (
    <div className="hidden border-b bg-transparent py-2 md:block">
      <MaxContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10 text-foreground">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-[1.5px]">
            <LayoutGrid className="text-primary" size={24} strokeWidth={1.6} />
          </div>

          {NavLinks.map((Item, i) => {
            return (
              <Link
                key={i}
                href={Item.URL}
                className={cn(
                  "flex items-center gap-2 transition-all hover:text-primary",
                  {
                    "font-medium text-primary": pathName === Item.URL,
                  },
                )}
              >
                <span>{Item.Name}</span>
                <Circle size={10} strokeWidth={3} className="mt-[2px]" />
              </Link>
            );
          })}
        </div>

        <div></div>
      </MaxContainer>
    </div>
  );
};

export default SubNav;

const NavLinks = [
  { Name: "Home", URL: "/" },
  { Name: "Shop", URL: "#" },
  { Name: "Categories", URL: "#" },
  { Name: "About", URL: "#" },
  { Name: "Blogs", URL: "#" },
];
