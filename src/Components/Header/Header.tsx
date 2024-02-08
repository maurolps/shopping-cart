import { GitHub, LightMode, ShoppingCartOutlined } from "@mui/icons-material";
import SearchBar from "./SearchBar";

export function Header() {
  return (
    <header className="bg-[#f9f9f9] shadow-sm">
      <div className="flex justify-center py-6 max-w-screen-lg mx-auto">
        <div className="flex justify-start w-1/5 items-center">
          <h1 className="text-3xl font-bold text-[#313131]">
            <a href="/">SCart</a>
          </h1>
        </div>
        <div className="flex flex-grow bg-white shadow-zinc-300 shadow-sm p-1">
          <div className="flex flex-grow justify-center items-center gap-3 text-sm text-[#c0c6cc] ">
            <div className="flex-grow">
              <SearchBar />
            </div>
            <div className="border-l-2 border-[#c7c9ce] h-1/2"></div>
            <div className="flex justify-center items-center px-4 cursor-pointer w-1/4">
              All &#x21B4;
            </div>
          </div>
          <button className="bg-[#60d4d4] p-2 text-white">GO</button>
        </div>
        <div className="flex justify-end items-center w-1/5 gap-3 text-base">
          <a href="#">
            <GitHub sx={{ color: "#c0c6cc" }} />
          </a>
          <a href="#">
            <ShoppingCartOutlined sx={{ color: "#c0c6cc" }} />
          </a>
          <a href="#">
            <LightMode sx={{ color: "#c0c6cc" }} />
          </a>
        </div>
      </div>
    </header>
  );
}
