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
      return imgUrls.find((item) => item.name.includes(productName))?.url;
    }
  };
  for (const category in shoesData) {
    shoesData[category].forEach((shoe) => {
      shoe.imgUrl = findImgUrl(imgUrls, shoe.name);
    });
  }
}
