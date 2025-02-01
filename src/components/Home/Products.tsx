"use client";
import React from "react";
import MaxContainer from "../MaxContainer";
import Product from "../Product/Product";
import { AllProducts } from "@/lib/products";
import { useFilterStore } from "@/app/Stores/UtilsStore";

const Products = () => {
  const filter = useFilterStore((state) => state.filter);

  return (
    <div className="mt-10 md:mt-14">
      <div className="flex flex-col-reverse justify-between gap-3 px-4 md:flex-row md:items-center md:px-10">
        <h2 className="font-quicksand text-3xl font-semibold">
          Get <span className="text-primary">Products</span> you need:
        </h2>
      </div>

      <MaxContainer className="xs:grid-cols-2 xs:gap-4 mt-6 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
        {AllProducts.filter((item) => {
          if (filter === "all") {
            return item;
          }
          return item.type === filter;
        }).map((Item, idx) => {
          return (
            <Product
              key={idx}
              id={Item.id}
              slug={idx.toString()}
              img={Item.filename}
              name={Item.title}
              category={Item.type}
              categorySlug={Item.type}
              price={Item.price}
            />
          );
        })}
      </MaxContainer>
    </div>
  );
};

export default Products;
