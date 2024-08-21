import { shoesData } from "../server";
import { fetchImageUrls } from "./fetchImageUrls";

type TImageUrl = {
  name: string;
  url: string;
};

export default async function updateImgUrl() {
  const imgUrls = await fetchImageUrls();
  const findImgUrl = (imgUrls: TImageUrl[], productName: string) => {
    if (imgUrls !== undefined) {
      return imgUrls.filter((item) => item.name.includes(productName + ' -'));
    }
  };
  for (const category in shoesData) {
    shoesData[category].forEach((shoe) => {
      const shoeImgUrls = findImgUrl(imgUrls, shoe.name);
      if (shoeImgUrls) {
        shoe.imgUrl = shoeImgUrls[0].url;
        shoe.imgUrlVariants = shoeImgUrls;
      }
    });
  }
}
