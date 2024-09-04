import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/trending.css";
import { useAppSelector } from "../features/hooks";

export function Trending() {
  const productsCategories = useAppSelector(
    (state) => state.products.categories
  );
  const trending = productsCategories.trending;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        }
      },

    ]
  };

  return (
    <>
      <div className="text-text text-base sm:text-lg font-bold py-4 uppercase">
        Trending
      </div>
      <div className="trending-slider m-auto max-w-4xl sm:mx-10 ">
        <Slider {...settings}>
          {trending &&
            trending.map((data) => {
              const productData = { ...data, quantity: 1 };
              return (
                <ProductCard
                  key={productData.id}
                  product={productData}
                  imgUrl={productData.imgUrl}
                />
              );
            })}
        </Slider>
      </div>
    </>
  );
}
