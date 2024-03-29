import { GitHub, ShoppingCartOutlined, Search } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import SearchCategories from "./SearchCategories";
import { Badge } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { toggleCart } from "../../features/cartSlice";

export function Header() {
  const productsCount = useAppSelector((store) => store.cart.items.length);
  const dispatch = useAppDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <>
      <div className="flex justify-center py-6 px-4 max-w-screen-lg mx-auto">
        <div className="flex justify-start w-1/5 items-center">
          <h1 className="text-2xl font-bold text-text">
            <a href="/">
              S<span className="text-white bg-text px-1">C</span>art
            </a>
          </h1>
        </div>
        <div className="flex flex-grow bg-background shadow-text-variant  ">
          <div className="flex flex-grow justify-center items-center gap-3 text-sm text-text-variant ">
            <div className="flex-grow">
              <SearchBar />
            </div>
            <div className="border-l-2 border-text-variant h-1/2"></div>
            <div className="flex justify-center items-center px-4 cursor-pointer w-1/4">
              <SearchCategories />
            </div>
          </div>
          <button className="bg-primary aspect-square text-white">
            <Search />
          </button>
        </div>
        <div className="flex justify-end items-center w-1/5 gap-3 text-base">
          <a href="#">
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
