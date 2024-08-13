import ProductCard from "../ProductCard";
import { Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import Siderbar from "./Siderbar";
import sortProducts from "./sortProducts";
import { useAppSelector } from "../../features/hooks";

export default function MarketPlace() {
  const productsCategories = useAppSelector(
    (state) => state.products.categories
  );
  const { running, training, walking } = productsCategories;
  const allProducts = [...running, ...training, ...walking];
  const [products, setProducts] = useState(allProducts);
  const [sort, setSort] = useState(" ");

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    setSort(e.target.value);
    const sortedProducts = sortProducts(products, e.target.value);
    setProducts(sortedProducts);
  };

  return (
    <div className="flex gap-4">
      <div className="flex justify-center min-w-[200px] ">
        <Siderbar setProducts={setProducts} sort={sort} />
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
          {products.map((data) => {
            const productData = { ...data, quantity: 1 };
            return (
              <motion.div
                key={"sorted -" + data.id}
                layout
                transition={{ duration: 0.5 }}
              >
                <ProductCard product={productData} imgUrl={data.imgUrl} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
