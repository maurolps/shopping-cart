import ProductCard from "../ProductCard";
import { Input, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { running, training, walking } from "../mockData.json";

export default function MarketPlace() {
  const allProducts = [...running, ...training, ...walking];

  const [sort, setSort] = useState(" ");
  const handleCategorieChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 min-w-[700px]">
      <div className="div">
        <div className="flex justify-between w-full">
          <div className="text-lg font-semibold uppercase">MarketPlace</div>
          <div className="text-xs self-end">
            <Select
              input={<Input disableUnderline={true} />}
              value={sort}
              onChange={handleCategorieChange}
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
        {allProducts.map((data) => (
          <ProductCard product={data} />
        ))}
      </div>
    </div>
  );
}
