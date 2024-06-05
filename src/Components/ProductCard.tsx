import Rating from "@mui/material/Rating";
import { useAppDispatch } from "../features/hooks";
import { addProduct, toggleCart, TProducts } from "../features/cartSlice";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

type ProductCardProps = {
  product: TProducts;
  imgUrl?: string;
};

export default function ProductCard({ product, imgUrl }: ProductCardProps) {
  const salePrice = () => (product.price * (1 - product.sale)).toFixed(2);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product));
    const productNameParts = product.name.split(" ");
    const productName = productNameParts.slice(0, 2).join(" ");
    toast.success(productName + " successfully added to cart.", {
      action: {
        label: "View cart",
        onClick: () => {
          dispatch(toggleCart());
        },
      },
    });
  };

  return (
    <motion.div
      key={product.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="  border-2 border-foreground p-3 w-fit flex flex-col min-h-[320px] "
    >
      <div className="flex justify-center bg-foreground w-36 h-36">
        {imgUrl && (
          <img
            src={imgUrl}
            alt=""
            loading="lazy"
            width={"90%"}
            className="object-contain"
          />
        )}
      </div>
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
          onClick={() => handleAddToCart()}
          className="bg-white text-primary text-xs px-2  border-primary border"
        >
          Add to cart
        </button>
      </div>
    </motion.div>
  );
}
