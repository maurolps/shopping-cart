import Rating from "@mui/material/Rating/Rating";
import { Trending } from "./Trending";

export function Product() {
  const sale = 0.2;
  const salePrice = () => (150 * (1 - sale)).toFixed(2);
  return (
    <div className="flex flex-col gap-1 my-10 ">
      <span className="px-4 text-xs text-text-variant">
        Home {">"} Products {">"} Nike
      </span>
      <div className="grid grid-cols-2 px-4 gap-10">
        <div className="flex flex-col gap-2">
          <div className=" h-96 bg-foreground border border-text-variant"></div>
          <div className="flex gap-2">
            <div className="h-24 w-24 bg-foreground border border-text-variant"></div>
            <div className="h-24 w-24 bg-foreground border border-text-variant"></div>
            <div className="h-24 w-24 bg-foreground border border-text-variant"></div>
          </div>
        </div>

        <div className="flex flex-col gap-10 max-w-96">
          <div>
            <span className="text-text font-bold text-xl">
              Nike Air Max 270
            </span>
            <div>
              <Rating
                name="Shoe Stars"
                value={4.5}
                precision={0.5}
                readOnly
                size="small"
              />
            </div>
            <div className="text-text-variant text-sm">(243) reviews</div>
          </div>
          <div>
            <div className="text-text font-bold text-3xl text-start  max-w-36">
              ${sale === 0 ? "$150.00" : salePrice()}
            </div>
            {sale !== 0 && (
              <div className="flex gap-2 text-lg">
                <span className="text-text-variant line-through px-1">
                  ${150}
                </span>
                <span className="text-call text-xs bg-red-50 px-2 flex items-center">
                  {sale * 100}% off
                </span>
              </div>
            )}
          </div>

          <div className="div">
            <span className="text-text font-bold text-sm">Size</span>
            <div className="flex flex-row gap-1 ">
              <div className="p-2 px-3 border border-text-variant">40</div>
              <div className="p-2 px-3 border border-text-variant bg-primary text-white">
                41
              </div>
              <div className="p-2 px-3 border border-text-variant">42</div>
              <div className="p-2 px-3 border border-text-variant">43</div>
              <div className="p-2 px-3 border border-text-variant">44</div>
              <div className="p-2 px-3 border border-text-variant">45</div>
            </div>
          </div>

          <button className="bg-primary text-white font-bold text-sm w-full p-2  ">
            Add to cart
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Trending />
      </div>
    </div>
  );
}
