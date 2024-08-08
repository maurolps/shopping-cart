import { useAppSelector } from "../features/hooks";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

export function SpecialOffer() {
  const productsCategories = useAppSelector(
    (state) => state.products.categories
  );

  const length = Object.keys(productsCategories).length;
  const specialOffer = length > 0 && productsCategories.specialOffer[0];

  return (
    <>
      <div className="  p-4  w-[500px] max-w-screen-lg mx-auto bg-gradient-to-r from-primary via-slate-500 to-slate-500">
        <div className="p-16 flex flex-col ">
          <div className="text-white text-sm uppercase">Special Offer</div>
          <div className="flex gap-1 ">
            <div className="text-white text-3xl font-bold p-4 uppercase">
              {specialOffer && (
                <>
                  NEW <br /> {specialOffer.name}
                </>
              )}
            </div>
            {specialOffer && (
              <>
                <div className="shadow-sm shadow-primary bg-foreground p-2 flex flex-col justify-center items-center">
                  {specialOffer && (
                    <img
                      loading="lazy"
                      src={specialOffer.imgUrl}
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
              </>
            )}
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
            <Link
              to={`${
                specialOffer ? "/product/" + specialOffer.id : "/marketplace"
              }`}
            >
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
