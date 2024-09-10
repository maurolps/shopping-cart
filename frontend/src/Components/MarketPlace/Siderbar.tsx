import Slider from "@mui/material/Slider";
import { useState } from "react";
import sortProducts from "./sortProducts";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useAppSelector } from "../../features/hooks";
import { TProducts } from "../../features/cartSlice";

type TSidebarProps = {
  setProducts: React.Dispatch<React.SetStateAction<TProducts[]>>;
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    priceMin: number;
    priceMax: number;
  }>>
  sort: string;
};

const theme = createTheme({
  palette: {
    primary: {
      main: `rgb(var(--primary-color))`,
    },
  },
});

export default function Siderbar({ setProducts, sort, setFilters }: TSidebarProps) {
  const { running, training, walking } = useAppSelector(
    (state) => state.products.categories
  );

  const [priceRange, setPriceRange] = useState<number[]>([100, 400]);
  const [category, setCategory] = useState("All");
  const salePrice = (price: number, sale: number) => price * (1 - sale);

  function getCategoryProducts(category: string) {
    switch (category) {
      case "Running":
        return running;
      case "Training":
        return training;
      case "Walking":
        return walking;
      default:
        return [...running, ...training, ...walking];
    }
  }

  const filterByPrice = (range: number[], category: string) => {
    const products = getCategoryProducts(category);
    const filteredProducts = products.filter((product) => {
      const price = salePrice(product.price, product.sale);
      return price >= range[0] && price <= range[1];
    });
    const sortedProducts = sortProducts(filteredProducts, sort);
    setFilters({
      category: category,
      priceMin: range[0],
      priceMax: range[1],
    })
    setProducts(sortedProducts);
  };

  const handlePriceSelected = (
    e: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    if (!Array.isArray(newValue)) return;
    filterByPrice(newValue, category);
    e.preventDefault();
  };

  const handlePriceChange = (e: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    e.preventDefault();
  };

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    filterByPrice(priceRange, category);
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
                className={`flex justify-between cursor-pointer ${category === "All" ? "font-bold" : ""
                  }`}
                onClick={() => handleCategoryClick("All")}
              >
                <span>All</span>
                <span className="text-text-variant">30</span>
              </li>
              <li
                className={`flex justify-between cursor-pointer ${category === "Running" ? "font-bold" : ""
                  }`}
                onClick={() => handleCategoryClick("Running")}
              >
                <span>Running</span>
                <span className="text-text-variant">10</span>
              </li>
              <li
                className={`flex justify-between cursor-pointer ${category === "Training" ? "font-bold" : ""
                  }`}
                onClick={() => handleCategoryClick("Training")}
              >
                <span>Trainning</span>
                <span className="text-text-variant">10</span>
              </li>
              <li
                className={`flex justify-between cursor-pointer ${category === "Walking" ? "font-bold" : ""
                  }`}
                onClick={() => handleCategoryClick("Walking")}
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
          <div className="flex flex-col">
            <div className="flex justify-center">
              <ThemeProvider theme={theme}>
                <Slider
                  value={priceRange}
                  size="small"
                  onChange={handlePriceChange}
                  onChangeCommitted={handlePriceSelected}
                  sx={{ width: "80%" }}
                  color="primary"
                  valueLabelDisplay="auto"
                  min={0}
                  max={500}
                />
              </ThemeProvider>
            </div>
            <div className="flex justify-between self-center w-[90%] text-sm ">
              <span>0</span>
              <span>500</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
