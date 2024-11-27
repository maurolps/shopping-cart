import { useEffect, useState } from "react";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import { motion } from "framer-motion";
import { useAppSelector } from "../features/hooks";
import { Link } from "react-router-dom";

function Underline(): JSX.Element {
  return (
    <motion.div
      layoutId="underline"
      className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-primary"
    ></motion.div>
  );
}

export default function AllShoes() {
  const productsCategories = useAppSelector(
    (state) => state.products.categories
  );

  const { running = [], training = [], walking = [] } = productsCategories;
  const [displayShoes, setDisplayShoes] = useState([] as typeof walking);
  const isLoading = displayShoes.length === 0;

  useEffect(() => {
    if (!displayShoes.length) setDisplayShoes(walking);
  }, [displayShoes, walking]);

  return (
    <div className=" flex flex-col gap-2 sm:gap-4 m-auto">
      <div className="text-text text-base sm:text-lg font-bold  uppercase">
        All Shoes
      </div>
      <div className="flex gap-1 sm:gap-2 text-sm sm:text-base">
        <div className=" relative">
          <button
            className="text-text p-1 border-b-[1px]"
            onClick={() => setDisplayShoes(walking)}
          >
            Walking
          </button>
          {displayShoes === walking && <Underline />}
        </div>

        <div className="relative">
          <button
            className={"border-b-[1px] text-text p-1 "}
            onClick={() => setDisplayShoes(training)}
          >
            Training
          </button>

          {displayShoes === training && <Underline />}
        </div>

        <div className="relative">
          <button
            className={"border-b-[1px] text-text p-1 "}
            onClick={() => setDisplayShoes(running)}
          >
            Running
          </button>

          {displayShoes === running && <Underline />}
        </div>

        <div className="flex flex-1 p-1 justify-end ">
          <Link to="/marketplace">View All</Link>
        </div>
      </div>
      <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(145px,max-content))] sm:grid-cols-[repeat(auto-fit,minmax(165px,max-content))]  gap-1">
        {isLoading ? <ProductCardSkeleton count={10} /> : displayShoes.map((data) => {
          const productData = { ...data, quantity: 1 };
          return (
            <motion.div
              key={"sorted -" + productData.name}
              layout
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={productData} imgUrl={productData.imgUrl} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
