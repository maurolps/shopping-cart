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
  };

  return (
    <>
      <div className="trending-slider w-[900px] m-auto">
        <div className="text-text text-lg font-bold p-4 uppercase">
          Trending
        </div>
        <Slider {...settings}>
          {trending.map((data) => {
            return <ProductCard product={data} imgUrl={data.imgUrl} />;
          })}
        </Slider>
      </div>
    </>
  );
}
