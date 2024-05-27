import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";

type TImageUrl = {
  name: string;
  url: string;
};

export function fetchImageUrls(): Promise<TImageUrl[]> {
  const imageUrls = [] as TImageUrl[];
  const storageRef = ref(storage);
  const imgList = listAll(storageRef);

  return imgList.then((res) => {
    const urlPromises = res.items.map((item) =>
      getDownloadURL(item).then((url) => {
        imageUrls.push({ name: item.name, url: url });
      })
    );
    return Promise.all(urlPromises).then(() => imageUrls);
  });
}
