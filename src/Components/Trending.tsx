import ProductCard from "./ProductCard";
import mockData from "./mockData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/trending.css";

export function Trending() {
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
          {mockData.map((data) => (
            <ProductCard product={data} />
          ))}
        </Slider>
      </div>
    </>
  );
}
