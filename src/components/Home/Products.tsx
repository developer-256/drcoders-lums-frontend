import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import MaxContainer from "../MaxContainer";
import Product from "../Product/Product";
import { AllProducts } from "@/lib/products";

const Products = () => {
  return (
    <div className="mt-10 md:mt-14">
      <div className="flex flex-col-reverse justify-between gap-3 px-4 md:flex-row md:items-center md:px-10">
        <h2 className="font-quicksand text-3xl font-semibold">
          The <span className="text-primary">Deal</span> of the Day:
        </h2>

        <Link href={"/shop"} className="flex items-center gap-1">
          <h4 className="text-lg">Go to Shop</h4>
          <ArrowRight size={18} />
        </Link>
      </div>

      <MaxContainer className="xs:grid-cols-2 xs:gap-4 mt-6 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
        {AllProducts.map((Item, idx) => {
          return (
            <Product
              key={idx}
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
