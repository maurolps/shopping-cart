import Rating from "@mui/material/Rating";
import { useAppDispatch } from "../features/hooks";
import { addProduct } from "../features/cartSlice";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    sale: number;
    stars: number;
    quantity?: number;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const salePrice = () => (product.price * (1 - product.sale)).toFixed(2);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="  border-2 border-foreground p-3 w-fit flex flex-col min-h-[320px] ">
        <div className="bg-foreground w-36 h-36"></div>
        <div className="text-text text-sm text-start font-bold max-w-36">
          {product.name}
        </div>
        <div>
          <Rating
            name="Shoe Stars"
            value={product.stars}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
        <div className="text-text font-bold text-md text-start  max-w-36">
          ${product.sale === 0 ? product.price : salePrice()}
        </div>
        {product.sale !== 0 && (
          <div className="flex gap-2 text-sm">
            <span className="text-text-variant line-through">
              ${product.price}
            </span>
            <span className="text-call text-xs bg-red-50 pl-1 pr-1">
              {product.sale * 100}% off
            </span>
          </div>
        )}
        <div className="w-full my-2  flex-grow flex flex-col justify-end">
          <button
            onClick={() => dispatch(addProduct(product))}
            className="bg-white text-primary text-xs px-2  border-primary border"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
