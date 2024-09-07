import Rating from "@mui/material/Rating";
import { useAppDispatch } from "../features/hooks";
import { addProduct, toggleCart, TProducts } from "../features/cartSlice";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

type ProductCardProps = {
  product: TProducts;
  imgUrl?: string;
};

function Skeleton(): JSX.Element {
  return <div className="w-full h-4 bg-foreground animate-pulse my-1"></div>;
}

export default function ProductCard({ product, imgUrl }: ProductCardProps) {
  const salePrice = () => (product.price * (1 - product.sale)).toFixed(2);
  const dispatch = useAppDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

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
      className="  border-2 border-foreground p-1 sm:p-3 w-fit flex flex-col min-h-[320px] "
    >
      <Link to={`/product/${product.id}`}>
        <div className="flex flex-col ">
          <div
            className={`flex justify-center bg-foreground w-[140px] sm:w-36 aspect-square ${imageLoaded ? "" : "animate-pulse"
              }`}
          >
            {imgUrl && (
              <img
                src={imgUrl}
                alt=""
                loading="lazy"
                style={{ opacity: imageLoaded ? 1 : 0 }}
                width={"90%"}
                className="object-contain transition-opacity duration-500"
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </div>
          <div className="text-text text-sm text-start font-bold max-w-36">
            {imageLoaded ? product.name : <Skeleton />}
          </div>
        </div>
      </Link>
      <div>
        {imageLoaded ? (
          <Rating
            name="Shoe Stars"
            value={product.stars}
            precision={0.5}
            readOnly
            size="small"
          />
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="text-text font-bold text-md text-start  max-w-36">
        {imageLoaded ? (
          product.sale === 0 ? (
            product.price
          ) : (
            salePrice()
          )
        ) : (
          <Skeleton />
        )}
      </div>
      {}
      {imageLoaded && product.sale !== 0 && (
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
        {imageLoaded ? (
          <button
            onClick={() => handleAddToCart()}
            className="bg-white text-primary text-xs px-2  border-primary border"
          >
            Add to cart
          </button>
        ) : (
          <Skeleton />
        )}
      </div>
    </motion.div>
  );
}
