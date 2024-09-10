import ProductCard from "../ProductCard";
import { Input, MenuItem, Select, SelectChangeEvent, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import Siderbar from "./Siderbar";
import sortProducts from "./sortProducts";
import { useAppSelector } from "../../features/hooks";
import _ from 'lodash';
import FiltersBar from "./FiltersBar";

export default function MarketPlace() {
  const productsCategories = useAppSelector(
    (state) => state.products.categories
  );
  const { running, training, walking } = productsCategories;
  const allProducts = [...running, ...training, ...walking];
  const [products, setProducts] = useState(allProducts);
  const [sort, setSort] = useState(" ");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({ category: 'All', priceMin: 0, priceMax: 500 })

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    setSort(e.target.value);
    const sortedProducts = sortProducts(products, e.target.value);
    setProducts(sortedProducts);
  };

  const toggleDrawer = (status: boolean) => {
    console.log('toggle: ', status);
    setFiltersOpen(status);
  }

  return (
    <div className="flex gap-4 w-full relative">
      <div className="hidden sm:flex justify-center min-w-[200px] ">
        <Siderbar setProducts={setProducts} sort={sort} setFilters={setFilters} />
      </div>

      <SwipeableDrawer
        anchor="left"
        open={filtersOpen}
        PaperProps={{
          sx: { width: '70%', maxWidth: '320px' }
        }}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <div className="flex justify-center p-2 sm:p-4 mt-12 ">
          <Siderbar setProducts={setProducts} sort={sort} setFilters={setFilters} />
        </div>

      </SwipeableDrawer>
      <div className="flex flex-col gap-4 w-full">
        <div className="div">
          <div className="flex justify-between ">

            <div className="text-lg font-semibold uppercase">
              MarketPlace
            </div>
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
          <FiltersBar filters={filters} toggleDrawer={toggleDrawer} />
        </div>

        <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(145px,max-content))] sm:grid-cols-[repeat(auto-fit,minmax(165px,max-content))]  gap-1">
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
