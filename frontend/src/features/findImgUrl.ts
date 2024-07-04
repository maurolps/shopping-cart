type TImageUrl = {
  name: string;
  url: string;
};

export const findImgUrl = (imgUrls: TImageUrl[], productName: string) => {
  if (imgUrls !== undefined) {
    return imgUrls.find((item) => item.name.includes(productName + " - 1"))
      ?.url;
  }
};
