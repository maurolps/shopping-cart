import { GitHub, ShoppingCartOutlined } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import SearchCategories from "./SearchCategories";
import { Badge } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { toggleCart, TProducts } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const productsCategories = useAppSelector(
    (state) => state.products.categories
  );
  const { running = [], training = [], walking = [] } = productsCategories;
  const allProducts = [running, training, walking].flat();

  const productsCount = useAppSelector((store) => store.cart.items.length);
  const dispatch = useAppDispatch();
  const [searchData, setSearchData] = useState([] as TProducts[]);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  const handleCategorieChange = (categorie: string) => {
    switch (categorie) {
      case "Running":
        setSearchData(running);
        break;
      case "Training":
        setSearchData(training);
        break;
      case "Walking":
        setSearchData(walking);
        break;
      default:
        setSearchData(allProducts);
    }
  };

  useEffect(() => {
    if (!searchData.length) setSearchData(allProducts);
  }, [searchData, allProducts]);

  return (
    <>
      <div className="flex justify-center max-w-screen-lg mx-auto">
        <div className="flex justify-start w-1/6 items-center">
          <h1 className="text-sm sm:text-2xl font-bold text-text">
            <Link to="/">
              S<span className="text-white bg-text px-1">C</span>ART
            </Link>
          </h1>
        </div>
        <div className="flex flex-grow bg-background shadow-text-variant  ">
          <div className="flex flex-grow justify-between gap-1 sm:gap-3 items-center text-sm text-text-variant ">
            <div className="flex-grow ">
              <SearchBar searchData={searchData} />
            </div>
            <div className="hidden sm:block border-l-2 border-text-variant h-1/2"></div>
            <div className="flex justify-center items-center cursor-pointer">
              <SearchCategories categorieChange={handleCategorieChange} />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center w-1/6 gap-3 text-base">
          <a href="https://github.com/maurolps/shopping-cart">
            <GitHub sx={{ color: "rgba(var(--text-variant-color))" }} />
          </a>
          <div className="cursor-pointer">
            <Badge
              badgeContent={productsCount}
              color="error"
              onClick={toggleCartHandler}
            >
              <ShoppingCartOutlined
                sx={{ color: "rgba(var(--text-variant-color))" }}
              />
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
}
