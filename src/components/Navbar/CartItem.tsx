import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { AllProducts } from "@/lib/products";
import { useCartStore } from "@/app/Stores/CartStore";

const CartItem = ({ id, count }: { id: number; count: number }) => {
  const Product = AllProducts.filter((item) => item.id === id);
  const inc = useCartStore((state) => state.addCartItem);
  const dec = useCartStore((state) => state.removeCartItem);

  if (Product)
    return (
      <div className="flex gap-4 rounded-md bg-slate-400/20 px-4 py-3">
        <div className="h-14 w-20 overflow-hidden rounded-sm">
          <Image
            src={Product[0].filename}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="w-full">
          <h3 className="text-start text-sm leading-4 text-slate-800 md:leading-[1.25rem]">
            {Product[0].title}
          </h3>

          <div className="flex flex-col justify-between text-start md:flex-row md:items-center md:gap-4">
            <p className="mt-1 md:mt-0">Price: {Product[0].price}</p>

            <div className="mt-1.5 flex items-end">
              <Minus
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-l-sm bg-white p-1.5"
                onClick={() => dec(id)}
              />
              <div className="flex h-7 w-5 items-center justify-center bg-white">
                {count}
              </div>
              <Plus
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-r-sm bg-white p-1.5"
                onClick={() => inc(id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default CartItem;
