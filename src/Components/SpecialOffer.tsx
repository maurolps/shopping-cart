import { useEffect, useState } from "react";
import { useAppSelector } from "../features/hooks";
import { specialOffer } from "./mockData.json";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

type TImageUrl = {
  name: string;
  url: string;
};

export function SpecialOffer() {
  const storedImgUrls = useAppSelector((state) => state.products.imageUrls);
  const [imgUrl, setImgUrl] = useState<string | undefined>("");

  useEffect(() => {
    const findImgUrl = (imgUrls: TImageUrl[], productName: string) => {
      if (imgUrls !== undefined) {
        return imgUrls.find((item) => item.name.includes(productName))?.url;
      }
    };

    setImgUrl(findImgUrl(storedImgUrls, "Special Offer - 1.png"));
  }, [storedImgUrls]);

  return (
    <>
      <div className="  p-4  w-[500px] max-w-screen-lg mx-auto bg-gradient-to-r from-primary via-slate-500 to-slate-500">
        <div className="p-16 flex flex-col ">
          <div className="text-white text-sm uppercase">Special Offer</div>
          <div className="flex gap-1 ">
            <div className="text-white text-3xl font-bold p-4 uppercase">
              NEW <br /> {specialOffer.name}
            </div>
            <div className="shadow-sm shadow-primary bg-foreground p-2 flex flex-col justify-center items-center">
              {imgUrl && (
                <img
                  loading="lazy"
                  src={imgUrl}
                  className="object-contain  "
                  alt=""
                  style={{ scale: "1.1" }}
                />
              )}
              <div className="flex flex-col gap-2 text-sm">
                <Rating
                  name="Shoe Stars"
                  value={specialOffer.stars}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <div className="flex gap-1 ">
                  <span className="text-text-variant line-through">
                    ${specialOffer.price}
                  </span>
                  <span className="text-call text-xs font-bold bg-red-50 pl-1 pr-1">
                    {specialOffer.sale * 100}% off
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-text-variant text-sm  p-4">
            <p>
              Get ready! Improve your footwear collection with our exclusive
              offer on ASICS Gel sneakers!
            </p>
            <p>
              Designed for maximum comfort, durability, and style. ASICS Gel is
              the ultimate choice for athletes and fashion enthusiasts alike.
            </p>
          </div>
          <div className="p-4 flex justify-center">
            <Link to="/product/special-offer">
              <button className="bg-call text-white text-sm px-2 p-2 w-fit uppercase ">
                see offer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
