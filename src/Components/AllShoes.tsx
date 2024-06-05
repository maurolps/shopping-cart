import { useState } from "react";
import ProductCard from "./ProductCard";
import { running, training, walking } from "./mockData.json";

export default function AllShoes() {
  const [displayShoes, setDisplayShoes] = useState(training);
  return (
    <div className=" flex flex-col gap-4 w-[900px] m-auto">
      <div className="text-text text-lg px-4 font-bold  uppercase">
        All Shoes
      </div>
      <div className="flex gap-3">
        <button
          className={`bg-foreground text-text p-1 px-2 ${
            displayShoes === walking ? "bg-primary text-white" : ""
          }`}
          onClick={() => setDisplayShoes(walking)}
        >
          Walking
        </button>
        <button
          className={`bg-foreground text-text p-1 px-2 ${
            displayShoes === training ? "bg-primary text-white" : ""
          }`}
          onClick={() => setDisplayShoes(training)}
        >
          Training
        </button>
        <button
          className={`bg-foreground text-text p-1 px-2 ${
            displayShoes === running ? "bg-primary text-white" : ""
          }`}
          onClick={() => setDisplayShoes(running)}
        >
          Running
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(155px,1fr))] gap-2">
        {displayShoes.map((data) => (
          <ProductCard product={data} />
        ))}
      </div>
    </div>
  );
}
