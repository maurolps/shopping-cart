import Rating from "@mui/material/Rating/Rating";
import { Trending } from "./Trending";
import { useEffect, useState } from "react";
import { TProducts, addProduct, toggleCart } from "../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      className={`flex justify-center items-center h-8 w-8 bg-foreground border border-text-variant ${selected ? "bg-primary text-white border-none" : ""
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
function getProductById(id: number, products: TProducts[]) {
  const product = products.find((product) => product.id === id);
  if (product) return product;
  else throw new Error("Product not found");
}

export default function Product() {
  const { id } = useParams();
  if (!id) throw new Error("Unexpected product id");
  // const productsCategories = useAppSelector(
  //   (state) => state.products.categories
  // );
  // const { running, training, walking, specialOffer, trending } =
  //   productsCategories;
  // const allProducts = [
  //   ...running,
  //   ...training,
  //   ...walking,
  //   ...specialOffer,
  //   ...trending,
  // ];
  // const product: TProducts = getProductById(parseInt(id), allProducts);
  const product: TProducts =
  {
    "id": 1,
    "name": "Nike Air Zoom Pegasus 38",
    "price": 120.55,
    "type": "for men",
    "sale": 0.2,
    "stars": 4.5,
    "imgUrl": "https://firebasestorage.googleapis.com/v0/b/shopping-cart-d8714.appspot.com/o/Nike%20Air%20Zoom%20Pegasus%2038%20-%203.png?alt=media&token=e826749b-6341-4934-8893-05a657f463a8",
    "imgUrlVariants": [
      {
        "name": "Nike Air Zoom Pegasus 38 - 3.png",
        "url": "https://firebasestorage.googleapis.com/v0/b/shopping-cart-d8714.appspot.com/o/Nike%20Air%20Zoom%20Pegasus%2038%20-%203.png?alt=media&token=e826749b-6341-4934-8893-05a657f463a8"
      },
      {
        "name": "Nike Air Zoom Pegasus 38 - 2.png",
        "url": "https://firebasestorage.googleapis.com/v0/b/shopping-cart-d8714.appspot.com/o/Nike%20Air%20Zoom%20Pegasus%2038%20-%202.png?alt=media&token=8c78f7e7-8a79-43d1-ae56-66609e2d92fa"
      },
      {
        "name": "Nike Air Zoom Pegasus 38 - 1.png",
        "url": "https://firebasestorage.googleapis.com/v0/b/shopping-cart-d8714.appspot.com/o/Nike%20Air%20Zoom%20Pegasus%2038%20-%201.png?alt=media&token=85f83c49-26e0-4d34-98d8-aa95f8f1e589"
      }
    ]
  }
  const { name, price, sale, stars } = product;
  const imgUrls = product?.imgUrlVariants;
  const [imgIndex, setImgIndex] = useState(0);
  const salePrice = () => (price * (1 - sale)).toFixed(2);
  const dispatch = useAppDispatch();

  const handleImgClick = (index: number) => {
    setImgIndex(index);
  };

  const handleAddToCart = () => {
    const productData = { ...product, quantity: 1 };
    dispatch(addProduct(productData));
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
  }, [name]);

  return (
    <div className="flex flex-col gap-1 my-10 ">
      <span className="text-xs text-text-variant">
        <Link to="/"> Home </Link> {">"}
        <Link to="/marketplace"> Products </Link>
        {">"} {name}
      </span>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center w-full aspect-square sm:h-96 sm:w-96 bg-foreground border border-text-variant">
            <motion.div
              key={"index-" + imgIndex}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center w-[80%] h-[80%]"
            >
              <img
                loading="lazy"
                src={imgUrls ? imgUrls[imgIndex].url : ""}
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="flex gap-2">
            <ImageContainer
              imgUrl={imgUrls ? imgUrls[0].url : ""}
              handleClick={() => handleImgClick(0)}
            />
            <ImageContainer
              imgUrl={imgUrls ? imgUrls[1].url : ""}
              handleClick={() => handleImgClick(1)}
            />
            <ImageContainer
              imgUrl={imgUrls ? imgUrls[2].url : ""}
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
      <div className="w-dvw mt-10">
        <Trending />
      </div>
    </div>
  );
}
