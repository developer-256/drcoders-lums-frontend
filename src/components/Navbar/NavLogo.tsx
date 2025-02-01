import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Link href={"/"} className="h-[40px] w-auto md:h-[53px]">
      <Image
        src={ImageAssets.Base.Logo}
        alt="Online Crockery"
        className="h-full w-full object-contain object-center"
      />
    </Link>
  );
};

export default NavLogo;
