import ProductCard from "./ProductCard";
import { trending } from "./mockData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/trending.css";
import { useAppSelector } from "../features/hooks";
import { findImgUrl } from "../features/findImgUrl";

export function Trending() {
  const imgUrls = useAppSelector((state) => state.products.imageUrls);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  const findUrl = (productName: string) => findImgUrl(imgUrls, productName);

  return (
    <>
      <div className="trending-slider w-[900px] m-auto">
        <div className="text-text text-lg font-bold p-4 uppercase">
          Trending
        </div>
        <Slider {...settings}>
          {trending.map((data) => {
            return <ProductCard product={data} imgUrl={findUrl(data.name)} />;
          })}
        </Slider>
      </div>
    </>
  );
}
