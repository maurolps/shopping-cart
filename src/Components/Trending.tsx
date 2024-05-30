import ProductCard from "./ProductCard";
import { trending } from "./mockData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/trending.css";

type TImageUrl = {
  name: string;
  url: string;
};

export function Trending({ imgUrls }: { imgUrls: TImageUrl[] }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const loadImgUrl = (productName: string) => {
    if (imgUrls[0] !== undefined) {
      return imgUrls.find((item) => item.name.includes(productName + " - 1"))
        ?.url;
    }
  };
  return (
    <>
      <div className="trending-slider w-[900px] m-auto">
        <div className="text-text text-lg font-bold p-4 uppercase">
          Trending
        </div>
        <Slider {...settings}>
          {trending.map((data) => {
            // console.log(loadImgUrl(data.name));
            return (
              <ProductCard product={data} imgUrl={loadImgUrl(data.name)} />
            );
          })}
        </Slider>
      </div>
    </>
  );
}
