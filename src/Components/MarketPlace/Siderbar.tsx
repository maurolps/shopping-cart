import Slider from "@mui/material/Slider";
import { running, training, walking } from "../mockData.json";
import { useState } from "react";

type TSidebarProps = {
  setProducts: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        price: number;
        type: string;
        sale: number;
        stars: number;
      }[]
    >
  >;
};

export default function Siderbar({ setProducts }: TSidebarProps) {
  const allProducts = [...running, ...training, ...walking];
  const [category, setCategory] = useState("All");

  const handleClick = (category: string, products: typeof allProducts) => {
    setCategory(category);
    setProducts(products);
  };

  return (
    <>
      <div className="flex flex-col w-full gap-10 mt-[40px]">
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-sm text-text font-semibold uppercase">
              Category
            </span>
            <hr />
          </div>
          <div className="flex flex-col text-sm gap-1 ">
            <ul>
              <li
                className={`flex justify-between cursor-pointer ${
                  category === "All" ? "font-bold" : ""
                }`}
                onClick={() => handleClick("All", allProducts)}
              >
                <span>All</span>
                <span className="text-text-variant">30</span>
              </li>
              <li
                className={`flex justify-between cursor-pointer ${
                  category === "Running" ? "font-bold" : ""
                }`}
                onClick={() => handleClick("Running", running)}
              >
                <span>Running</span>
                <span className="text-text-variant">10</span>
              </li>
              <li
                className={`flex justify-between cursor-pointer ${
                  category === "Training" ? "font-bold" : ""
                }`}
                onClick={() => handleClick("Training", training)}
              >
                <span>Trainning</span>
                <span className="text-text-variant">10</span>
              </li>
              <li
                className={`flex justify-between cursor-pointer ${
                  category === "Walking" ? "font-bold" : ""
                }`}
                onClick={() => handleClick("Walking", walking)}
              >
                <span>Walking</span>
                <span className="text-text-variant">10</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-sm text-text font-semibold uppercase">
              Price
            </span>
            <hr />
          </div>
          <div className="flex justify-center">
            <Slider
              value={[100, 300]}
              size="small"
              sx={{ width: "80%" }}
              valueLabelDisplay="auto"
              min={0}
              max={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
