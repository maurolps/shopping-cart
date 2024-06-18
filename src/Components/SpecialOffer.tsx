import { useEffect, useState } from "react";
import { useAppSelector } from "../features/hooks";
import { specialOffer } from "./mockData.json";

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

    setImgUrl(findImgUrl(storedImgUrls, "Special Offer - 2.png"));
  }, [storedImgUrls]);

  return (
    <>
      <div className="grid grid-cols-2 gap-20  p-10  min-w-[900px] max-w-screen-lg mx-auto bg-gradient-to-r from-primary via-slate-500 to-slate-500">
        <div className="p-10 flex flex-col">
          <div className="text-white text-sm uppercase">Special Offer</div>
          <div className="text-white text-3xl font-bold p-4 uppercase">
            NEW <br /> {specialOffer.name}
          </div>
          <div className="text-foreground text-sm  p-4">
            <p>
              Get ready! Improve your footwear collection with our exclusive
              offer on ASICS Gel sneakers!
            </p>
            <p>
              Designed for maximum comfort, durability, and style. ASICS Gel is
              the ultimate choice for athletes and fashion enthusiasts alike.
            </p>
          </div>
          <div className="p-4">
            <button className="bg-call text-white text-sm px-2 p-2 w-fit uppercase ">
              see offer
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-primary bg-foreground">
          {imgUrl && (
            <img
              loading="lazy"
              src={imgUrl}
              className="object-contain  w-[90%] h-[90%]"
              alt=""
              style={{ rotate: "-25deg", scale: "1.2" }}
            />
          )}
        </div>
      </div>
    </>
  );
}
