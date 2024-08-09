import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
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

  useEffect(() => {
    if (!displayShoes.length) setDisplayShoes(walking);
  }, [displayShoes, walking]);

  return (
    <div className=" flex flex-col gap-4 w-[900px] m-auto">
      <div className="text-text text-lg px-4 font-bold  uppercase">
        All Shoes
      </div>
      <div className="flex">
        <div className=" relative">
          <button
            className="text-text p-1 px-4 border-b-[1px]"
            onClick={() => setDisplayShoes(walking)}
          >
            Walking
          </button>
          {displayShoes === walking && <Underline />}
        </div>

        <div className="relative">
          <button
            className={"border-b-[1px] text-text p-1 px-2"}
            onClick={() => setDisplayShoes(training)}
          >
            Training
          </button>

          {displayShoes === training && <Underline />}
        </div>

        <div className="relative">
          <button
            className={"border-b-[1px] text-text p-1 px-2"}
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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(155px,1fr))] gap-2">
        {displayShoes.map((data) => {
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
