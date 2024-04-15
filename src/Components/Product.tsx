import Rating from "@mui/material/Rating/Rating";
import { Trending } from "./Trending";
import { storage } from "../features/firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";

const mockShoe = {
  id: 11,
  name: "Nike Air Zoom Pegasus 39 Shield",
  price: 120.25,
  type: "for men",
  sale: 0.15,
  stars: 4.3,
};

const ImageContainer = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="flex justify-center h-24 w-24 bg-foreground border border-text-variant">
      <img
        src={imgUrl}
        className="object-contain"
        alt=""
        width="95px"
        height="95px"
      />
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

export function Product() {
  const { name, price, sale, stars } = mockShoe;
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const salePrice = () => (150 * (1 - sale)).toFixed(2);

  useEffect(() => {
    // const urls: string[] = [];
    const promises: Promise<string>[] = [];

    for (let i = 1; i <= 3; i++) {
      const productRef = ref(storage, `${name} - ${i}.png`);
      const promise = getDownloadURL(productRef)
        // .then((url: string) => {
        //   urls.push(url);
        // })
        .catch((error) => {
          console.error("Error getting Image URL: ", error);
          return "";
        });

      promises.push(promise);
    }
    Promise.all(promises).then((urls) => {
      setImgUrls(urls);
    });
  }, [name]);

  return (
    <div className="flex flex-col gap-1 my-10 ">
      <span className="px-4 text-xs text-text-variant">
        Home {">"} Products {">"} {name}
      </span>
      <div className="grid grid-cols-2 px-4 gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center h-96 bg-foreground border border-text-variant">
            <img
              src={imgUrls[0]}
              className="object-contain"
              alt=""
              width="400px"
              height="400px"
            />
          </div>
          <div className="flex gap-2">
            <ImageContainer imgUrl={imgUrls[0]} />
            <ImageContainer imgUrl={imgUrls[1]} />
            <ImageContainer imgUrl={imgUrls[2]} />
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
              ${sale === 0 ? "$150.00" : salePrice()}
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
