import { useState } from "react";
import ProductCard from "./ProductCard";
import { running, training, walking } from "./mockData.json";
import { motion } from "framer-motion";
import { findImgUrl } from "../features/findImgUrl";
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

// function CardSkeleton() {
//   const cardCounter = 10;
//   return (
//     <>
//       {Array.from({ length: cardCounter }, (_, index) => {
//         return (
//           <div
//             key={"cardSlider" + index}
//             className="w-[200px] h-[200px] bg-slate-300 animate-pulse"
//           ></div>
//         );
//       })}
//     </>
//   );
// }

export default function AllShoes() {
  const [displayShoes, setDisplayShoes] = useState(training);
  const imgUrls = useAppSelector((state) => state.products.imageUrls);
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
        {displayShoes.map((data) => (
          <motion.div
            key={"sorted -" + data.name}
            layout
            transition={{ duration: 0.5 }}
          >
            <ProductCard
              product={data}
              imgUrl={findImgUrl(imgUrls, data.name)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
