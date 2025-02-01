import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "./AddToCart";
import { useFilterStore } from "@/app/Stores/UtilsStore";

const Product = ({
  id,
  img,
  category,
  name,
  price,
  slug,
  categorySlug,
}: {
  id: number;
  img: string | StaticImageData;
  category: string;
  name: string;
  price: string | number;
  slug: string;
  categorySlug: string;
}) => {
  return (
    <div className="relative max-w-[400px] overflow-hidden rounded-xl border bg-white shadow-lg hover:shadow-lg md:shadow-md">
      <div className="relative h-56 border-b bg-primary/20">
        <Image
          src={img}
          width={350}
          height={250}
          alt=""
          className="h-full w-full object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          placeholder="blur"
        />
      </div>
      <div
        // href={`/product-detail/${categorySlug}/${slug}`}
        className="flex flex-col gap-1 px-4 pb-4 pt-4"
      >
        <p className="text-sm text-[#777]">{category}</p>

        <h3 className="font-quicksand truncate text-[17px] font-semibold leading-[18px] tracking-[0.03rem]">
          {name}
        </h3>
        <div>
          <h4 className="font-quicksand text-[17px] font-[800] text-[#686e7d]">
            Rs. {price}
          </h4>
        </div>
      </div>

      <AddToCart id={id} />
    </div>
  );
};

export default Product;
