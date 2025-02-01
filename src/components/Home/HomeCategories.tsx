import React from "react";
import MaxContainer from "../MaxContainer";
import Image from "next/image";
import Link from "next/link";
import { categories, categoriesType } from "@/lib/products";

const HomeCategories = () => {
  return (
    <MaxContainer className="mt-12 px-0 md:mt-14 md:px-0">
      <h1 className="font-quicksand px-2 text-3xl font-semibold md:px-10">
        Popular <span className="text-primary">Categories</span>:
      </h1>

      <section className="mt-5 flex flex-wrap justify-around gap-y-2 md:mt-8 md:justify-center md:gap-5">
        {categories.map((Item: categoriesType, i: number) => {
          return (
            <Link
              href={`/shop?${new URLSearchParams({
                category: Item.value,
              })}`}
              key={i}
              className="group/card flex flex-col items-center rounded-lg border bg-white p-1.5 transition-transform duration-200 hover:scale-105 hover:border-primary"
            >
              <div className="h-28 w-28 overflow-hidden rounded-md border duration-200 group-hover/card:border-primary md:h-40 md:w-40">
                <Image
                  src={Item.image}
                  alt={Item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="transition-text mb-1 mt-2 duration-200 group-hover/card:text-primary">
                {Item.name}
              </h2>
            </Link>
          );
        })}
      </section>
    </MaxContainer>
  );
};

export default HomeCategories;
