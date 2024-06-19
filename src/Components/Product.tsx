import Rating from "@mui/material/Rating/Rating";
import { Trending } from "./Trending";
import { useEffect, useState } from "react";
import { TProducts, addProduct, toggleCart } from "../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { toast } from "sonner";
import { running, training, walking } from "../Components/mockData.json";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ImageContainer = ({
  imgUrl,
  handleClick,
}: {
  imgUrl: string;
  handleClick: () => void;
}) => {
  return (
    <div className="flex justify-center  items-center h-24 w-24 bg-foreground border border-text-variant cursor-pointer">
      <motion.div
        key={imgUrl}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center w-[80%] h-[80%]"
      >
        <img
          loading="lazy"
          src={imgUrl}
          className="object-contain"
          onClick={() => handleClick()}
        />
      </motion.div>
    </div>
  );
};

function SizeContainer({
  size,
  selected,
  handleClick,
}: {
  size: number;
  selected: boolean;
  handleClick: () => void;
}): JSX.Element {
  return (
    <button
      className={`flex justify-center items-center h-8 w-8 bg-foreground border border-text-variant ${
        selected ? "bg-primary text-white border-none" : ""
      }`}
      onClick={() => handleClick()}
    >
      <span className="text-xs">{size}</span>
    </button>
  );
}

function SizeSelector({ sizes }: { sizes: number[] }) {
  const [selectedSize, setSelectedSize] = useState<number>(41);

  const handleSizeClick = (size: number) => {
    setSelectedSize(size === selectedSize ? 0 : size);
  };

  return (
    <div className="flex flex-row gap-1 ">
      {sizes.map((size: number) => (
        <SizeContainer
          key={size}
          size={size}
          selected={size === selectedSize}
          handleClick={() => handleSizeClick(size)}
        />
      ))}
    </div>
  );
}
function getProductById(id: number) {
  const products = [...running, ...training, ...walking];
  const product = products.find((product) => product.id === id);
  if (product) return product;
  else throw new Error("Product not found");
}

type TImageUrl = {
  name: string;
  url: string;
};

const findImgUrl = (imgUrls: TImageUrl[], productName: string) => {
  if (imgUrls !== undefined) {
    return imgUrls.find((item) => item.name.includes(productName))?.url;
  }
};

export default function Product() {
  const { id } = useParams();
  if (!id) throw new Error("Unexpected product id");
  const product: TProducts = getProductById(parseInt(id));
  const { name, price, sale, stars } = product;
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const [imgIndex, setImgIndex] = useState(0);
  const salePrice = () => (price * (1 - sale)).toFixed(2);
  const dispatch = useAppDispatch();
  const storedImgUrls = useAppSelector((state) => state.products.imageUrls);

  const handleImgClick = (index: number) => {
    setImgIndex(index);
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const urls: string[] = [];
    for (let i = 1; i <= 3; i++) {
      const url = findImgUrl(storedImgUrls, `${name} - ${i}.png`);
      if (url) {
        urls.push(url);
      }
    }

    setImgUrls(urls);
  }, [name, storedImgUrls]);

  return (
    <div className="flex flex-col gap-1 my-10 ">
      <span className="px-4 text-xs text-text-variant">
        Home {">"} Products {">"} {name}
      </span>
      <div className="grid grid-cols-2 px-4 gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center h-96 w-96 bg-foreground border border-text-variant">
            <motion.div
              key={"index-" + imgUrls[imgIndex]}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center w-[80%] h-[80%]"
            >
              <img
                loading="lazy"
                src={imgUrls[imgIndex]}
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="flex gap-2">
            <ImageContainer
              imgUrl={imgUrls[0]}
              handleClick={() => handleImgClick(0)}
            />
            <ImageContainer
              imgUrl={imgUrls[1]}
              handleClick={() => handleImgClick(1)}
            />
            <ImageContainer
              imgUrl={imgUrls[2]}
              handleClick={() => handleImgClick(2)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 max-w-96">
          <div>
            <span className="text-text font-bold text-xl">{name}</span>
            <div>
              <Rating
                name="Shoe Stars"
                value={stars}
                precision={0.5}
                readOnly
                size="small"
              />
            </div>
            <div className="text-text-variant text-sm">(243) reviews</div>
          </div>
          <div>
            <div className="text-text font-bold text-3xl text-start  max-w-36">
              ${sale === 0 ? price : salePrice()}
            </div>
            {sale !== 0 && (
              <div className="flex gap-2 text-lg">
                <span className="text-text-variant line-through px-1">
                  ${price}
                </span>
                <span className="text-call text-xs bg-red-50 px-2 flex items-center">
                  {sale * 100}% off
                </span>
              </div>
            )}
          </div>

          <div className="div">
            <span className="text-text font-bold text-sm">Size</span>

            <SizeSelector sizes={[41, 42, 43, 44, 45]} />
          </div>

          <button
            onClick={() => handleAddToCart()}
            className="bg-primary text-white font-bold text-sm w-full p-2  "
          >
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
