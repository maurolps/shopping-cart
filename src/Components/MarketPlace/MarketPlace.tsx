import ProductCard from "../ProductCard";
import { Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { running, training, walking } from "../mockData.json";
import { motion } from "framer-motion";
import Siderbar from "./Siderbar";

export default function MarketPlace() {
  const allProducts = [...running, ...training, ...walking];
  const [products, setProducts] = useState(allProducts);
  const [sort, setSort] = useState(" ");

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    const sortedProducts = [...products];
    const salePrice = (price: number, sale: number) => price * (1 - sale);
    setSort(e.target.value);
    switch (e.target.value) {
      case "Lowest":
        sortedProducts.sort(
          (a, b) => salePrice(a.price, a.sale) - salePrice(b.price, b.sale)
        );
        setProducts(sortedProducts);
        break;
      case "Highest":
        sortedProducts.sort(
          (a, b) => salePrice(b.price, b.sale) - salePrice(a.price, a.sale)
        );
        setProducts(sortedProducts);
        break;
      case "Rating":
        sortedProducts.sort((a, b) => b.stars - a.stars);
        setProducts(sortedProducts);
        break;
    }
  };

  return (
    <div className="flex gap-4">
      <div className="flex justify-center min-w-[200px] ">
        <Siderbar setProducts={setProducts} />
      </div>
      <div className="flex flex-col gap-4 min-w-[700px]">
        <div className="div">
          <div className="flex justify-between w-full">
            <div className="text-lg font-semibold uppercase">MarketPlace</div>
            <div className="text-xs self-end">
              <Select
                input={<Input disableUnderline={true} />}
                value={sort}
                onChange={handleSortChange}
                size="small"
                sx={{ fontSize: "12px" }}
              >
                <MenuItem value=" ">
                  <em>Sort By</em>
                </MenuItem>
                <MenuItem value="Lowest">Lowest Price</MenuItem>
                <MenuItem value="Highest">Highest Price</MenuItem>
                <MenuItem value="Rating">Rating</MenuItem>
              </Select>
            </div>
          </div>
          <hr />
        </div>

        <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(155px,1fr))] gap-2">
          {products.map((data) => (
            <motion.div
              key={"sorted -" + data.name}
              layout
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
